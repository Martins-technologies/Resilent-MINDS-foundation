import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const FeaturedResources = () => {
  const resources = [
    { 
      tag: 'Article', 
      title: 'Building Emotional Resilience', 
      desc: 'Simple steps to strengthen your mind and navigate stress with confidence.', 
      image: '/Resources/girl.webp',
      badgeIcon: '/Resources/articles.svg',
      badgeColor: '#6E2839',
    },
    { 
      tag: 'Guide', 
      title: 'Self-Care Guide', 
      desc: 'A practical guide to daily habits that support your mental and emotional well-being.', 
      image: '/Resources/selfcareguide.webp',
      badgeIcon: '/Resources/guides.svg',
      badgeColor: '#2E5D49',
    },
    { 
      tag: 'Tool', 
      title: 'Mindfulness Worksheet', 
      desc: 'A simple worksheet to help you stay present, manage anxiety, and reduce overwhelm.', 
      image: '/Resources/mindfullness.webp',
      badgeIcon: '/Resources/tools.svg',
      badgeColor: '#C79949',
    },
    { 
      tag: 'Video', 
      title: 'Understanding Stress & How to Manage It', 
      desc: 'Watch our expert-led webinar on understanding stress and building coping skills.', 
      image: '/updated/11_Resources_Understanding_Stress_and_How_to_Manage_It.webp',
      imageClass: 'object-contain object-center',
      badgeIcon: '/Resources/video.svg',
      badgeColor: '#2E5D49',
    },
    { 
      tag: 'Support', 
      title: 'Where to Get Help', 
      desc: 'A list of trusted hotlines, organizations, and local services for support.', 
      image: '/updated/12_Resources_Where_to_Get_Help.webp',
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
              
              <div className="relative h-48 w-full shrink-0 overflow-hidden bg-[#FFF5E1]">
                <img 
                  src={res.image} 
                  alt={res.title}
                  loading="lazy"
                  className={`block h-full w-full ${res.imageClass || 'object-cover object-center'}`}
                />
                
                <div className="absolute bottom-3 left-3 z-10">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shadow-md"
                    style={{ backgroundColor: res.badgeColor }}
                  >
                    <img src={res.badgeIcon} alt="" className="w-7 h-7 object-contain" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C79949]">
                  {res.tag}
                </span>
                <h5 className="text-sm mt-1 mb-1.5 min-h-10 font-semibold leading-5 text-[#0f4c3a]">
                  {res.title}
                </h5>
                <p className="text-xs text-gray-600 mb-3 min-h-[3.75rem] flex-grow leading-relaxed">
                  {res.desc}
                </p>
                <span className="text-xs font-bold text-[#5c1a2e] select-none">
                  Coming Soon
                </span>
              </div>
              
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedResources;