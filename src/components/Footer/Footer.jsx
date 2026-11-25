// import { Link } from 'react-router-dom';
// import { BRAND_LOGO_ALT, BRAND_LOGO_SRC } from '../../assets/brandLogo';
// import IconFacebook from '../icons/IconFacebook';
// import IconInstagram from '../icons/IconInstagram';
// import IconLinkedIn from '../icons/IconLinkedIn';
// import IconYouTube from '../icons/IconYouTube';
// import IconLeafDecor from '../icons/IconLeafDecor';
// import styles from './Footer.module.css';

// const COLUMNS = [
//   {
//     title: 'Foundation',
//     links: [
//       { to: '/about-us', label: 'About Us' },
//       { to: '/about-us', label: 'Our Mission' },
//       { to: '/about-us', label: 'Why We Exist' },
//       { to: '/impact', label: 'Our Impact' },
//       { to: '/about-us', label: 'Transparency' },
//     ],
//   },
//   {
//     title: 'Our Programs',
//     links: [
//       { to: '/our-programs#mental-wellness', label: 'Mental Wellness Support' },
//       { to: '/our-programs#family-support', label: 'Family Support' },
//       { to: '/community-support', label: 'Community Support Services' },
//       { to: '/our-programs#youth-programs', label: 'Youth Programs' },
//       { to: '/get-involved', label: 'Volunteer / Get Involved' },
//     ],
//   },
//   {
//     title: 'Get Involved',
//     links: [
//       { to: '/get-involved#volunteer', label: 'Volunteer' },
//       { to: '/get-involved', label: 'Become a Mentor' },
//       { to: '/get-involved', label: 'Community Ambassador' },
//       { to: '/get-involved#partner-with-us', label: 'Partner With Us' },
//       { to: '/get-involved', label: 'Sponsor a Program' },
//       { to: '/get-involved/donation-collection', label: 'Donation Collection & Delivery' },
//     ],
//   },
//   {
//     title: 'Support',
//     links: [
//       { to: '/contact-us', label: 'Find Support' },
//       { to: '/resources', label: 'Resources' },
//       { to: '/contact-us', label: 'Contact Us' },
//     ],
//   },
// ];

// const SOCIAL = [
//   { label: 'Facebook', Icon: IconFacebook, href: 'https://www.facebook.com/' },
//   { label: 'Instagram', Icon: IconInstagram, href: 'https://www.instagram.com/' },
//   { label: 'LinkedIn', Icon: IconLinkedIn, href: 'https://www.linkedin.com/' },
//   { label: 'YouTube', Icon: IconYouTube, href: 'https://www.youtube.com/' },
// ];

// const Footer = () => {
//   const onSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <footer className={styles.footer} aria-label="Site footer">
//       <IconLeafDecor className={styles.leaf} color="#C79949" opacity={0.16} />
//       <div className={`rm-container ${styles.top}`}>
//         <div className={styles.brand}>
//           <Link to="/" className={styles.logoLink} aria-label="Resilient Minds Foundation home">
//             <img
//               src={BRAND_LOGO_SRC}
//               alt={BRAND_LOGO_ALT}
//               className={styles.logo}
//               width={220}
//               height={88}
//             />
//           </Link>
//           <p className={styles.brandBody}>
//             Empowering individuals and communities with the support, education, and resources to build resilience and create hopeful futures.
//           </p>
//           <div className={styles.social}>
//             {SOCIAL.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.socialBtn}
//                 aria-label={`Visit Resilient Minds on ${item.label}`}
//               >
//                 <item.Icon size={16} color="#FFFFFF" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {COLUMNS.map((column) => (
//           <div key={column.title}>
//             <h3 className={styles.colTitle}>{column.title}</h3>
//             <ul className={styles.list}>
//               {column.links.map((link) => (
//                 <li key={link.label}>
//                   <Link to={link.to} className={styles.link}>
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         <div className={styles.newsletter}>
//           <h3 className={styles.newsTitle}>Stay Connected</h3>
//           <p className={styles.newsBody}>
//             Get updates on programs, resources, and ways to help.
//           </p>
//           <form className={styles.form} onSubmit={onSubmit} aria-label="Newsletter signup">
//             <label htmlFor="footer-email" className={styles.srOnly}>
//               Email address
//             </label>
//             <input
//               id="footer-email"
//               type="email"
//               name="email"
//               autoComplete="email"
//               placeholder="Your email address"
//               required
//               className={styles.input}
//             />
//             <Link to="/" className={styles.subscribe} aria-label="Go to home page">
//               <span aria-hidden="true">→</span>
//             </Link>
//           </form>
//         </div>
//       </div>

//       <div className={`rm-container ${styles.bottom}`}>
//         <p className={styles.copy}>
//           &copy; 2026 Resilient Minds Foundation Charity. All rights reserved.
//         </p>
//         <p className={styles.tagline}>
//           <span>Stronger Minds. Brighter Futures.</span>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



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
      { to: '/our-programs#mental-wellness', label: 'Mental Wellness Support' },
      { to: '/our-programs#family-support', label: 'Family Support' },
      { to: '/community-support', label: 'Community Support Services' },
      { to: '/our-programs#youth-programs', label: 'Youth Programs' },
      { to: '/get-involved', label: 'Volunteer / Get Involved' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { to: '/get-involved#volunteer', label: 'Volunteer' },
      { to: '/get-involved', label: 'Become a Mentor' },
      { to: '/get-involved', label: 'Community Ambassador' },
      { to: '/get-involved#partner-with-us', label: 'Partner With Us' },
      { to: '/get-involved', label: 'Sponsor a Program' },
      { to: '/get-involved/donation-collection', label: 'Donation Collection & Delivery' },
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

const LOCATIONS = [
  {
    city: 'Calgary, Alberta',
    address: '330 5 Ave SW, Calgary, AB T2P 0L4',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=330+5+Ave+SW+Calgary+AB+T2P+0L4',
  },
  {
    city: 'Regina, Saskatchewan',
    address: '1835 Albert St, Regina, SK S4P 2S9',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=1835+Albert+St+Regina+SK+S4P+2S9',
  },
  {
  city: 'Moncton, New Brunswick',
  address: '331 Elmwood Dr, Moncton, NB E1A 1X6',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=331+Elmwood+Dr+Moncton+NB+E1A+1X6',
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

        {/* Brand */}
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
            Empowering individuals and communities with the support, education,
            and resources to build resilience and create hopeful futures.
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

        {/* Navigation columns */}
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

        {/* Our Locations */}
        <div className={styles.locations}>
          <h3 className={styles.colTitle}>Our Locations</h3>

          <div className={styles.locationList}>
            {LOCATIONS.map((location) => (
              <div className={styles.location} key={location.city}>
                <div className={styles.locationHeading}>
                  <svg
                    className={styles.locationIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 10C20 15 12 22 12 22S4 15 4 10a8 8 0 1 1 16 0Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>

                  <h4>{location.city}</h4>
                </div>

                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.locationAddress}
                  aria-label={`View ${location.city} address on Google Maps`}
                >
                  {location.address}
                  <span className={styles.mapLabel}>Get directions ↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h3 className={styles.newsTitle}>Stay Connected</h3>
          <p className={styles.newsBody}>
            Get updates on programs, resources, and ways to help.
          </p>

          <form
            className={styles.form}
            onSubmit={onSubmit}
            aria-label="Newsletter signup"
          >
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

            <button
              type="submit"
              className={styles.subscribe}
              aria-label="Subscribe to newsletter"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
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

