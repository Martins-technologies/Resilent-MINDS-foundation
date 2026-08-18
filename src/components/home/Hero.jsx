import { Link } from 'react-router-dom';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { RiMentalHealthLine } from 'react-icons/ri';
import Button from '../ui/Button';
import Container from '../ui/Container';
import heroImage from '../../assets/images/hero-bg.webp';

const Hero = () => {
  return (
    <section className=" relative h-[700px]  section--band flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* More Wavy SVG at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 180" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#FEF9F2" 
            fillOpacity="1" 
            d="M0,80L40,96C80,112,160,144,240,154.7C320,165,400,155,480,138.7C560,123,640,101,720,96C800,91,880,101,960,117.3C1040,133,1120,155,1200,154.7C1280,155,1360,133,1400,122.7L1440,112L1440,180L1400,180C1360,180,1280,180,1200,180C1120,180,1040,180,960,180C880,180,800,180,720,180C640,180,560,180,480,180C400,180,320,180,240,180C160,180,80,180,40,180L0,180Z"
          />
        </svg>
      </div>

      {/* Content */}
      <Container className="relative z-20">
        <div className="max-w-2xl text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-[#C9A84C] px-3 py-1.5 rounded-full mb-2">
            <RiMentalHealthLine className="text-sm" />
            <span className="text-[10px] font-semibold tracking-wide text-white">Mental Wellness & Support</span>
          </div>

          <h1 className="mb-2">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg block leading-tight">
              Building Stronger Minds.
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg block leading-tight">
              Creating <span className="text-[#C9A84C] italic">Hopeful</span> Futures.
            </span>
          </h1>

          <p className="text-sm md:text-base text-white/90 mb-4 leading-relaxed max-w-xl drop-shadow-md">
            Every person has the ability to overcome challenges with the right support. 
            We provide education, resources, and community connections that help individuals 
            build emotional resilience and thrive.
          </p>

          {/* Buttons with Icons */}
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="primary" 
              to="/get-involved"
              className="group px-4 py-1.5 bg-[#C9A84C] text-white rounded-full hover:bg-[#B8973A] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5 text-[10px]"
            >
              <FaHeart className="text-xs group-hover:scale-110 transition-transform" />
              Donate Today
              <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              variant="outline" 
              to="/contact"
              className="group px-4 py-1.5 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-1.5 text-[10px]"
            >
              <MdOutlineSupportAgent className="text-xs group-hover:scale-110 transition-transform" />
              Get Support
              <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats or Trust Badges */}
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[8px] text-white">24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
              <FaHeart className="text-[#C9A84C] text-[8px]" />
              <span className="text-[8px] text-white">1000+ Lives Impacted</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;