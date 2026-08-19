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
      desc: 'Educational programs focused on emotional intelligence, confidence, stress management, and positive mindset development.',
      color: 'text-burgundy',
      bgColor: '#6E2839',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/academy'
    },
    {
      icon: FaUsers,
      title: 'Youth Strong Program',
      desc: 'Mentorship, leadership development, mental wellness education, and career confidence for young people.',
      color: 'text-forest',
      bgColor: '#2E5D49',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/youth-strong'
    },
    {
      icon: FaHands,
      title: 'Community Healing Circles',
      desc: 'Safe spaces where people can connect, share experiences, receive encouragement, and build supportive relationships.',
      color: 'text-gold',
      bgColor: '#C79949',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/healing-circles'
    },
    {
      icon: FaBriefcase,
      title: 'Workplace Wellness Initiative',
      desc: 'Helping organizations promote employee wellbeing, reduce stress, and build healthier, more resilient workplace cultures.',
      color: 'text-forest',
      bgColor: '#2E5D49',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/workplace'
    },
    {
      icon: FaBookOpen,
      title: 'Hope Resource Hub',
      desc: 'A digital collection of wellness guides, educational materials, tools, and community resources available anytime.',
      color: 'text-burgundy',
      bgColor: '#6E2839',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
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
              <Card key={index} className="overflow-hidden flex flex-col h-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-0">

                {/* Image & Icon Wrapper - IMPORTANT CHANGE YAHAN HAI */}
                <div className="relative w-full">
                  <img
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                    className="w-full h-56 object-cover block"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/FEF9F2/2E5D49?text=${encodeURIComponent(program.title)}`;
                    }}
                  />

                  {/* Icon Overlay - Ab yeh 'absolute' hai aur image ke upar hai */}
                  <div className="absolute -bottom-6 left-3 z-10">
                    <IconCircle
                      bgColor={program.bgColor}
                      textColor="#FFFFFF"
                      className="w-14 h-14 shadow-md"
                    >
                      <IconComponent size={24} />
                    </IconCircle>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow pt-8">
                
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