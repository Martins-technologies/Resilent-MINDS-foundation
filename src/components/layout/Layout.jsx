import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
  const { pathname } = useLocation();
  const showBottomBanner = pathname !== '/contact';

  return (
    <div>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>

      {showBottomBanner && (
        <section
          className="relative w-full flex items-center"
          style={{
            backgroundImage: "url('/bottom.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '200px',
          }}
        >
          <div className="container relative z-10 flex flex-col items-center justify-center text-center py-12 px-6 max-w-xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-3 leading-tight">
              Your Support Creates Hope
            </h2>
            <p className="text-white/85 text-base md:text-lg mb-7 leading-relaxed">
              Help us reach more people, expand programs and deliver resources where they're needed most.
            </p>
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-amber-500 text-white font-semibold text-base px-8 py-3.5 rounded-full transition-colors shadow-md"
            >
              <span>♡</span> Give Hope Today <span>→</span>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Layout;
