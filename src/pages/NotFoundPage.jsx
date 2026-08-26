import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="text-center px-4">
        <p className="text-[#C79949] font-semibold uppercase tracking-widest text-sm mb-4">
          404 — Page Not Found
        </p>
        <h1 className="text-[#1b3b31] text-4xl md:text-5xl font-bold mb-4">
          Oops! This page doesn't exist.
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for may have moved or doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#2E5D49] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1b3b31] transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 border-2 border-[#2E5D49] text-[#2E5D49] px-6 py-3 rounded-full font-semibold hover:bg-[#2E5D49] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
