import Container from '../ui/Container';
import { FaUsers, FaChalkboardTeacher, FaHome, FaHandHoldingHeart } from 'react-icons/fa';

const CommunityImpact = () => {
  const items = [
    { icon: FaUsers, color: '#2E5D49', label: 'People Supported' },
    { icon: FaChalkboardTeacher, color: '#6E2839', label: 'Workshops Delivered' },
    { icon: FaHome, color: '#C79949', label: 'Communities Reached' },
    { icon: FaHandHoldingHeart, color: '#2E5D49', label: 'Volunteers Engaged' },
  ];

  return (
    <section className="section section--band pt-0">
      <Container>
        <div className="text-center mb-10">
          <h2 className="mb-1">Community Impact</h2>
          <p className="mb-0">Measured across our programs and outreach.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="card text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: item.color }}
              >
                <item.icon className="text-white text-xl" />
              </div>
              <h4 className="text-sm mb-0">{item.label}</h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CommunityImpact;
