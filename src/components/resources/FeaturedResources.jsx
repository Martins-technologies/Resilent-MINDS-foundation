import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import { FaStar } from 'react-icons/fa'; // Icon add kiya

const FeaturedResources = () => {
  const resources = [
    { 
      tag: 'Article', 
      title: 'Building Emotional Resilience', 
      desc: 'Simple steps to strengthen your mind and navigate stress with confidence.', 
      link: 'Read More →', 
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      tag: 'Guide', 
      title: 'Self-Care Guide', 
      desc: 'A practical guide to daily habits that support your mental and emotional well-being.', 
      link: 'Download Guide →', 
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      tag: 'Tool', 
      title: 'Mindfulness Worksheet', 
      desc: 'A simple worksheet to help you stay present, manage anxiety, and reduce overwhelm.', 
      link: 'Use Worksheet →', 
      image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      tag: 'Video', 
      title: 'Understanding Stress & How to Manage It', 
      desc: 'Watch our expert-led webinar on understanding stress and building coping skills.', 
      link: 'Watch Now →', 
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      tag: 'Support', 
      title: 'Where to Get Help', 
      desc: 'A list of trusted hotlines, organizations, and local resources for support.', 
      link: 'View Resources →', 
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
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
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x160/FEF9F2/2E5D49?text=${encodeURIComponent(res.title)}`;
                  }}
                />
                
                <div className="absolute bottom-3 left-3 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#C79949] flex items-center justify-center text-white shadow-md">
                    <FaStar size={16} />
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
                <span className="text-xs font-bold text-[#5c1a2e] hover:opacity-70 transition-opacity cursor-pointer">
                  {res.link}
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