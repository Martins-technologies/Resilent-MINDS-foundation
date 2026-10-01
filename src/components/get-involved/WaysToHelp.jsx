import Container from '../ui/Container';
import { Link } from 'react-router-dom';
import {
  FaChalkboardTeacher,
  FaHandHoldingHeart,
  FaUsers,
} from 'react-icons/fa';
import { Users } from 'lucide-react';

const WaysToHelp = () => {
  const ways = [
    {
      icon: '/get%20involved/volunterr.svg',
      color: '#2E5D49',
      title: 'Volunteer',
      desc: 'Give your time to programs, events, and community support — including meal delivery, food packing, and furniture moves.',
      points: ['Meal delivery support', 'Food and essentials packing', 'Baby supply sorting', 'Furniture and household help'],
      link: 'Volunteer With Us →',
      to: '/contact-us',
    },
    {
      icon: '/get%20involved/becomeamentor.svg',
      color: '#6E2839',
      title: 'Become a Mentor',
      desc: 'Inspire and guide individuals on their journey to resilience and personal growth.',
      points: ['Youth mentoring', 'Career guidance', 'Life skills coaching', 'Peer support'],
      link: 'Learn More →',
      to: '/contact-us',
    },
    {
      icon: '/get%20involved/community.svg',
      iconComponent: Users,
      color: '#2E5D49',
      title: 'Community Ambassador',
      desc: 'Help raise awareness and connect us with individuals, organizations, and resources.',
      points: ['Spread awareness', 'Share resources', 'Build partnerships', 'Host conversations'],
      link: 'Become an Ambassador →',
      to: '/contact-us',
    },
    {
      icon: '/get%20involved/partner.svg',
      color: '#2E5D49',
      title: 'Partner With Us',
      desc: 'Collaborate with us on programs and on food, meals, baby supplies, furniture, and household essentials.',
      points: ['Food and meal partners', 'Baby supply drives', 'Furniture donations', 'Community collaborations'],
      link: 'Partner With Us →',
      to: '/contact-us',
    },
    {
      icon: '/get%20involved/sponsor.svg',
      color: '#6E2839',
      title: 'Sponsor a Program',
      desc: 'Your sponsorship helps bring hope and healing to more individuals and families.',
      points: ['Program sponsorships', 'Event sponsorships', 'In-kind support', 'Scholarship support'],
      link: 'Explore Sponsorships →',
      to: '/contact-us',
    },
    {
      icon: '/get%20involved/donate.svg',
      color: '#2E5D49',
      title: 'Donation\u00A0Collection & Community Delivery',
      desc: 'Donate food, prepared meals, baby supplies, furniture, and household essentials for families in need.',
      points: ['Food and pantry items', 'Prepared meals', 'Baby supplies', 'Furniture and household essentials'],
      link: 'Learn More →',
      to: '/get-involved/donation-collection',
    },
  ];

  const actionLinks = [
    {
      icon: '/get%20involved/volunterr.svg',
      title: 'Volunteer',
      subtitle: 'Meals, food, and deliveries',
    },
    {
      icon: '/get%20involved/becomeamentor.svg',
      title: 'Become a Mentor',
    },
    {
      icon: '/get%20involved/community.svg',
      iconComponent: Users,
      color: '#2E5D49',
      title: 'Be a Community Ambassador',
    },
    {
      icon: '/get%20involved/partner.svg',
      title: 'Partner With Us',
      subtitle: 'Food, supplies, and furniture',
    },
    {
      icon: '/get%20involved/donate.svg',
      title: 'Donation Collection & Delivery',
      subtitle: 'Food, meals, baby supplies, furniture',
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

        <div className="card bg-[#FEF9F2] involved-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 relative">
          {ways.map((way, index) => (
            <div key={index} className="relative px-2.5 sm:px-3 lg:px-3.5 py-6 lg:py-8 flex flex-col h-full">
              
              {index !== 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-96 bg-[#C79949] opacity-20"></div>
              )}

              <div className="h-20 mb-4 flex items-center justify-start flex-shrink-0">
                {way.iconComponent ? (
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ backgroundColor: way.color }}
                  >
                    <way.iconComponent className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                ) : (
                  <img
                    src={way.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-20 w-20 object-contain"
                  />
                )}
              </div>

              <div className="min-h-[4.75rem] lg:min-h-[5.5rem] flex items-start mb-2">
                <h4 className="text-forest text-sm xl:text-base font-bold leading-tight mb-0">
                  {way.title}
                </h4>
              </div>

              <div className="min-h-[4.5rem] lg:min-h-[5.25rem] flex items-start mb-3">
                <p className="text-xs text-ink-soft leading-snug mb-0">
                  {way.desc}
                </p>
              </div>

              <div className="min-h-[7rem] lg:min-h-[8rem] flex flex-col justify-start mb-3">
                <ul className="space-y-1.5 mb-0">
                  {way.points.map((point, i) => (
                    <li key={i} className="text-xs text-ink-soft flex items-start gap-1.5">
                      <span className="text-gold mt-0.5 flex-shrink-0">&bull;</span>
                      <span className="leading-tight">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-2 min-h-[2rem] flex items-end">
                <Link
                  to={way.to}
                  className="text-[11px] xl:text-xs font-bold text-burgundy hover:opacity-70 transition-opacity inline-block leading-tight whitespace-nowrap"
                >
                  {way.link}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-10 min-h-[220px] w-full overflow-hidden rounded-2xl bg-[#14543F]">

          {/* Left Image */}
          <img
            src="/get%20involved/banner.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-y-0 left-0 h-full w-[24%] object-cover object-left"
          />

          {/* Content */}
          <div className="relative z-10 py-7 pl-[27%] pr-8">

            <h3 className="mb-5 text-center text-xl font-bold leading-tight !text-white sm:text-left md:text-2xl">
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
                  className={`flex flex-col items-center px-2 text-center ${index > 0 ? 'sm:border-l sm:border-white/30' : ''
                    }`}
                >
                  <stat.icon
                    className="mb-1 text-2xl text-[#C79949]"
                    aria-hidden="true"
                  />

                  <strong className="font-heading text-xl text-[#C79949] md:text-2xl">
                    {stat.number}
                  </strong>

                  <span className="mt-1 text-xs leading-snug text-white">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="mb-2">Ready to make a difference?</h2>
          <p className="mb-7">
            Choose the way that&rsquo;s right for you and start making an impact today.
          </p>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {actionLinks.map((action) => (
              <div
                key={action.title}
                className="flex min-h-28 items-center gap-3 rounded-xl border border-[#C79949]/25 bg-[#FEF9F2] px-4 py-4 text-left shadow-sm"
              >
                {action.iconComponent ? (
                  <span
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: action.color }}
                  >
                    <action.iconComponent className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                ) : (
                  <img
                    src={action.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-14 w-14 flex-shrink-0 object-contain"
                  />
                )}
                <span className="flex min-w-0 flex-col">
                  <strong className="text-sm leading-snug text-forest">{action.title}</strong>
                  {action.subtitle && (
                    <span className="mt-1 text-xs text-forest/80">{action.subtitle}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WaysToHelp;