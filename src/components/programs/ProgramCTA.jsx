import Button from '../ui/Button';
import Container from '../ui/Container';
import { FaHands, FaHeart } from 'react-icons/fa';

const ProgramsCTA = () => {
  return (
    <>    <section className="section section--forest py-2 my-5 mx-8 rounded-4xl">
      {/* Container ki padding aur bhi kam kar di (px-4 py-3) */}
      <Container className="px-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10 text-start md:text-left">

          {/* Image - Height aur width chhoti kar di */}
          <div className="w-full md:w-1/5 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team working together for community impact"
              className="w-full h-32 md:h-36 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Text aur Right Side ka Wrapper - Gap kam kar diya */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full gap-2 md:gap-5">

            {/* Left Text - Font aur margin chhota */}
            <div className="max-w-xl md:pr-4">
              <h3 className="mt-0 text-white mb-0.5 font-bold text-lg md:text-xl">
                Together, we build stronger minds and stronger communities.
              </h3>
              <p className="text-[#d9e6df] text-[11px] md:text-xs leading-relaxed mb-0">
                Every program we create builds hope, skills, and resilience for communities to thrive.
              </p>
            </div>

            {/* Vertical Divider - Height chhoti */}
            <div className="hidden md:block w-[1px] h-14 bg-white opacity-40"></div>

            {/* Right Side - Gap aur sizes chhote */}
            <div className="flex flex-col items-center justify-center gap-1.5">
              <div className="flex items-center gap-2 mt-0">
                <div className="w-9 h-9 rounded-full bg-[#C79949] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <FaHands size={16} />
                </div>
                <div className="desc text-white text-[11px] font-medium leading-snug text-left max-w-[110px]">
                  Our Impact grows When we work together
                </div>
              </div>
              <div className="flex justify-start w-full">
                <Button
                  variant="gold"
                  to="/get-involved"
                  className="whitespace-nowrap rounded-xl text-white text-[10px] "
                >
                  Join Movement →
                </Button>
              </div>
            </div>

          </div>
        </div>
      </Container>


    </section>

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