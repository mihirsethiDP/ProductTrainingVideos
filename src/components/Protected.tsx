import type { ReactNode } from 'react';
import { useAuth } from '../context/AuthContext';
import Teaser from '../pages/Teaser';

/** Gates content behind sign-in. Logged-out visitors see the Teaser instead. */
export default function Protected({ children }: { children: ReactNode }) {
  const { session, loading } = useAuth();
  if (loading) {
    return (
      <div className="page">
        <div className="auth-loading">…</div>
      </div>
    );
  }
  if (!session) return <Teaser />;
  return <>{children}</>;
}
