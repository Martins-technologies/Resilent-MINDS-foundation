import Button from '../ui/Button';
import Container from '../ui/Container';
import { FaHands, FaHeart } from 'react-icons/fa';

const ProgramsCTA = () => {
  return (
    <>
      <section className="section py-2 m  bg-[#6E2839] shadow-md">
        <Container className="px-2 py-2 md:py-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">

            {/* Left Side: Gold Circle Icon + Main Text */}
            <div className="flex flex-col md:flex-row items-center text-center gap-4 md:gap-4 flex-grow">
              {/* Gold Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#C79949] flex-shrink-0 flex items-center justify-center text-white shadow-md">
                <FaHands size={26} />
              </div>

              {/* Main Text */}
              <div className="mt-0 text-white text-start font-lg text-lg md:text-xl leading-snug max-w-lg">
                Help us expand these programs and reach more individuals in need.
              </div>
            </div>

            {/* Vertical Divider Line (Hidden on mobile) */}
            <div className="hidden md:block w-[1px] h-12 bg-white opacity-30"></div>

            {/* Right Side: Outline Heart Icon + Small Text + Button */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 flex-shrink-0">

              {/* Outline Heart Icon & Text */}
              <div className="flex items-center gap-3">
                {/* Heart Icon with Gold Border */}
                <div className="text-[#C79949] text-3xl">
                  <FaHeart />
                </div>

                {/* Small Text */}
                <div className="desc text-white text-sm font-light leading-relaxed text-left max-w-[140px]">
                  Your support creates real, lasting change.
                </div>
              </div>

              {/* White Button */}
              <div className="flex justify-start">
                <Button
                  variant="white"
                  to="/get-involved"
                  className="whitespace-nowrap rounded-xl bg-white text-[#6E2839] font-semibold px-4 py-1.5 hover:bg-gray-100 transition-colors"
                >
                  Donate Today →
                </Button>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>

  );
};

export default ProgramsCTA;