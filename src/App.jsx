import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/programsPage';
import ContactPage from './pages/ContactPage';

// Placeholder pages for remaining routes
const WhoWeHelp = () => (
  <div className="section container">
    <h1>Who We Help</h1>
    <p>Content coming soon...</p>
  </div>
);
const Impact = () => (
  <div className="section container">
    <h1>Impact</h1>
    <p>Content coming soon...</p>
  </div>
);
const Resources = () => (
  <div className="section container">
    <h1>Resources</h1>
    <p>Content coming soon...</p>
  </div>
);
const GetInvolved = () => (
  <div className="section container">
    <h1>Get Involved</h1>
    <p>Content coming soon...</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="who-we-help" element={<WhoWeHelp />} />
          <Route path="impact" element={<Impact />} />
          <Route path="resources" element={<Resources />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;