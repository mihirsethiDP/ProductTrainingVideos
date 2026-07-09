import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase, type Profile } from '../lib/supabase';
import { pullRemoteProgress, pushLocalProgress, setProgressSyncUser } from '../lib/progress';

interface AuthCtx {
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  isAdmin: boolean;
  isCsm: boolean;
  canCreate: boolean; // admin or CSM — may use the Content Studio
  /** the training path this user is locked to (set by the admin at invite time);
   *  null = free choice (admins, CSMs, and legacy unassigned accounts) */
  assignedRole: 'operator' | 'supervisor' | 'internal' | null;
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
  const [loading, setLoading] = useState(true);

  const loadProfile = useCallback(async (userId: string) => {
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single();
    const prof = (data as Profile) ?? null;
    if (prof && !prof.active) {
      // a deactivated (or un-invited) account is signed straight back out —
      // do this BEFORE exposing any profile so gated content never flashes
      await supabase.auth.signOut();
      setProfile(null);
      setProgressSyncUser(null);
      return;
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
      isAdmin: profile?.role === 'admin',
      isCsm: profile?.role === 'csm',
      canCreate: profile?.role === 'admin' || profile?.role === 'csm',
      // only plain users are locked to their assigned path; staff roam freely
      assignedRole: profile?.role === 'user' ? (profile?.training_role ?? null) : null,
      signUp,
      signIn,
      signOut,
      resetPassword,
      refreshProfile,
    }),
    [session, profile, loading, signUp, signIn, signOut, resetPassword, refreshProfile],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
