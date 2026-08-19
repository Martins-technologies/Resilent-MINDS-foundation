import { Link } from 'react-router-dom';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { RiMentalHealthLine } from 'react-icons/ri';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[500px] lg:min-h-[800px] xl:min-h-[900px] 2xl:min-h-[1000px] flex items-center overflow-hidden">
      {/* Background Image - Unsplash */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <Container className="relative z-20">
        <div className="max-w-2xl mx-auto lg:mx-0 text-left lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-[#C9A84C] px-3 py-1.5 rounded-full mb-2 mx-auto lg:mx-0">
            <RiMentalHealthLine className="text-sm" />
            <span className="text-[10px] font-semibold tracking-wide text-white">Mental Wellness & Support</span>
          </div>

          <h1 className="mb-2">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white drop-shadow-lg block leading-tight">
              Building Stronger Minds.
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white drop-shadow-lg block leading-tight">
              Creating <span className="text-[#C9A84C] italic">Hopeful</span> Futures.
            </span>
          </h1>

          <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 mb-4 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md">
            Every person has the ability to overcome challenges with the right support.
            We provide education, resources, and community connections that help individuals
            build emotional resilience and thrive.
          </div>

          {/* Buttons with Icons */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <Button
              variant="primary"
              to="/get-involved"
              className="group px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 lg:py-2.5 bg-[#C9A84C] text-white rounded-full hover:bg-[#B8973A] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5 text-[10px] sm:text-xs lg:text-sm"
            >
              <FaHeart className="text-xs sm:text-sm lg:text-base group-hover:scale-110 transition-transform" />
              Donate Today
              <FaArrowRight className="text-[10px] sm:text-xs lg:text-sm group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              to="/contact"
              className="group px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 lg:py-2.5 border-2 border-green-800 rounded-full flex items-center gap-1.5 text-[10px] sm:text-xs lg:text-sm"
            >
              <MdOutlineSupportAgent className="text-xs sm:text-sm lg:text-base" />
              Get Support
              <FaArrowRight className="text-[10px] sm:text-xs lg:text-sm" />
            </Button>
          </div>

          {/* Stats or Trust Badges */}
          <div className="mt-3 sm:mt-4 lg:mt-5 flex items-center gap-3 justify-center lg:justify-start flex-wrap">
            <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 sm:px-3 py-1 rounded-full">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[8px] sm:text-[10px] text-white">24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 sm:px-3 py-1 rounded-full">
              <FaHeart className="text-[#C9A84C] text-[8px] sm:text-[10px]" />
              <span className="text-[8px] sm:text-[10px] text-white">1000+ Lives Impacted</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;