import Button from '../ui/Button';
import { FaSeedling } from 'react-icons/fa';

const StrongerMindsBanner = () => {
  return (
    <section
      aria-labelledby="stronger-minds-heading"
      className="relative mx-4 md:mx-8 my-6 rounded-3xl overflow-hidden"
      style={{
        backgroundImage: "url('/PROGRAME%20updated/strongermind.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        minHeight: '160px',
      }}
    >
      {/* stronger dark overlay for clear text visibility */}
      <div className="absolute inset-0 bg-[#1a3a2a]/65" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-5 px-6 md:px-12 lg:px-20 py-10 md:py-12">

        {/* ── Heading ── */}
        <h2
          id="stronger-minds-heading"
          className="font-heading font-bold text-white text-xl md:text-2xl lg:text-[1.75rem] leading-snug"
        >
          Together, we build stronger minds and stronger communities.
        </h2>

        {/* ── Body text ── */}
        <p className="text-white text-xs md:text-sm leading-relaxed max-w-2xl">
          Every program we create is designed to bring hope, build skills,
          and strengthen the resilience that helps individuals and communities thrive.
        </p>

        {/* ── Divider ── */}
        <div className="w-16 h-px bg-[#C79949]/60" />

        {/* ── Icon + tagline + button ── */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C79949] flex items-center justify-center flex-shrink-0 shadow">
              <FaSeedling size={18} className="text-white" />
            </div>
            <p className="text-white text-xs md:text-sm leading-snug font-medium">
              Our impact grows when we work together.
            </p>
          </div>
          <Button variant="gold" to="/get-involved" className="!rounded-xl text-white text-sm">
            Join Our Movement →
          </Button>
        </div>

      </div>
    </section>
  );
};

export default StrongerMindsBanner;

