import Button from '../ui/Button';

const StrongerMindsBanner = () => {
  return (
    <section
      aria-labelledby="stronger-minds-heading"
      className="relative w-full min-h-[280px] md:min-h-[320px] lg:h-[360px] overflow-hidden"
      style={{
        backgroundImage: "url('/PROGRAME updated/strongermind.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-[#2E5D49]/55 md:bg-transparent md:bg-gradient-to-r md:from-transparent md:via-[#2E5D49]/15 md:to-[#2E5D49]/45" />

      <div className="relative z-10 h-full min-h-[280px] md:min-h-[320px] lg:h-[360px] max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-end">
        <div className="w-full md:w-[58%] lg:w-[50%] text-white py-10 md:py-0">
          <h2
            id="stronger-minds-heading"
            className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mb-3"
          >
            Building Stronger Minds Together
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
            Community, compassion, and connection sit at the heart of every program we offer. When we come together, hope grows and resilience takes root.
          </p>
          <Button variant="gold" to="/get-involved" className="!rounded-xl">
            Get Involved →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StrongerMindsBanner;
