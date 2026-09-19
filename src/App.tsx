import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PortalLayout from './pages/PortalLayout';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import CoachDashboard from './pages/CoachDashboard';
import CoachStudents from './pages/CoachStudents';
import CoachEvaluations from './pages/CoachEvaluations';
import CoachSchedule from './pages/CoachSchedule';
import CoachSyllabus from './pages/CoachSyllabus';
import AdminDashboard from './pages/AdminDashboard';
import CoachManagement from './pages/CoachManagement';
import StudentManagement from './pages/StudentManagement';
import TrainingProgram from './pages/TrainingProgram';
import SessionTracker from './pages/SessionTracker';
import Schedule from './pages/Schedule';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import PerformanceEvaluation from './pages/PerformanceEvaluation';
import LearningCenter from './pages/LearningCenter';
import Feedback from './pages/Feedback';
import Curriculum from './pages/Curriculum';
import StudentSyllabus from './pages/StudentSyllabus';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortalLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="student">
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="program" element={<TrainingProgram />} />
            <Route path="syllabus" element={<StudentSyllabus />} />
            <Route path="tracker" element={<SessionTracker />} />
            <Route path="evaluation" element={<PerformanceEvaluation />} />
            <Route path="learning" element={<LearningCenter />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="messages" element={<Messages />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="coach">
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<CoachDashboard />} />
            <Route path="students" element={<CoachStudents />} />
            <Route path="evaluations" element={<CoachEvaluations />} />
            <Route path="schedule" element={<CoachSchedule />} />
            <Route path="syllabus" element={<CoachSyllabus />} />
            <Route path="messages" element={<Messages />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="admin">
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="coaches" element={<CoachManagement />} />
            <Route path="students" element={<StudentManagement />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Route>
        <Route path="*" element={<div className="text-2xl font-bold p-10">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
