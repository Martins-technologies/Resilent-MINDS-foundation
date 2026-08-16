import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Eyebrow from '../ui/Eyebrow';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'Resilient Minds Academy',
      desc: 'Education for emotional intelligence, confidence and wellbeing.',
      link: '/programs',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
    },
    {
      title: 'Youth Strong Program',
      desc: 'Mentorship and skills for a brighter tomorrow.',
      link: '/programs',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=300&fit=crop',
    },
    {
      title: 'Community Healing Circles',
      desc: 'Safe spaces to connect, share and grow together.',
      link: '/programs',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
    },
    {
      title: 'Workplace Wellness Initiative',
      desc: 'Healthier, more resilient workplaces and teams.',
      link: '/programs',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    },
    {
      title: 'Hope Resource Hub',
      desc: 'Guides, tools and resources for everyday resilience.',
      link: '/resources',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section className="section section--band">
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 text-center">
          <Eyebrow>Our Programs</Eyebrow>
          <h2 className="mb-2">Creating Real Change in Our Communities</h2>
          <p>Practical support. Meaningful connection. Lasting impact.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {programs.map((program, index) => (
            <div key={index} className="bg-white border border-line rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              {/* Image - NO padding, NO margin, FULL width */}
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-[160px] object-cover m-0 p-0 block"
              />
              <div className="p-4 flex flex-col flex-1">
                <h4 className="font-body text-base font-bold text-ink mb-1">{program.title}</h4>
                <p className="text-sm text-ink-soft flex-1">{program.desc}</p>
                <Link to={program.link} className="text-burgundy font-bold text-sm inline-block mt-3 hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProgramsSection;