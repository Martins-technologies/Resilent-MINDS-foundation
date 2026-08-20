import { Link } from 'react-router-dom';
import logoPlaceholder from '../../assets/logo-placeholder.svg';
import IconFacebook from '../icons/IconFacebook';
import IconInstagram from '../icons/IconInstagram';
import IconLinkedIn from '../icons/IconLinkedIn';
import IconYouTube from '../icons/IconYouTube';
import styles from './Footer.module.css';

const COLUMNS = [
  {
    title: 'Foundation',
    links: [
      { to: '/about', label: 'About Us' },
      { to: '/about', label: 'Our Mission' },
      { to: '/about', label: 'Why We Exist' },
      { to: '/impact', label: 'Our Impact' },
      { to: '/about', label: 'Transparency' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { to: '/programs', label: 'All Programs' },
      { to: '/programs', label: 'Youth Programs' },
      { to: '/programs', label: 'Community Programs' },
      { to: '/programs', label: 'Workplace Wellness' },
      { to: '/resources', label: 'Hope Resource Hub' },
    ],
  },
  {
    title: 'Support',
    links: [
      { to: '/get-involved', label: 'Volunteer' },
      { to: '/get-involved', label: 'Become a Mentor' },
      { to: '/get-involved', label: 'Community Ambassador' },
      { to: '/get-involved', label: 'Partner With Us' },
      { to: '/get-involved', label: 'Sponsor a Program' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { to: '/contact', label: 'Contact Us' },
      { to: '/contact', label: 'Get Support' },
      { to: '/resources', label: 'Resources' },
      { to: '/get-involved', label: 'Donate' },
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
    <footer className={styles.footer}>
      <div className={`rm-container ${styles.top}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logoLink}>
            <img
              src={logoPlaceholder}
              alt="Resilient Minds Foundation"
              className={styles.logo}
              width={180}
              height={80}
            />
          </Link>
          <div className={styles.social}>
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label={item.label}
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
              placeholder="Your email"
              required
              className={styles.input}
            />
            <button type="submit" className={styles.subscribe}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className={`rm-container ${styles.bottom}`}>
        <p className={styles.copy}>
          &copy; 2026 Resilient Minds Foundation. All rights reserved.
        </p>
        <p className={styles.tagline}>
          <span>Stronger Minds</span>
          <span className={styles.bar}> | </span>
          <span className={styles.gold}>Brighter Futures</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
