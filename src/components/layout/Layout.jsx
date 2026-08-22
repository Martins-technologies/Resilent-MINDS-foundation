import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SupportBanner from '../SupportBanner/SupportBanner';

const Layout = () => {
  const { pathname } = useLocation();
  const showBottomBanner = !['/about', '/contact', '/impact', '/who-we-help', '/programs', '/resources'].includes(pathname);

  return (
    <div>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>

      {showBottomBanner && <SupportBanner />}
      <Footer />
    </div>
  );
};

export default Layout;
