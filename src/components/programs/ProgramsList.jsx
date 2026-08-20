import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Eyebrow from '../ui/Eyebrow';
import IconCircle from '../ui/IconCircle';
import {
  FaGraduationCap,
  FaUsers,
  FaHands,
  FaBriefcase,
  FaBookOpen
} from 'react-icons/fa';

const ProgramsList = () => {
  const programs = [
    {
      icon: FaGraduationCap,
      title: 'Resilient Minds Academy',
      desc: 'Education for emotional intelligence, confidence and wellbeing.',
      color: 'text-burgundy',
      bgColor: '#6E2839',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/contact'
    },
    {
      icon: FaUsers,
      title: 'Youth Strong Program',
      desc: 'Mentorship and skills for a brighter tomorrow.',
      color: 'text-forest',
      bgColor: '#2E5D49',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/contact'
    },
    {
      icon: FaHands,
      title: 'Community Healing Circles',
      desc: 'Safe spaces to connect, share and grow together.',
      color: 'text-gold',
      bgColor: '#C79949',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/contact'
    },
    {
      icon: FaBriefcase,
      title: 'Workplace Wellness Initiative',
      desc: 'Healthier, more resilient workplaces and teams.',
      color: 'text-forest',
      bgColor: '#2E5D49',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/contact'
    },
    {
      icon: FaBookOpen,
      title: 'Hope Resource Hub',
      desc: 'Guides, tools and resources for everyday resilience.',
      color: 'text-burgundy',
      bgColor: '#6E2839',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
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
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="overflow-hidden flex flex-col h-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 !p-0">

                <div className="relative w-full">
                  <img
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                    className="w-full h-50 object-cover block"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/FEF9F2/2E5D49?text=${encodeURIComponent(program.title)}`;
                    }}
                  />

                  {/* Icon at Bottom Left */}
                  <div className="absolute bottom-0 left-2 z-10">
                    <IconCircle
                      bgColor={program.bgColor}
                      textColor="#FFFFFF"
                      className="w-12 h-12 shadow-md"
                    >
                      <IconComponent size={20} />
                    </IconCircle>
                  </div>
                </div>

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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsList;