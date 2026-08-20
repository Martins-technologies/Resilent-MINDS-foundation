import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { 
  FaUsers, 
  FaChalkboardTeacher, 
  FaHandsHelping 
} from 'react-icons/fa';

const ImpactSection = () => {
  const stats = [
    { 
      number: '1,000+', 
      label: 'People Reached',
      icon: FaUsers,
    },
    { 
      number: '100+', 
      label: 'Workshops Delivered',
      icon: FaChalkboardTeacher,
    },
    { 
      number: '50+', 
      label: 'Community Volunteers',
      icon: FaHandsHelping,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop)',
        }}
      ></div>
      <div className="absolute inset-0 bg-forest/85"></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <span className="inline-block text-white font-bold text-xl text-center tracking-widest uppercase mb-3">
              Our Impact
            </span>
            <div className="text-white  text-sm md:text-xl lg:text-2xl  mb-4 ">
              Stronger support creates stronger families and stronger communities.
            </div>
            <Link to="/impact" className="inline-flex items-center gap-2 bg-white text-forest-dark px-6 py-3 rounded-xl font-bold hover:bg-[#b8873a] transition-colors">
              See Our Impact →
            </Link>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-[56px] h-[56px] rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                    <stat.icon className="text-2xl text-gold" />
                  </div>
                </div>
                <div className="stat num text-gold text-3xl md:text-4xl font-heading font-bold block">
                  {stat.number}
                </div>
                <div className="stat label text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImpactSection;