import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const ResourceTypes = () => {
  const types = [
    { icon: '/Resources/Untitled-4-01.svg', color: '#6E2839', title: 'Articles', desc: 'Informative reads on mental health, resilience, and personal growth.', link: 'Explore Articles', to: '/resources#featured-resources' },
    { icon: '/Resources/Untitled-4-02.svg', color: '#2E5D49', title: 'Guides & Toolkits', desc: 'Practical guides and toolkits to help you navigate life\u2019s challenges.', link: 'View Guides', to: '/resources#featured-resources' },
    { icon: '/Resources/Untitled-4-03.svg', color: '#C79949', title: 'Tools & Worksheets', desc: 'Self-help tools and worksheets to build skills and support well-being.', link: 'Access Tools', to: '/resources#featured-resources' },
    { icon: '/Resources/Untitled-4-04.svg', color: '#2E5D49', title: 'Videos & Webinars', desc: 'Watch and learn from experts and real stories of hope.', link: 'Watch Now', to: '/resources#featured-resources' },
    { icon: '/Resources/Untitled-4-05.svg', color: '#6E2839', title: 'Support Resources', desc: 'Find help, hotlines, and local services when you need support.', link: 'Find Support', to: '/contact' },
  ];

  return (
    <section className="section section--band">
      <Container>
        
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-12 h-[1px] bg-[#C79949] opacity-40"></div>
          <div className="mb-0 whitespace-nowrap text-2xl text-gold">Browse by Resource Type</div>
          <div className="w-12 h-[1px] bg-[#C79949] opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 lg:gap-2 relative">
          {types.map((type, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-2 py-4 lg:py-0">
              
              {index !== 0 && (
                <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-30 bg-[#C79949] opacity-30"></div>
              )}

              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3.5"
                style={{ backgroundColor: type.color }}
              >
                <img src={type.icon} alt={type.title} className="w-7 h-7 object-contain" />
              </div>
              <h5 className="text-sm mb-1.5">{type.title}</h5>
              <p className="text-xs text-ink-soft mb-2 leading-relaxed min-h-[40px]">{type.desc}</p>
              
              <Link
                to={type.to}
                className="text-xs font-bold text-burgundy no-underline flex items-center gap-1 whitespace-nowrap hover:opacity-70 transition-opacity"
              >
                {type.link}
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ResourceTypes;