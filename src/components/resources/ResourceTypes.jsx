import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import {
  FaFileAlt,
  FaBookOpen,
  FaToolbox,
  FaPlayCircle,
  FaUserFriends,
} from 'react-icons/fa';

const ResourceTypes = () => {
  const types = [
    { icon: FaFileAlt, color: '#6E2839', title: 'Articles', desc: 'Informative reads on mental health, resilience, and personal growth.', link: 'Explore Articles →' },
    { icon: FaBookOpen, color: '#2E5D49', title: 'Guides & Toolkits', desc: 'Practical guides and toolkits to help you navigate life\u2019s challenges.', link: 'View Guides →' },
    { icon: FaToolbox, color: '#C79949', title: 'Tools & Worksheets', desc: 'Self-help tools and worksheets to build skills and support well-being.', link: 'Access Tools →' },
    { icon: FaPlayCircle, color: '#2E5D49', title: 'Videos & Webinars', desc: 'Watch and learn from experts and real stories of hope.', link: 'Watch Now →' },
    { icon: FaUserFriends, color: '#6E2839', title: 'Support Resources', desc: 'Find help, hotlines, and local services when you need support.', link: 'Find Support →' },
  ];

  return (
    <section className="section section--band">
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 text-center">
          <Eyebrow>Browse by Resource Type</Eyebrow>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {types.map((type, index) => (
            <div key={index} className="text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3.5"
                style={{ backgroundColor: type.color }}
              >
                <type.icon className="text-white text-xl" />
              </div>
              <h4 className="text-sm mb-1.5">{type.title}</h4>
              <p className="text-xs text-ink-soft mb-2">{type.desc}</p>
              <span className="text-xs font-bold text-burgundy">{type.link}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResourceTypes;
