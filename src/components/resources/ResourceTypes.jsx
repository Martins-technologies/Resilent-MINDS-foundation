import Container from '../ui/Container';

const ResourceTypes = () => {
  const types = [
    { icon: '/Resources/articles.svg', color: '#6E2839', title: 'Articles', desc: 'Informative reads on mental health, resilience, and personal growth.' },
    { icon: '/Resources/guides.svg',   color: '#2E5D49', title: 'Guides & Toolkits', desc: 'Practical guides and toolkits to help you navigate life\u2019s challenges.' },
    { icon: '/Resources/tools.svg',    color: '#C79949', title: 'Tools & Worksheets', desc: 'Self-help tools and worksheets to build skills and support well-being.' },
    { icon: '/Resources/video.svg',    color: '#2E5D49', title: 'Videos & Webinars', desc: 'Watch and learn from experts and real stories of hope.' },
    { icon: '/Resources/support.svg',  color: '#6E2839', title: 'Support Resources', desc: 'Find help, hotlines, and local services when you need support.' },
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
                <img src={type.icon} alt={type.title} className="w-9 h-9 object-contain" />
              </div>
              <h5 className="text-sm mb-1.5">{type.title}</h5>
              <p className="text-xs text-ink-soft mb-2 leading-relaxed min-h-[40px]">{type.desc}</p>
              
              <span className="text-xs font-bold text-burgundy tracking-wide select-none">
                Coming Soon
              </span>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ResourceTypes;