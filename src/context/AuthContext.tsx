import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase, type Profile } from '../lib/supabase';
import { pullRemoteProgress, setProgressSyncUser } from '../lib/progress';

interface AuthCtx {
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  isAdmin: boolean;
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
    setProfile((data as Profile) ?? null);
    if (data && !(data as Profile).active) {
      // a deactivated account is signed straight back out
      await supabase.auth.signOut();
      setProfile(null);
      return;
    }
    setProgressSyncUser(userId);
    await pullRemoteProgress(userId); // mirror cloud progress into the local store
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) loadProfile(data.session.user.id).finally(() => setLoading(false));
      else setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      if (s) {
        loadProfile(s.user.id);
      } else {
        setProfile(null);
        setProgressSyncUser(null);
      }
    });
    return () => sub.subscription.unsubscribe();
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
