import Button from '../ui/Button';
import Container from '../ui/Container';
import {
  FaUsers,
  FaClipboardCheck,
  FaClock,
  FaHandshake,
  FaBookOpen,
  FaShieldAlt,
} from 'react-icons/fa';

const MeasureImpact = () => {
  const items = [
    { icon: FaUsers, label: 'Individuals Supported' },
    { icon: FaClipboardCheck, label: 'Workshops Completed' },
    { icon: FaClock, label: 'Volunteer Hours' },
    { icon: FaHandshake, label: 'Community Partnerships' },
    { icon: FaBookOpen, label: 'Resources Distributed' },
  ];

  return (
    <>
      <section className="section pt-0">
        <Container>
          <div className="flex items-center justify-center gap-3 mb-10">
            {/* Left Line - Width ab sirf 48px (w-12) hai */}
            <div className="w-12 h-[1px] bg-[#C79949] opacity-40"></div>
            
            {/* Text */}
            <h2 className="mb-0 whitespace-nowrap">How We Measure Impact</h2>
            
            {/* Right Line - Width ab sirf 48px (w-12) hai */}
            <div className="w-12 h-[1px] bg-[#C79949] opacity-40"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {items.map((item, index) => (
              <div key={index} className="card flex  items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#F1E6D2] flex items-center justify-center mx-auto ">
                  <item.icon className="text-burgundy text-xl" />
                </div>
                <p className="text-xs font-semibold text-ink mb-0">{item.label}</p>
              </div>
            ))}
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