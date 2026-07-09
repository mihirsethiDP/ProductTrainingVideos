import { useEffect, useRef, type ReactNode } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import RoleSelect from './pages/RoleSelect';
import RoleHome from './pages/RoleHome';
import LessonPage from './pages/LessonPage';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Studio from './pages/Studio';
import SetPassword from './pages/SetPassword';
import Protected from './components/Protected';
import { useAuth } from './context/AuthContext';
import { AUTH_LINK_ERROR, AUTH_LINK_TYPE } from './lib/supabase';

/** Lessons are login-gated EXCEPT the forwardable persona shorts, which anyone
 *  with the link can watch. */
function LessonGate({ children }: { children: ReactNode }) {
  const { moduleId } = useParams();
  if (moduleId === 'module-shorts') return <>{children}</>;
  return <Protected>{children}</Protected>;
}

/** Password-reset / invite email links land on the site root with a token in
 *  the URL. Once the session resolves, send the user to the set-password
 *  screen instead of the homepage (expired links go there too, for a clear
 *  message rather than a silent bounce). */
function AuthLinkRedirect() {
  const { loading } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // bounce to set-password AT MOST ONCE. AUTH_LINK_TYPE/ERROR are module
  // constants that live for the whole tab, so re-bouncing every time pathname
  // changes would trap a user who lands via an expired link and then signs in
  // (the /set-password ⇄ / redirect loop).
  const bounced = useRef(false);
  useEffect(() => {
    if (loading || bounced.current) return;
    if ((AUTH_LINK_TYPE === 'recovery' || AUTH_LINK_TYPE === 'invite' || AUTH_LINK_ERROR) && pathname !== '/set-password') {
      bounced.current = true;
      navigate('/set-password', { replace: true });
    }
  }, [loading, navigate, pathname]);
  return null;
}

export default function App() {
  return (
    <>
    <AuthLinkRedirect />
    <Routes>
      <Route path="/" element={<Protected><RoleSelect /></Protected>} />
      <Route path="/login" element={<Login />} />
      <Route path="/set-password" element={<SetPassword />} />
      <Route path="/admin" element={<Protected><Admin /></Protected>} />
      <Route path="/admin/studio" element={<Protected><Studio /></Protected>} />
      {/* clean forwardable links for the persona shorts (public) */}
      <Route path="/watch/operational" element={<Navigate to="/operator/module-shorts/short-operational" replace />} />
      <Route path="/watch/non-operational" element={<Navigate to="/supervisor/module-shorts/short-non-operational" replace />} />
      <Route path="/:role" element={<Protected><RoleHome /></Protected>} />
      <Route path="/:role/:moduleId/:lessonId" element={<LessonGate><LessonPage /></LessonGate>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}
