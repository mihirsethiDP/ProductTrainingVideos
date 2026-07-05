import type { ReactNode } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import RoleSelect from './pages/RoleSelect';
import RoleHome from './pages/RoleHome';
import LessonPage from './pages/LessonPage';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Studio from './pages/Studio';
import Protected from './components/Protected';

/** Lessons are login-gated EXCEPT the forwardable persona shorts, which anyone
 *  with the link can watch. */
function LessonGate({ children }: { children: ReactNode }) {
  const { moduleId } = useParams();
  if (moduleId === 'module-shorts') return <>{children}</>;
  return <Protected>{children}</Protected>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Protected><RoleSelect /></Protected>} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Protected><Admin /></Protected>} />
      <Route path="/admin/studio" element={<Protected><Studio /></Protected>} />
      {/* clean forwardable links for the persona shorts (public) */}
      <Route path="/watch/operational" element={<Navigate to="/operator/module-shorts/short-operational" replace />} />
      <Route path="/watch/non-operational" element={<Navigate to="/supervisor/module-shorts/short-non-operational" replace />} />
      <Route path="/:role" element={<Protected><RoleHome /></Protected>} />
      <Route path="/:role/:moduleId/:lessonId" element={<LessonGate><LessonPage /></LessonGate>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
