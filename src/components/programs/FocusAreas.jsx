import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import IconCircle from '../ui/IconCircle';
import { 
  FaBrain,           // Education
  FaHandsHelping,    // Connection
  FaStar,            // Empowerment
  FaHeart,           // Support
  FaSeedling         // Resilience
} from 'react-icons/fa';

const FocusAreas = () => {
  const areas = [
    { 
      icon: FaBrain, 
      title: 'Education', 
      desc: 'Building knowledge and awareness for better mental wellness.',
      color: '#6E2839' // Burgundy
    },
    { 
      icon: FaHandsHelping, 
      title: 'Connection', 
      desc: 'Creating supportive communities where no one has to face challenges alone.',
      color: '#2E5D49' // Forest Green
    },
    { 
      icon: FaStar, 
      title: 'Empowerment', 
      desc: 'Equipping individuals with tools and skills to take control of their wellbeing.',
      color: '#C79949' // Antique Gold
    },
    { 
      icon: FaHeart, 
      title: 'Support', 
      desc: 'Providing compassionate resources and guidance at every step.',
      color: '#2E5D49' // Forest Green
    },
    { 
      icon: FaSeedling, 
      title: 'Resilience', 
      desc: 'Helping individuals and communities thrive through every season.',
      color: '#6E2839' // Burgundy
    },
  ];

  return (
    <section className="section section--band pt-0" style={{ backgroundColor: '#FEF9F2' }}> {/* Warm Ivory background */}
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 text-center">
          <Eyebrow>OUR CORE FOCUS AREAS</Eyebrow>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div key={index} className="text-center">
                <IconCircle 
                  bgColor={area.color} 
                  textColor="#FFFFFF" 
                  className="mx-auto mb-3.5"
                >
                  <IconComponent size={28} />
                </IconCircle>
                <h4 className="font-body text-sm mb-1" style={{ color: '#2E5D49' }}> {/* Forest Green heading */}
                  {area.title}
                </h4>
                <p className="text-xs" style={{ color: '#2E5D49' }}>
                  {area.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FocusAreas;