import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Teaser from '../pages/Teaser';

/** Gates content behind sign-in. Logged-out visitors see the Teaser instead.
 *  An account still on its provisioned temporary password is held on the
 *  set-password screen until it chooses its own. */
export default function Protected({ children }: { children: ReactNode }) {
  const { session, loading, mustSetPassword } = useAuth();
  const { pathname } = useLocation();
  if (loading) {
    return (
      <div className="page">
        <div className="auth-loading">…</div>
      </div>
    );
  }
  if (!session) return <Teaser />;
  if (mustSetPassword && pathname !== '/set-password') {
    return <Navigate to="/set-password" replace />;
  }
  return <>{children}</>;
}
