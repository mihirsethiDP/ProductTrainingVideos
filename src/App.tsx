import { Navigate, Route, Routes } from 'react-router-dom';
import RoleSelect from './pages/RoleSelect';
import RoleHome from './pages/RoleHome';
import LessonPage from './pages/LessonPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelect />} />
      <Route path="/:role" element={<RoleHome />} />
      <Route path="/:role/:moduleId/:lessonId" element={<LessonPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
