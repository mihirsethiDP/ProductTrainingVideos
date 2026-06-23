import { Navigate, Route, Routes } from 'react-router-dom';
import RoleSelect from './pages/RoleSelect';
import RoleHome from './pages/RoleHome';
import LessonPage from './pages/LessonPage';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Protected from './components/Protected';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Protected><RoleSelect /></Protected>} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Protected><Admin /></Protected>} />
      <Route path="/:role" element={<Protected><RoleHome /></Protected>} />
      <Route path="/:role/:moduleId/:lessonId" element={<Protected><LessonPage /></Protected>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
