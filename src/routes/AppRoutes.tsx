import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import HomePage from '../pages/HomePage/HomePage'
import ProjectPage from '../pages/ProjectPage/ProjectPage'
import ContactPage from '../pages/ContactPage/ContactPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default AppRoutes;