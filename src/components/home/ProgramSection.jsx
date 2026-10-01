import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const ProgramsSection = () => {
  const communityPrograms = [
    {
      title: 'Youth Strong Program',
      desc: 'Mentorship and skills for a brighter tomorrow.',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=300&fit=crop',
    },
    {
      title: 'Community Healing Circles',
      desc: 'Safe spaces to connect, share and grow together.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
    },
    {
      title: 'Workplace Wellness Initiative',
      desc: 'Healthier, more resilient workplaces and teams.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    },
  ];

  const resourceHub = {
    title: 'Hope Resource Hub',
    desc: 'Guides, tools and resources for everyday resilience.',
    link: '/resources',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
  };

  return (
    <section className="section section--band">
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 text-center">
          <Eyebrow>Our Programs</Eyebrow>
          <h3 className="mb-2">Creating Real Change in Our Communities</h3>
          <p>Practical support. Meaningful connection. Lasting impact.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          {/* Grouped Programs Area */}
          <div className="lg:col-span-3 bg-white border border-line rounded-lg overflow-hidden shadow-sm flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line flex-1">
              {communityPrograms.map((program, index) => (
                <div key={index} className="flex flex-col">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-[160px] object-cover object-center m-0 p-0 block"
                  />
                  <div className="p-5 flex flex-col flex-1 text-center">
                    <h4 className="font-body text-base font-bold text-ink mb-1">{program.title}</h4>
                    <p className="text-sm text-ink-soft">{program.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-[#fdfaf6] border-t border-line text-center">
              <Link to="/our-programs" className="text-burgundy font-bold text-sm inline-block hover:underline">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Hope Resource Hub */}
          <div className="bg-white border border-line rounded-lg overflow-hidden shadow-sm flex flex-col">
            <img 
              src={resourceHub.image} 
              alt={resourceHub.title}
              className="w-full h-[160px] object-cover object-center m-0 p-0 block"
            />
            <div className="p-5 flex flex-col flex-1 text-center">
              <h4 className="font-body text-base font-bold text-ink mb-1">{resourceHub.title}</h4>
              <p className="text-sm text-ink-soft flex-1">{resourceHub.desc}</p>
              <Link to={resourceHub.link} className="text-burgundy font-bold text-sm inline-block mt-4 hover:underline">
                Explore Resources →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProgramsSection;