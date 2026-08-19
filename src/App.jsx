import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/programsPage';
import WhoWeHelpPage from './pages/WhoWeHelpPage';
import ImpactPage from './pages/ImpactPage';
import ResourcesPage from './pages/ResourcesPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="who-we-help" element={<WhoWeHelpPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="get-involved" element={<GetInvolvedPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;