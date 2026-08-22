import Button from '../ui/Button';
import Container from '../ui/Container';
import { FaShieldAlt } from 'react-icons/fa';
import IconPeople from '../icons/IconPeople';
import IconCalendar from '../icons/IconCalendar';
import IconVolunteer from '../icons/IconVolunteer';
import IconHandshake from '../icons/IconHandshake';

const IconBook = ({ size = 28, color = 'currentColor', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 38V10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v28" />
    <path d="M8 38a4 4 0 0 0 4 4h24" />
    <path d="M36 42a4 4 0 0 0 0-8H8" />
    <path d="M16 14h16M16 21h16M16 28h10" />
  </svg>
);

const STATS = [
  {
    Icon: IconPeople,
    bg: '#D9D4CB',
    iconColor: '#2E5D49',
    label: 'Individuals Supported',
  },
  {
    Icon: IconCalendar,
    bg: '#6E2839',
    iconColor: '#ffffff',
    label: 'Workshops Completed',
  },
  {
    Icon: IconVolunteer,
    bg: '#C79949',
    iconColor: '#ffffff',
    label: 'Volunteer Hours',
  },
  {
    Icon: IconHandshake,
    bg: '#4A6B41',
    iconColor: '#ffffff',
    label: 'Community Partnerships',
  },
  {
    Icon: IconBook,
    bg: '#4A1C2D',
    iconColor: '#ffffff',
    label: 'Resources Distributed',
  },
];

const MeasureImpact = () => {
  return (
    <>
      <section className="section pt-0 overflow-hidden">
        <Container>
          <div>
            <div className="flex flex-col justify-center">
              {/* Section heading */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex-shrink-0 w-10 h-[1px] bg-gold opacity-60" />
                <h2 className="mb-0 whitespace-nowrap text-2xl md:text-3xl">
                  How We Measure Impact
                </h2>
                <div className="flex-shrink-0 w-10 h-[1px] bg-gold opacity-60" />
              </div>

              {/* Horizontal stat cards — icon left, label right */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {STATS.map(({ Icon, bg, iconColor, label }) => (
                  <div
                    key={label}
                    className="card min-h-[112px] flex flex-row items-center gap-3 py-4 px-3 text-left"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: bg }}
                    >
                      <Icon size={25} color={iconColor} strokeWidth={1.6} />
                    </div>
                    <p className="flex-1 text-xs font-semibold text-ink leading-snug mb-0">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      <section
        className="section section--burgundy py-4 relative overflow-hidden"
        style={{
          backgroundImage: "url('/PROGRAME%20updated/f1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Burgundy overlay so text stays readable over the image */}
        <div className="absolute inset-0 bg-burgundy/85 z-0" />

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-5">
              {/* Circular gold medallion icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg ring-4 ring-gold/30">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-white mb-1">Transparency builds trust.</h3>
                <p className="mb-0 md:w-3/4">
                  We are committed to reporting our program outcomes and the impact of your support with honesty and clarity.
                </p>
              </div>
            </div>
            <Button
              variant="outlineLight"
              to="/about"
              className="!rounded-xl !px-7 !py-3 !font-semibold !border-2 hover:!bg-white hover:!text-burgundy transition-colors duration-200 whitespace-nowrap flex-shrink-0"
            >
              Learn More &rarr;
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MeasureImpact;