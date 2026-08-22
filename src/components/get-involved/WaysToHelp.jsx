import Container from '../ui/Container';
import { Link } from 'react-router-dom';
import {
  FaChalkboardTeacher,
  FaHandHoldingHeart,
  FaUsers,
} from 'react-icons/fa';

const WaysToHelp = () => {
  const ways = [
    {
      icon: '/get%20involved/volunterr.svg',
      color: '#2E5D49',
      title: 'Volunteer',
      desc: 'Give your time and talents to support our programs, events, and initiatives.',
      points: ['Program support', 'Event assistance', 'Administration help', 'Community outreach'],
      link: 'Volunteer With Us →',
    },
    {
      icon: '/get%20involved/becomeamentor.svg',
      color: '#6E2839',
      title: 'Become a Mentor',
      desc: 'Inspire and guide individuals on their journey to resilience and personal growth.',
      points: ['Youth mentoring', 'Career guidance', 'Life skills coaching', 'Peer support'],
      link: 'Learn More →',
    },
    {
      icon: '/get%20involved/community.svg',
      color: '#C79949',
      title: 'Community Ambassador',
      desc: 'Help raise awareness and connect us with individuals, organizations, and resources.',
      points: ['Spread awareness', 'Share resources', 'Build partnerships', 'Host conversations'],
      link: 'Become an Ambassador →',
    },
    {
      icon: '/get%20involved/partner.svg',
      color: '#2E5D49',
      title: 'Partner With Us',
      desc: 'Collaborate with us to expand programs, share resources, and strengthen our communities.',
      points: ['Program partnerships', 'Corporate partnerships', 'School partnerships', 'Community collaborations'],
      link: 'Partner With Us →',
    },
    {
      icon: '/get%20involved/sponsor.svg',
      color: '#6E2839',
      title: 'Sponsor a Program',
      desc: 'Your sponsorship helps bring hope and healing to more individuals and families.',
      points: ['Program sponsorships', 'Event sponsorships', 'In-kind support', 'Scholarship support'],
      link: 'Explore Sponsorships →',
    },
  ];

  return (
    <section id="ways-to-help" className="section">
      <Container>
        <div className="max-w-[680px] mx-auto mb-10 text-center">
          <h2 className="mb-3">There are many meaningful ways to get involved.</h2>
          <p className="mb-0">
            Whether you give your time, share your expertise, or make a donation, you help us create lasting impact in the lives of those who need it most.
          </p>
        </div>

        <div
          className="w-full rounded-2xl mb-10 overflow-hidden px-5 py-7 sm:pl-[29%] sm:pr-8"
          style={{
            backgroundImage: "url('/get%20involved/banner.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '220px',
          }}
        >
          <h3 className="mb-5 text-center text-xl font-bold leading-tight text-white sm:text-left md:text-2xl">
            Your involvement creates real change.
            <br />
            Stronger minds. Brighter futures.
          </h3>

          <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-0">
            {[
              { icon: FaUsers, number: '1,000+', label: 'People Reached' },
              { icon: FaChalkboardTeacher, number: '100+', label: 'Workshops Delivered' },
              { icon: FaHandHoldingHeart, number: '50+', label: 'Community Volunteers' },
              { icon: FaUsers, number: 'Countless', label: 'Lives Encouraged' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center px-2 text-center ${
                  index > 0 ? 'sm:border-l sm:border-white/30' : ''
                }`}
              >
                <stat.icon className="mb-1 text-2xl text-[#C79949]" aria-hidden="true" />
                <strong className="font-heading text-xl text-[#C79949] md:text-2xl">
                  {stat.number}
                </strong>
                <span className="mt-1 text-xs leading-snug text-white">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card bg-[#FEF9F2] involved-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 relative">
          {ways.map((way, index) => (
            <div key={index} className="relative px-4 py-6 lg:py-8 flex flex-col h-full">
              
              {index !== 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-80 bg-[#C79949] opacity-20"></div>
              )}

              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3.5"
                style={{ backgroundColor: way.color }}
              >
                <img src={way.icon} alt="" aria-hidden="true" className="w-7 h-7 object-contain" />
              </div>
              <h4 className="mb-2 text-forest">{way.title}</h4>
              <p className="text-sm mb-3">{way.desc}</p>
              <ul className="space-y-1.5 mb-3 flex-grow">
                {way.points.map((point, i) => (
                  <li key={i} className="text-xs text-ink-soft flex items-start gap-2">
                    <span className="text-gold mt-0.5">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact" 
                className="text-xs font-bold text-burgundy hover:opacity-70 transition-opacity inline-block mt-auto"
              >
                {way.link}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WaysToHelp;