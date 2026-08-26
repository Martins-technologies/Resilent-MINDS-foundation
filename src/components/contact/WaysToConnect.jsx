import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaCommentDots,
  FaUsers,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';

const WaysToConnect = () => {
  const ways = [
    { 
      icon: FaEnvelope, 
      title: 'Email Us', 
      desc: 'info@resilientmindsfoundation.ca\nWe typically respond within 1–2 business days.', 
      bg: 'bg-[#2E5D49]' 
    },
    { 
      icon: FaPhone, 
      title: 'Call Us', 
      desc: '403-404-9380\nMon–Fri, 9:00 AM – 5:00 PM ', 
      bg: 'bg-[#6E2839]' 
    },
    { 
      icon: FaMapMarkerAlt, 
      title: 'Visit Us', 
      desc: '1220 N. Market Street\nWilmington, DE 19801, USA\nBy appointment only', 
      bg: 'bg-[#C79949]' 
    },
    {
      icon: FaCommentDots,
      title: 'Reach Out',
      desc: 'If you or someone you know needs support, we\'re here to help.',
      bg: 'bg-[#2E5D49]'
    },
    { 
      icon: FaUsers, 
      title: 'Stay Connected', 
      desc: 'Follow us on social media for updates, resources, and inspiration.', 
      bg: 'bg-[#6E2839]' 
    },
  ];

  return (
    <section className="section section--band pt-0 bg-[#FEF9F2] py-12">
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 flex items-center justify-center gap-4 md:gap-8">
          <span className="h-px w-16 md:w-32 bg-[#C79949]/60" aria-hidden="true" />
          <Eyebrow>Ways to Connect</Eyebrow>
          <span className="h-px w-16 md:w-32 bg-[#C79949]/60" aria-hidden="true" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-0 relative">
          {ways.map((way, index) => (
            <div key={index} className="relative text-center flex flex-col items-center px-3 py-4 md:py-0">
              
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#C79949] opacity-20"></div>
              )}

              <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 ${way.bg} shadow-md`}>
                <way.icon className="text-white text-xl" />
              </div>
              
              <h4 className="font-body text-sm font-bold text-[#2E5D49] mb-1">
                {way.title}
              </h4>
              
              <p className="text-xs text-gray-600 whitespace-pre-line leading-relaxed mb-3">
                {way.desc}
              </p>

              {way.title === 'Reach Out' && (
                <a
                  href="#contact-form"
                  className="mt-1 inline-flex items-center gap-2 text-sm font-bold text-[#2E5D49] hover:text-[#6E2839] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C79949] transition-colors"
                  aria-label="Reach out through our contact form"
                >
                  Contact Us <span aria-hidden="true">→</span>
                </a>
              )}

              {/* Social Icons (Only for Stay Connected) */}
              {way.title === 'Stay Connected' && (
                <div className="flex items-center gap-3 mt-1">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-burgundy hover:text-[#2E5D49] transition-colors text-lg">
                    <FaFacebook />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-burgundy hover:text-[#2E5D49] transition-colors text-lg">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-burgundy hover:text-[#2E5D49] transition-colors text-lg">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-burgundy hover:text-[#C79949] transition-colors text-lg">
                    <FaYoutube />
                  </a>
                </div>
              )}
              
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WaysToConnect;