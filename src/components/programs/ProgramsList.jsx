import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Eyebrow from '../ui/Eyebrow';

const ProgramsList = () => {
  const programs = [
    {
      title: 'Resilient Minds Academy',
      desc: 'Education for emotional intelligence, confidence and wellbeing.',
      color: 'text-burgundy',
      image: '/PROGRAME%20updated/mind.webp',
      link: '/contact'
    },
    {
      title: 'Youth Strong Program',
      desc: 'Mentorship and skills for a brighter tomorrow.',
      color: 'text-forest',
      image: '/PROGRAME%20updated/youth.webp',
      link: '/contact'
    },
    {
      title: 'Community Healing Circles',
      desc: 'Safe spaces to connect, share and grow together.',
      color: 'text-gold',
      image: '/PROGRAME%20updated/community.webp',
      link: '/contact'
    },
    {
      title: 'Workplace Wellness Initiative',
      desc: 'Healthier, more resilient workplaces and teams.',
      color: 'text-forest',
      image: '/PROGRAME%20updated/workspace.webp',
      link: '/contact'
    },
    {
      title: 'Hope Resource Hub',
      desc: 'Guides, tools and resources for everyday resilience.',
      color: 'text-burgundy',
      image: '/PROGRAME%20updated/hope.jpeg',
      link: '/resources'
    },
  ];

  return (
    <section id="programs-list" className="w-full bg-[#FEF9F2] py-12">
      <div className="w-full px-4 sm:px-6 md:px-8">

        <div className="max-w-[640px] mx-auto mb-10 text-center px-4">
          <Eyebrow>OUR PROGRAMS</Eyebrow>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 !p-0">

              <img
                src={program.image}
                alt={program.title}
                loading="lazy"
                className="w-full h-50 object-cover block"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x400/FEF9F2/2E5D49?text=${encodeURIComponent(program.title)}`;
                }}
              />

              {/* Text Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-body text-[18px] font-semibold mb-2 text-start" style={{ color: '#2E5D49' }}>
                  {program.title}
                </h4>

                <p className="text-[13px] text-start flex-grow leading-relaxed" style={{ color: '#2E5D49' }}>
                  {program.desc}
                </p>

                <Link
                  to={program.link}
                  className={`font-bold text-[13px] inline-block mt-4 text-start ${program.color} hover:opacity-70 transition-opacity`}
                >
                  Learn More →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsList;