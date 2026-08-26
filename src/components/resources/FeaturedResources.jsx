import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const FeaturedResources = () => {
  const resources = [
    { 
      tag: 'Article', 
      title: 'Building Emotional Resilience', 
      desc: 'Simple steps to strengthen your mind and navigate stress with confidence.', 
      link: 'Read More →',
      to: '/contact-us',
      image: '/Resources/girl.webp',
      imagePosition: 'center 60%',
      badgeIcon: '/Resources/articles.svg',
      badgeColor: '#6E2839',
    },
    { 
      tag: 'Guide', 
      title: 'Self-Care Guide', 
      desc: 'A practical guide to daily habits that support your mental and emotional well-being.', 
      link: 'Download Guide →',
      to: '/contact-us',
      image: '/Resources/selfcareguide.webp',
      badgeIcon: '/Resources/guides.svg',
      badgeColor: '#2E5D49',
    },
    { 
      tag: 'Tool', 
      title: 'Mindfulness Worksheet', 
      desc: 'A simple worksheet to help you stay present, manage anxiety, and reduce overwhelm.', 
      link: 'Use Worksheet →',
      to: '/contact-us',
      image: '/Resources/mindfullness.webp',
      badgeIcon: '/Resources/tools.svg',
      badgeColor: '#C79949',
    },
    { 
      tag: 'Video', 
      title: 'Understanding Stress & How to Manage It', 
      desc: 'Watch our expert-led webinar on understanding stress and building coping skills.', 
      link: 'Watch Now →',
      to: '/contact-us',
      image: '/Resources/stress.webp',
      badgeIcon: '/Resources/video.svg',
      badgeColor: '#2E5D49',
    },
    { 
      tag: 'Support', 
      title: 'Where to Get Help', 
      desc: 'A list of trusted hotlines, organizations, and local services for support.', 
      link: 'View Resources →',
      to: '/contact-us',
      image: '/Resources/help.webp',
      badgeIcon: '/Resources/support.svg',
      badgeColor: '#6E2839',
    },
  ];

  return (
    <section id="featured-resources" className="section py-12 bg-[#FEF9F2]">
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 text-center">
          <Eyebrow>Featured Resources</Eyebrow>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {resources.map((res, index) => (
            <div key={index} className="card overflow-hidden !p-0 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              
              {/* Image Wrapper - Full Width */}
              <div className="relative w-full">
                <img 
                  src={res.image} 
                  alt={res.title}
                  loading="lazy"
                  className="w-full h-40 object-cover block"
                  style={res.imagePosition ? { objectPosition: res.imagePosition } : undefined}
                />
                
                <div className="absolute bottom-3 left-3 z-10">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shadow-md"
                    style={{ backgroundColor: res.badgeColor }}
                  >
                    <img src={res.badgeIcon} alt={res.tag} className="w-7 h-7 object-contain" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C79949]">
                  {res.tag}
                </span>
                <h5 className="text-sm mt-1 mb-1.5 font-semibold text-[#0f4c3a]">
                  {res.title}
                </h5>
                <p className="text-xs text-gray-600 mb-3 flex-grow leading-relaxed">
                  {res.desc}
                </p>
                <Link
                  to={res.to}
                  className="text-xs font-bold text-[#5c1a2e] hover:opacity-70 transition-opacity"
                >
                  {res.link}
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedResources;