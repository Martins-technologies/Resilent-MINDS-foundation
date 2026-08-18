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
          <div className="text-center mb-8">
            <h2 className="mb-0">How We Measure Impact</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {items.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-12 h-12 rounded-full bg-[#F1E6D2] flex items-center justify-center mx-auto mb-3">
                  <item.icon className="text-burgundy text-lg" />
                </div>
                <p className="text-xs font-semibold text-ink mb-0">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--burgundy py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex items-center gap-4">
              <FaShieldAlt className="text-gold text-3xl flex-shrink-0" />
              <div>
                <h3 className="text-white mb-1">Transparency builds trust.</h3>
                <p className="mb-0">
                  We are committed to reporting our program outcomes and the impact of your support with honesty and clarity.
                </p>
              </div>
            </div>
            <Button variant="outlineLight" to="/about">
              Learn More →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MeasureImpact;
