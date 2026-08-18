import Button from '../ui/Button';
import Container from '../ui/Container';
import {
  FaHandHoldingHeart,
  FaUserFriends,
  FaBullhorn,
  FaHandshake,
  FaGift,
} from 'react-icons/fa';

const GetInvolvedCTA = () => {
  const links = [
    { icon: FaHandHoldingHeart, color: '#2E5D49', title: 'Volunteer', sub: 'Give your time' },
    { icon: FaUserFriends, color: '#6E2839', title: 'Become a Mentor', sub: '' },
    { icon: FaBullhorn, color: '#C79949', title: 'Be a Community Ambassador', sub: '' },
    { icon: FaHandshake, color: '#2E5D49', title: 'Partner With Us', sub: '' },
    { icon: FaGift, color: '#6E2839', title: 'Donate Today', sub: '' },
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
              <div key={index} className="card text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2.5"
                  style={{ backgroundColor: link.color }}
                >
                  <link.icon className="text-white text-base" />
                </div>
                <p className="text-xs font-semibold text-ink mb-0">{link.title}</p>
                {link.sub && <p className="text-[10px] text-ink-soft mb-0">{link.sub}</p>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--burgundy py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div>
              <h3 className="text-white mb-1">Every action counts. Every person matters.</h3>
              <p className="mb-0">Together, we can build stronger minds and stronger communities.</p>
            </div>
            <Button variant="outlineLight" to="/contact">
              Donate Now →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GetInvolvedCTA;
