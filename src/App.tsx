import { Navigate, Route, Routes } from 'react-router-dom';
import RoleSelect from './pages/RoleSelect';
import RoleHome from './pages/RoleHome';
import LessonPage from './pages/LessonPage';
import Login from './pages/Login';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/:role" element={<RoleHome />} />
      <Route path="/:role/:moduleId/:lessonId" element={<LessonPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
