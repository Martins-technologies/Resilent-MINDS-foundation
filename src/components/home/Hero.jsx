import { FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <section className="relative min-h-[400px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[500px] 2xl:min-h-[600px] flex items-center overflow-hidden">
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

          <h1 className="mb-1">
            <span className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white drop-shadow-lg block leading-tight">
              Building Stronger Minds.
            </span>
            <span className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white drop-shadow-lg block leading-tight">
              Creating <span className="text-[#C9A84C] italic">Hopeful</span> Futures.
            </span>
          </h1>

          <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-white/90 mb-3 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md">
            Every person has the ability to overcome challenges with the right support.
            We provide education, resources, and community connections that help individuals
            build emotional resilience and thrive.
          </div>

          {/* Buttons with Icons */}
          <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
            <Button
              variant="primary"
              to="/get-involved"
              className="group px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 bg-[#C9A84C] text-white rounded-xl hover:bg-[#B8973A] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1 text-[9px] sm:text-xs lg:text-sm"
            >
              <FaArrowRight className="text-[9px] sm:text-xs lg:text-sm group-hover:translate-x-1 transition-transform" />
              Join Our Movement
            </Button>

            <Button
              variant="outline"
              to="/our-programs"
              className="group px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 outline outline-2 outline-green-950 text-green-950 hover:bg-green-900 hover:text-white rounded-xl flex items-center gap-1 text-[9px] sm:text-xs lg:text-sm transition-all duration-300 bg-transparent hover:outline-green-900"
            >
              <FaArrowRight className="text-[9px] sm:text-xs lg:text-sm group-hover:translate-x-1 transition-transform" />
              Explore Programs
            </Button>
          </div>


        </div>
      </Container>
    </section>
  );
};

export default Hero;