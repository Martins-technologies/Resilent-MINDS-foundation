import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaHeadset, 
  FaShareAlt 
} from 'react-icons/fa';

const WaysToConnect = () => {
  const ways = [
    { 
      icon: FaEnvelope, 
      title: 'Email Us', 
      desc: '[Email address — to be supplied]\nWe typically respond within 1–2 business days.', 
      bg: 'bg-forest' 
    },
    { 
      icon: FaPhone, 
      title: 'Call Us', 
      desc: '[Phone number — to be supplied]\nMon–Fri, business hours', 
      bg: 'bg-burgundy' 
    },
    { 
      icon: FaMapMarkerAlt, 
      title: 'Visit Us', 
      desc: '[Address — to be supplied]\nBy appointment only', 
      bg: 'bg-gold' 
    },
    { 
      icon: FaHeadset, 
      title: 'Get Support', 
      desc: 'If you or someone you know needs support, we\'re here to help.', 
      bg: 'bg-forest' 
    },
    { 
      icon: FaShareAlt, 
      title: 'Stay Connected', 
      desc: 'Follow us on social media for updates, resources, and inspiration.', 
      bg: 'bg-burgundy' 
    },
  ];

  return (
    <section className="section section--band pt-0">
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 text-center">
          <Eyebrow>Ways to Connect</Eyebrow>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {ways.map((way, index) => (
            <div key={index} className="text-center">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 ${way.bg}`}>
                <way.icon className="text-white text-xl" />
              </div>
              <h4 className="font-body text-sm font-bold text-ink mb-1">{way.title}</h4>
              <p className="text-xs text-ink-soft whitespace-pre-line">{way.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WaysToConnect;