import { Link } from 'react-router-dom';
import { BRAND_LOGO_ALT, BRAND_LOGO_SRC } from '../../assets/brandLogo';
import IconFacebook from '../icons/IconFacebook';
import IconInstagram from '../icons/IconInstagram';
import IconLinkedIn from '../icons/IconLinkedIn';
import IconYouTube from '../icons/IconYouTube';
import IconLeafDecor from '../icons/IconLeafDecor';
import styles from './Footer.module.css';

const COLUMNS = [
  {
    title: 'Foundation',
    links: [
      { to: '/about-us', label: 'About Us' },
      { to: '/about-us', label: 'Our Mission' },
      { to: '/about-us', label: 'Why We Exist' },
      { to: '/impact', label: 'Our Impact' },
      { to: '/about-us', label: 'Transparency' },
    ],
  },
  {
    title: 'Our Programs',
    links: [
      { to: '/our-programs', label: 'All Programs' },
      { to: '/our-programs', label: 'Youth Programs' },
      { to: '/our-programs', label: 'Community Programs' },
      { to: '/our-programs', label: 'Workplace Wellness' },
      { to: '/resources', label: 'Hope Resource Hub' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { to: '/get-involved', label: 'Volunteer' },
      { to: '/get-involved', label: 'Become a Mentor' },
      { to: '/get-involved', label: 'Community Ambassador' },
      { to: '/get-involved', label: 'Partner With Us' },
      { to: '/get-involved', label: 'Sponsor a Program' },
    ],
  },
  {
    title: 'Support',
    links: [
      { to: '/contact-us', label: 'Find Support' },
      { to: '/resources', label: 'Resources' },
      { to: '/contact-us', label: 'Contact Us' },
    ],
  },
];

const SOCIAL = [
  { label: 'Facebook', Icon: IconFacebook, href: 'https://www.facebook.com/' },
  { label: 'Instagram', Icon: IconInstagram, href: 'https://www.instagram.com/' },
  { label: 'LinkedIn', Icon: IconLinkedIn, href: 'https://www.linkedin.com/' },
  { label: 'YouTube', Icon: IconYouTube, href: 'https://www.youtube.com/' },
];

const Footer = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <IconLeafDecor className={styles.leaf} color="#C79949" opacity={0.16} />
      <div className={`rm-container ${styles.top}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logoLink} aria-label="Resilient Minds Foundation home">
            <img
              src={BRAND_LOGO_SRC}
              alt={BRAND_LOGO_ALT}
              className={styles.logo}
              width={220}
              height={88}
            />
          </Link>
          <p className={styles.brandBody}>
            Empowering individuals and communities with the support, education, and resources to build resilience and create hopeful futures.
          </p>
          <div className={styles.social}>
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label={`Visit Resilient Minds on ${item.label}`}
              >
                <item.Icon size={16} color="#FFFFFF" />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h3 className={styles.colTitle}>{column.title}</h3>
            <ul className={styles.list}>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.newsletter}>
          <h3 className={styles.newsTitle}>Stay Connected</h3>
          <p className={styles.newsBody}>
            Get updates on programs, resources, and ways to help.
          </p>
          <form className={styles.form} onSubmit={onSubmit} aria-label="Newsletter signup">
            <label htmlFor="footer-email" className={styles.srOnly}>
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your email address"
              required
              className={styles.input}
            />
            <Link to="/" className={styles.subscribe} aria-label="Go to home page">
              <span aria-hidden="true">→</span>
            </Link>
          </form>
        </div>
      </div>

      <div className={`rm-container ${styles.bottom}`}>
        <p className={styles.copy}>
          &copy; 2026 Resilient Minds Foundation Charity. All rights reserved.
        </p>
        <p className={styles.tagline}>
          <span>Stronger Minds. Brighter Futures.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
