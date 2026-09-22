import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurProgramsPage from './pages/OurProgramsPage';
import WhoWeHelpPage from './pages/WhoWeHelpPage';
import ImpactPage from './pages/ImpactPage';
import ResourcesPage from './pages/ResourcesPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import DonationCollectionPage from './pages/DonationCollectionPage';
import ContactUsPage from './pages/ContactUsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="our-programs" element={<OurProgramsPage />} />
          <Route path="who-we-help" element={<WhoWeHelpPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="get-involved" element={<GetInvolvedPage />} />
          <Route path="get-involved/donation-collection" element={<DonationCollectionPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="about" element={<Navigate to="/about-us" replace />} />
          <Route path="programs" element={<Navigate to="/our-programs" replace />} />
          <Route path="contact" element={<Navigate to="/contact-us" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
