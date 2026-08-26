import Eyebrow from '../ui/Eyebrow';
const OurStory = () => {
  return (
    <section
      className="relative w-full min-h-[420px] md:min-h-[480px] flex items-center overflow-hidden"
      style={{ background: '#F8F4ED' }}
    >
      {/* Content — left half */}
      <div className="relative z-10 w-full max-w-[40%] min-h-[420px] md:min-h-[480px] flex items-center pl-4 pr-4 md:pl-6 md:pr-6 lg:pl-8 lg:pr-8 py-10">
        <div className="max-w-[560px]">
          <Eyebrow>Our Story</Eyebrow>
          <h3 className="mb-4 mt-2 text-forest leading-snug text-lg sm:text-xl md:text-[22px]">
            Every journey has moments of struggle.<br />
            But with the right support, people can<br />
            rebuild, recover, and rise stronger.
          </h3>
          <p className="mb-4 text-gray-700 text-xs sm:text-sm md:text-[15px] leading-relaxed">
            Our foundation works to create pathways of hope by offering education, community programs, emotional wellness resources, and resilience-building initiatives.
          </p>
          <p className="mb-5 text-gray-700 text-xs sm:text-sm md:text-[15px] leading-relaxed">
            We are committed to creating environments where people feel heard, supported, and empowered to move forward.
          </p>
          <p className="font-bold text-base sm:text-lg md:text-[18px] text-burgundy leading-snug">
            Because resilient minds create stronger individuals, stronger families, and stronger communities.
          </p>
        </div>
      </div>
      {/* Background image — contain keeps all subjects fully visible (zoom-out) */}
      <img
        src="/updated.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-contain object-[right_60%] pointer-events-none select-none"
      />
    </section>
  );
};
export default OurStory;