import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const GetInvolvedCTA = () => {
  return (
    <>
      {/* Your Support Creates Hope */}
      <section className="relative overflow-hidden bg-[#6E2839] py-14 md:py-16">

        {/* decorative leaf — left edge */}
        <img
          src="/GREEN VECTOR.webp"
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-40 object-cover object-left opacity-20 pointer-events-none select-none"
        />

        <Container>
          <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16">

            {/* Left — text + CTA */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-white mb-3 text-3xl md:text-4xl font-bold leading-tight">
                Your Support Creates Hope
              </h2>
              <p className="text-white/80 mb-8 text-base md:text-lg leading-relaxed">
                Help us reach more people, expand programs and deliver resources where they're needed most.
              </p>
              <Link
                to="/get-involved/donation-collection"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-[#C79949] text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md"
              >
                <span aria-hidden="true">♡</span>
                Give Hope Today →
              </Link>
            </div>

            {/* Right — image */}
            <div className="w-full md:w-[380px] flex-shrink-0">
              <img
                src="/get%20involved/Untitled-2-01%20(1).webp"
                alt="Hands holding a seedling — a symbol of hope and growth"
                className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-xl"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* Bottom action strip */}
      <section className="section section--burgundy py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C79949] flex items-center justify-center shadow-md flex-shrink-0">
                <img
                  src="/get%20involved/action.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h4 className="text-white mb-0">Every action counts. Every person matters.</h4>
            </div>

            <div className="hidden md:block w-[1px] h-12 bg-white/30" />

            <p className="mb-0 text-white/90">
              Together, we can build stronger minds and stronger communities.
            </p>

          </div>
        </Container>
      </section>
    </>
  );
};

export default GetInvolvedCTA;
