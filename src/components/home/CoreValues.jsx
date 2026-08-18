// src/components/home/CoreValues.jsx
import Container from '../ui/Container';
import { 
  FaHeart,           // Compassion
  FaSeedling,        // Resilience
  FaHandSparkles,    // Empowerment
  FaUsers,           // Inclusion
  FaSun              // Hope
} from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    { 
      icon: FaHeart, 
      title: 'Compassion', 
      desc: 'We meet people where they are with empathy.',
      color: 'text-burgundy'
    },
    { 
      icon: FaSeedling, 
      title: 'Resilience', 
      desc: 'We believe every person can recover and grow.',
      color: 'text-forest'
    },
    { 
      icon: FaHandSparkles, 
      title: 'Empowerment', 
      desc: 'We provide tools for a healthier, stronger future.',
      color: 'text-gold'
    },
    { 
      icon: FaUsers, 
      title: 'Inclusion', 
      desc: 'Everyone is valued, respected and supported.',
      color: 'text-forest'
    },
    { 
      icon: FaSun, 
      title: 'Hope', 
      desc: 'Hope is the foundation for healing and change.',
      color: 'text-burgundy'
    },
  ];

  return (
    <section className="section pt-0">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center text-2xl mx-auto mb-3.5 bg-[#F1E6D2] ${value.color}`}>
                <value.icon size={24} />
              </div>
              <h4 className="font-body text-base text-ink mb-1">{value.title}</h4>
              <p className="text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;