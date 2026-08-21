import { FaUsers, FaChalkboardTeacher, FaHandsHelping, FaHeart } from 'react-icons/fa';
import Button from '../Button/Button';

const STATS = [
  { icon: FaUsers,              number: '1,000+',    label: 'People\nReached' },
  { icon: FaChalkboardTeacher,  number: '100+',      label: 'Workshops\nDelivered' },
  { icon: FaHandsHelping,       number: '50+',       label: 'Community\nVolunteers' },
  { icon: FaHeart,              number: 'Countless', label: 'Lives\nEncouraged' },
];

const WhyWeExist = () => {
  return (
    <section className="flex w-full min-h-[200px] overflow-hidden">

      {/* ── Left: Cream panel ── */}
      <div
        className="relative flex flex-col justify-center px-10 py-8 z-10"
        style={{ width: '38%', background: '#F8F4ED', flexShrink: 0 }}
      >
        {/* Leaf decoration */}
        <img
          src="/GREEN VECTOR.webp"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 w-16 h-auto opacity-30 pointer-events-none select-none"
        />

        <h2 className="font-heading font-bold text-[#1a2c28] leading-snug mb-4"
            style={{ fontSize: 'clamp(16px, 2vw, 26px)', maxWidth: '340px' }}>
          We are committed to building resilient minds and stronger communities every day.
        </h2>

        <Button to="/about" variant="primary" arrow className="self-start text-sm">
          Join Our Movement
        </Button>
      </div>

      {/* ── Center: Circular green image ── */}
      <div
        className="relative flex-shrink-0 flex items-center justify-center z-20"
        style={{ width: '26%' }}
      >
        {/* Gold ring behind circle */}
        <div
          className="absolute rounded-full"
          style={{
            width: '90%',
            paddingBottom: '90%',
            border: '3px solid #C79949',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        {/* Image circle */}
        <div
          className="relative rounded-full overflow-hidden shadow-lg"
          style={{ width: '84%', paddingBottom: '84%' }}
        >
          <img
            src="/green.webp"
            alt="A seedling growing from soil — symbolising growth and resilience"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Right: Dark green stats panel ── */}
      <div
        className="flex flex-col justify-center px-8 py-8 flex-1"
        style={{ background: '#2E5D49' }}
      >
        {/* Label */}
        <span
          className="font-bold tracking-widest uppercase mb-5 block"
          style={{ fontSize: '11px', color: '#C79949' }}
        >
          Our Impact
        </span>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          {STATS.map(({ icon: Icon, number, label }) => (
            <div key={label} className="flex flex-col items-start gap-1">
              <Icon className="mb-1" style={{ color: '#C79949', fontSize: '22px' }} />
              <span
                className="font-heading font-bold text-white leading-none"
                style={{ fontSize: 'clamp(18px, 2vw, 28px)' }}
              >
                {number}
              </span>
              <span
                className="text-white/70 leading-snug whitespace-pre-line"
                style={{ fontSize: '12px' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-white/50 mt-1" style={{ fontSize: '11px', maxWidth: '420px' }}>
          These numbers represent our growing impact and the communities we are privileged to serve.
        </p>
      </div>

    </section>
  );
};

export default WhyWeExist;
