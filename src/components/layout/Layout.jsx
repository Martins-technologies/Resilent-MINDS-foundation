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
          <div className="rm-container relative z-10 flex w-full flex-col items-center gap-6 py-8 md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#C79949]">
                <img
                  src="/get%20involved/action.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <h2 className="mb-0 font-heading text-2xl font-bold leading-tight !text-white">
                Every action counts.
                <br />
                Every person matters.
              </h2>
            </div>

            <div className="hidden h-16 w-px bg-white/40 md:block" aria-hidden="true" />

            <p className="mb-0 max-w-sm text-center text-base leading-relaxed !text-white md:text-left">
              Together, we can build stronger minds and stronger communities.
            </p>

            <Link
              to="/get-involved"
              className="inline-flex items-center gap-3 rounded-lg bg-white px-7 py-3 font-semibold text-[#6E2839] shadow-md transition-colors hover:bg-[#FEF9F2]"
            >
              Donate Now <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Layout;
