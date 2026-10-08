import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/mains/Home'
import Contact from './components/pages/mains/Contact'
import Resume from './components/pages/mains/Resume'
import Projects from './components/pages/mains/Projects'
import ProjectPage from './components/ProjectPage';
import NotFound from './components/pages/mains/NotFound';
import ScrollToTop from './components/ScrollToTop';
import RouteTitle from './components/RouteTitle';

// Move focus to the page content without changing the URL hash (#64).
function skipToContent(event) {
  event.preventDefault();
  document.getElementById("main-content")?.focus();
}

// Every path here must also be in src/routes.js, which the build uses to
// write one HTML file per page. Project pages come from src/data/projects.js.
function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <RouteTitle />
      <a href="#main-content" className="skip-link" onClick={skipToContent}>Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:slug' element={<ProjectPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
