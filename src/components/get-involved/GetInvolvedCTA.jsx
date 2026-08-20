import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import {
  FaHandHoldingHeart,
  FaUserFriends,
  FaBullhorn,
  FaHandshake,
  FaGift,
  FaTree,
} from 'react-icons/fa';

const GetInvolvedCTA = () => {
  const links = [
    { icon: FaHandHoldingHeart, color: '#2E5D49', title: 'Volunteer', sub: 'Give your time', to: '/contact' },
    { icon: FaUserFriends, color: '#6E2839', title: 'Become a Mentor', sub: '', to: '/contact' },
    { icon: FaBullhorn, color: '#C79949', title: 'Be a Community Ambassador', sub: '', to: '/contact' },
    { icon: FaHandshake, color: '#2E5D49', title: 'Partner With Us', sub: '', to: '/contact' },
    { icon: FaGift, color: '#6E2839', title: 'Donate Today', sub: '', to: '/get-involved' },
  ];

  return (
    <>
      <section className="section">
        <Container>
          <div className="text-center mb-10">
            <h2 className="mb-1">Ready to make a difference?</h2>
            <p className="mb-0">Choose the way that&rsquo;s right for you and start making an impact today.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="card text-center hover:shadow-lg transition-shadow duration-300 no-underline"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2.5"
                  style={{ backgroundColor: link.color }}
                >
                  <link.icon className="text-white text-base" />
                </div>
                <p className="text-xs font-semibold text-ink mb-0">{link.title}</p>
                {link.sub && <p className="text-[10px] text-ink-soft mb-0">{link.sub}</p>}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--burgundy py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C79949] flex items-center justify-center text-white shadow-md flex-shrink-0">
                <FaTree size={20} />
              </div>
              <div>
                <h4 className="text-white mb-1">Every action counts. Every person matters.</h4>
              </div>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-white/30"></div>

            <div>
              <p className="mb-0 text-white/90">Together, we can build stronger minds and stronger communities.</p>
            </div>

            <Link
              to="/get-involved"
              className="rounded-xl bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#6E2839] transition-colors px-5 py-2 inline-block font-semibold"
            >
              <span className="flex items-center gap-1 whitespace-nowrap">
                Donate Now
                <span>→</span>
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GetInvolvedCTA;
