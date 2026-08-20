import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import { 
  FaHeart, 
  FaShieldAlt, 
  FaRocket, 
  FaUsers, 
  FaStar, 
  FaTree 
} from 'react-icons/fa';

const CoreValuesList = () => {
  const values = [
    { 
      num: '01', 
      title: 'Compassion', 
      desc: 'We meet people where they are with empathy, kindness, and understanding.',
      icon: FaHeart,
    },
    { 
      num: '02', 
      title: 'Resilience', 
      desc: 'We believe every person has the ability to recover, adapt, and grow through adversity.',
      icon: FaShieldAlt,
    },
    { 
      num: '03', 
      title: 'Empowerment', 
      desc: 'We provide tools, education, and opportunities that help people take control of their wellbeing.',
      icon: FaRocket,
    },
    { 
      num: '04', 
      title: 'Inclusion', 
      desc: 'We create safe spaces where everyone feels valued, respected, and supported.',
      icon: FaUsers,
    },
    { 
      num: '05', 
      title: 'Hope', 
      desc: 'We believe hope is the foundation for healing, transformation, and positive change.',
      icon: FaStar,
    },
    { 
      num: '06', 
      title: 'Community', 
      desc: 'We strengthen connections because no one should face life&rsquo;s challenges alone.',
      icon: FaTree,
    },
  ];

  return (
    <section className="section bg-ivory">
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 text-center">
          <Eyebrow>Our Core Values</Eyebrow>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-0">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`px-4 py-6 text-center ${
                index < values.length - 1 ? 'lg:border-r border-line' : ''
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-[#F1E6D2] flex items-center justify-center mx-auto mb-3">
                <value.icon className="text-[#6E2839] text-xl" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-xs font-bold text-gold">{value.num}</span>
                <h4 className="font-body text-sm font-bold text-ink m-0">{value.title}</h4>
              </div>
              <p className="text-xs text-ink-soft max-w-xs mx-auto">{value.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreValuesList;