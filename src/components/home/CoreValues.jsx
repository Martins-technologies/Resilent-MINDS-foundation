import Container from '../ui/Container';
import { 
  FaHeart,           
  FaSeedling,        
  FaHandSparkles,    
  FaUsers,           
  FaSun              
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
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-stretch">
            {values.map((value, index) => (
              <div key={index} className="flex items-stretch">
                {/* Card */}
                <div className="text-center px-4 py-6 w-[200px]">
                  <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center text-2xl mx-auto mb-3.5 bg-[#F1E6D2] ${value.color}`}>
                    <value.icon size={24} />
                  </div>
                  <h4 className="font-body text-base text-ink mb-1">{value.title}</h4>
                  <p className="text-sm">{value.desc}</p>
                </div>
                
                {/* Vertical Line - Hidden on Mobile, visible on sm and up */}
                {index < values.length - 1 && (
                  <div className="hidden sm:block w-[2px] bg-gray-300 self-stretch min-h-[120px] mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;