import { FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <section className="relative min-h-[420px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[500px] xl:min-h-[500px] 2xl:min-h-[600px] flex items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>


      {/* LEFT LIGHT BACKGROUND */}
      <div className="absolute left-0 top-0 bottom-0 w-[75%] sm:w-[65%] md:w-[55%] lg:w-[48%] bg-white/90 z-10">
        
        {/* Smooth Right Curve */}
        <div className="absolute -right-[90px] sm:-right-[120px] md:-right-[150px] lg:-right-[180px] top-[-100px] w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-[650px] sm:h-[700px] bg-white/90 rounded-full"></div>
      
      </div>


      {/* TOP LEFT SOFT CURVE */}
      <div className="absolute top-0 left-0 w-[85%] sm:w-[75%] md:w-[70%] lg:w-[65%] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] bg-white/20 rounded-br-[100%] z-10"></div>


      {/* BACK / SECOND BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="block w-full h-[55px] sm:h-[70px] md:h-[90px] lg:h-[110px]"
        >
          <path
            d="M0,100 C180,40 300,160 500,90 C700,20 850,150 1050,85 C1200,40 1320,80 1440,30 L1440,180 L0,180 Z"
            fill="rgba(255,255,255,0.45)"
          />
        </svg>
      </div>


      {/* MAIN WHITE RESPONSIVE CURVE */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="block w-full h-[65px] sm:h-[80px] md:h-[100px] lg:h-[130px]"
        >
          <path
            d="M0,70 C160,150 280,25 420,70 C560,120 700,40 850,75 C1050,120 1200,80 1440,40 L1440,180 L0,180 Z"
            fill="white"
          />
        </svg>
      </div>


      {/* CONTENT */}
      <Container className="relative z-20 w-full">
        <div className="max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left px-4 sm:px-6 lg:px-0">

          {/* Heading */}
          <h1 className="mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-green-950 block leading-tight">
              Building Stronger Minds.
            </span>

            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-green-950 block leading-tight">
              Creating{' '}
              <span className="text-[#C9A84C] italic">
                Hopeful
              </span>{' '}
              Futures.
            </span>
          </h1>


          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-green-950/80 mb-4 sm:mb-5 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Every person has the ability to overcome challenges with the right support.
            We provide education, resources, and community connections that help individuals
            build emotional resilience and thrive.
          </p>


          {/* Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">

            <Button
              variant="primary"
              to="/get-involved"
              className="group px-4 sm:px-5 lg:px-5 py-2 sm:py-2.5 bg-[#7E1F3A] text-white rounded-xl hover:bg-[#65182F] transition-all duration-300 shadow-md flex items-center gap-2 text-xs sm:text-sm"
            >
              Donate Today
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>


            <Button
              variant="outline"
              to="/our-programs"
              className="group px-4 sm:px-5 lg:px-5 py-2 sm:py-2.5 border border-green-950 text-green-950 hover:bg-green-900 hover:text-white rounded-xl flex items-center gap-2 text-xs sm:text-sm transition-all duration-300 bg-white/20"
            >
              Get Support
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>

          </div>

        </div>
      </Container>

    </section>
  );
};

export default Hero;