import Button from '../ui/Button';
import Container from '../ui/Container';
import { FaEnvelope } from 'react-icons/fa';

const ResourcesCTA = () => {
  return (
    <>
      {/* Banner Section — banner.webp as background, content overlaid on the left */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: "url('/Resources/banner.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '220px',
        }}
      >
        {/* Subtle dark tint over the green half so text is always readable */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.10) 48%, transparent 52%)',
          }}
        />

        {/* Content left-aligned inside the green (left) half */}
        <div className="relative z-10 flex items-center h-full min-h-[220px] py-10 w-full md:w-1/2">
          <div className="text-left pl-16 pr-6 sm:pl-20 md:pl-24 lg:pl-28">
            <h2
              style={{ color: '#FFFFFF' }}
              className="font-heading font-bold text-2xl md:text-3xl lg:text-[2.125rem] leading-tight mb-3 drop-shadow-sm"
            >
              You are not alone.
            </h2>
            <p
              style={{ color: '#FFFFFF' }}
              className="text-sm md:text-[15px] leading-relaxed drop-shadow-sm"
            >
              <span className="md:whitespace-nowrap">
                Whether you&rsquo;re looking to learn, heal, or help
              </span>
              {' '}
              <span className="md:block">
                someone else, these resources are here for you.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-6 pb-8">
        <Container>
          <div className="card flex flex-col md:flex-row justify-between items-center gap-5 p-5 md:p-6 bg-white shadow-md rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C79949] flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-[#0f4c3a]">Can&rsquo;t find what you&rsquo;re looking for?</h4>
                <p className="text-sm mb-0 text-gray-600">We&rsquo;re here to help. Reach out to us and we&rsquo;ll point you in the right direction.</p>
              </div>
            </div>
            <Button
              variant="outline"
              to="/contact-us"
              className="rounded-xl !border-2 !border-[#2E5D49] !text-[#2E5D49] bg-transparent hover:!bg-[#2E5D49] hover:!text-white transition-colors"
            >
              Contact Us →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ResourcesCTA;