import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase, type Profile } from '../lib/supabase';
import { pullRemoteProgress, pushLocalProgress, setProgressSyncUser } from '../lib/progress';
import type { Entitlements } from '../lib/completion';

export type PlantRole = 'head' | 'supervisor' | 'operator';
export interface Membership { plant_id: string; plant_role: PlantRole }

interface AuthCtx {
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  /** loading covers the initial session lookup, but after a fresh sign-in it
   *  is already false while the profile is still being fetched — so isAdmin /
   *  canCreate briefly read false and a staff-gated page bounces the very
   *  person it should admit. Gate on this instead. */
  authReady: boolean;
  isAdmin: boolean;
  isCsm: boolean;
  canCreate: boolean; // admin or CSM — may use the Content Studio
  /** the training path this user is locked to (set by the admin at invite time);
   *  null = free choice (admins, CSMs, and legacy unassigned accounts) */
  assignedRole: 'operator' | 'supervisor' | 'internal' | null;
  /** Modules this person's organisation bought. NULL = unrestricted, i.e. every
   *  internal account. Pass to visibleModules()/roleCompletion() so what is
   *  shown AND what is counted both respect what was sold. */
  entitlements: Entitlements;
  /** plants this person belongs to; non-empty means they can browse the
   *  Equipment Library for those plants (read-only unless they are staff) */
  myPlantIds: string[];
  /** plants where they are head or supervisor — i.e. have a team to look at */
  managedPlantIds: string[];
  /** account was provisioned with a temporary password — hold it on the
   *  set-password screen until it chooses its own. Cleared by SetPassword in
   *  the same updateUser call that sets the new password. */
  mustSetPassword: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: string | null; needsConfirm: boolean }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  refreshProfile: () => Promise<void>;
}

const Ctx = createContext<AuthCtx | null>(null);
export const useAuth = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAuth must be used within AuthProvider');
  return v;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [entitlements, setEntitlements] = useState<Entitlements>(null);
  const [memberships, setMemberships] = useState<Membership[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProfile = useCallback(async (userId: string) => {
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single();
    const prof = (data as Profile) ?? null;
    if (prof && !prof.active) {
      // a deactivated (or un-invited) account is signed straight back out —
      // do this BEFORE exposing any profile so gated content never flashes
      await supabase.auth.signOut();
      setProfile(null);
      setEntitlements(null);
      setMemberships([]);
      setProgressSyncUser(null);
      return;
    }
    // Entitlements resolve BEFORE the profile is exposed. Setting the profile
    // first would render one frame with entitlements still null — which reads
    // as "unrestricted" — flashing modules a client never bought.
    // plants this person belongs to — drives Equipment Library access. The
    // read-self policy on plant_members means this returns only their own rows.
    let mems: { plant_id: string; plant_role: string }[] | null = null;
    if (prof) {
      ({ data: mems } = await supabase.from('plant_members').select('plant_id,plant_role'));
      setMemberships((mems ?? []) as Membership[]);
    }
    // Entitlements are PLANT-driven, not org-driven. The org is only the
    // tenancy boundary for reads; what a person may LEARN comes from the plants
    // they sit on. Keying this off org_id was a live bug: the two original
    // plants carry no client org, so a supervisor placed on one fell through
    // the "DigitalPaani account — unrestricted" branch and saw the whole
    // catalogue instead of her plant's three modules.
    const isStaff = prof?.role === 'admin' || prof?.role === 'csm';
    const plantIds = (mems ?? []).map((m) => m.plant_id as string);
    if (!prof || isStaff) {
      setEntitlements(null); // staff learn and curate the whole catalogue
    } else if (plantIds.length > 0) {
      // on a plant: the union of what their plants grant — org or no org
      const { data: grants } = await supabase
        .from('plant_modules')
        .select('module_id')
        .in('plant_id', plantIds);
      setEntitlements(new Set((grants ?? []).map((g) => g.module_id as string)));
    } else {
      // no plant: a client account has nothing yet; an org-less plain user is
      // a legacy internal learner and keeps the full catalogue
      setEntitlements(prof.org_id ? new Set() : null);
    }
    setProfile(prof);
    setProgressSyncUser(userId);
    // progress sync must never gate first paint: a slow/failed Supabase call
    // here used to hang the whole app on the loading spinner. Run it in the
    // background — the local store already works without it.
    void (async () => {
      try {
        await pullRemoteProgress(userId); // mirror cloud progress into the local store
        await pushLocalProgress(userId); // and upload anything that only lived locally
      } catch {
        /* offline / slow network — keep using the local store */
      }
    })();
  }, []);

  useEffect(() => {
    let cancelled = false;
    // last-resort guard: never leave the app stuck on the '…' spinner if
    // getSession (or the profile fetch) hangs on a bad network. If we fire, the
    // .finally below hasn't run — meaning loadProfile never settled and the
    // profile is UNVALIDATED. Do NOT expose gated content behind a
    // possibly-deactivated profile: drop to a clean logged-out state (the
    // Supabase token stays in storage, so a reload/sign-in retries).
    const failSafe = window.setTimeout(() => {
      if (cancelled) return;
      setSession(null);
      setProfile(null);
      setEntitlements(null);
      setMemberships([]);
      setLoading(false);
    }, 8000);
    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (cancelled) return undefined;
        setSession(data.session);
        return data.session ? loadProfile(data.session.user.id) : undefined;
      })
      .catch(() => {
        /* couldn't reach auth — fall through to a logged-out app, not a hang */
      })
      .finally(() => {
        if (!cancelled) {
          window.clearTimeout(failSafe);
          setLoading(false);
        }
      });
    const { data: sub } = supabase.auth.onAuthStateChange((event, s) => {
      // reset-link opened: make sure the user lands on the set-password screen
      if (event === 'PASSWORD_RECOVERY' && !window.location.hash.includes('set-password')) {
        window.location.hash = '#/set-password';
      }
      setSession(s);
      if (s) {
        loadProfile(s.user.id);
      } else {
        setProfile(null);
        setEntitlements(null);
        setMemberships([]);
        setProgressSyncUser(null);
      }
    });
    return () => {
      cancelled = true;
      window.clearTimeout(failSafe);
      sub.subscription.unsubscribe();
    };
  }, [loadProfile]);

  // where Supabase should send the user back to after confirming / resetting —
  // the actual app origin + base path, so it works on localhost and Pages alike.
  const appUrl = `${window.location.origin}${import.meta.env.BASE_URL}`;

  const signUp = useCallback(async (email: string, password: string, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName }, emailRedirectTo: appUrl },
    });
    if (error) return { error: error.message, needsConfirm: false };
    // when email confirmation is on, there's no session yet
    return { error: null, needsConfirm: !data.session };
  }, [appUrl]);

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setProfile(null);
    setEntitlements(null);
    setMemberships([]);
    setProgressSyncUser(null);
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: appUrl });
    return { error: error?.message ?? null };
  }, [appUrl]);

  const refreshProfile = useCallback(async () => {
    if (session) await loadProfile(session.user.id);
  }, [session, loadProfile]);

  const value = useMemo<AuthCtx>(
    () => ({
      session,
      profile,
      loading,
      authReady: !loading && !(session && !profile),
      isAdmin: profile?.role === 'admin',
      isCsm: profile?.role === 'csm',
      canCreate: profile?.role === 'admin' || profile?.role === 'csm',
      // only plain users are locked to their assigned path; staff roam freely
      assignedRole: profile?.role === 'user' ? (profile?.training_role ?? null) : null,
      entitlements,
      myPlantIds: memberships.map((m) => m.plant_id),
      managedPlantIds: memberships
        .filter((m) => m.plant_role === 'head' || m.plant_role === 'supervisor')
        .map((m) => m.plant_id),
      mustSetPassword: session?.user?.user_metadata?.must_set_password === true,
      signUp,
      signIn,
      signOut,
      resetPassword,
      refreshProfile,
    }),
    [session, profile, entitlements, memberships, loading, signUp, signIn, signOut, resetPassword, refreshProfile],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
