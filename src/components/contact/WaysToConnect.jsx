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
      desc: 'info@resilientmindsfoundation.ca\nWe typically respond within 1–2 business days.', 
      bg: 'bg-[#2E5D49]' // Forest Green
    },
    { 
      icon: FaPhone, 
      title: 'Call Us', 
      desc: '403-404-9380\nMon–Fri, 9:00 AM – 5:00 PM ', 
      bg: 'bg-[#6E2839]' // Burgundy
    },
    { 
      icon: FaMapMarkerAlt, 
      title: 'Visit Us', 
      desc: '1220 N. Market Street\nWilmington, DE 19801, USA\nBy appointment only', 
      bg: 'bg-[#C79949]' // Antique Gold
    },
    { 
      icon: FaHeadset, 
      title: 'Get Support', 
      desc: 'If you or someone you know needs support, we\'re here to help.', 
      bg: 'bg-[#2E5D49]' // Forest Green
    },
    { 
      icon: FaShareAlt, 
      title: 'Stay Connected', 
      desc: 'Follow us on social media for updates, resources, and inspiration.', 
      bg: 'bg-[#6E2839]' // Burgundy
    },
  ];

  return (
    <section className="section section--band pt-0 bg-[#FEF9F2] py-12">
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 text-center">
          <Eyebrow>Ways to Connect</Eyebrow>
        </div>
        
        {/* Grid: 1 col mobile, 2 cols tablet, 5 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {ways.map((way, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              
              {/* Icon Circle */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 ${way.bg} shadow-md`}>
                <way.icon className="text-white text-xl" />
              </div>
              
              {/* Title */}
              <h4 className="font-body text-sm font-bold text-[#2E5D49] mb-1">
                {way.title}
              </h4>
              
              {/* Description - whitespace-pre-line handles new lines (\n) */}
              <p className="text-xs text-gray-600 whitespace-pre-line leading-relaxed">
                {way.desc}
              </p>
              
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WaysToConnect;