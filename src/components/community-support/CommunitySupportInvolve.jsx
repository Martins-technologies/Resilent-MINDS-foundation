import { Link } from 'react-router-dom';
import {
  COMMUNITY_DONATION_KINDS,
  COMMUNITY_SUPPORT_PATH,
  COMMUNITY_SUPPORT_SERVICES,
} from '../../data/communitySupportServices';
import styles from './CommunitySupportInvolve.module.css';

const PATHS = [
  {
    id: 'donate',
    title: 'Donate',
    body: 'Give food, prepared meals, baby supplies, furniture, or household essentials for these services.',
    to: '/get-involved/donation-collection',
    cta: 'Donate goods',
  },
  {
    id: 'volunteer',
    title: 'Volunteer',
    body: 'Help deliver meals, pack groceries and essentials, sort infant supplies, or move basic furniture to families.',
    to: '/contact-us',
    cta: 'Volunteer with us',
  },
  {
    id: 'partner-with-us',
    title: 'Partner With Us',
    body: 'Businesses, congregations, and community groups can supply these items or host a collection for families.',
    to: '/contact-us',
    cta: 'Partner with us',
  },
];

const CommunitySupportInvolve = ({ variant = 'paths' }) => {
  const donateOnly = variant === 'donate';

  return (
    <section
      className={styles.section}
      aria-labelledby="support-services-involve-heading"
      id={donateOnly ? 'food-family-donations' : undefined}
    >
      <div className="rm-container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Food, Essentials & Family Assistance</p>
          <h2 id="support-services-involve-heading" className={styles.heading}>
            {donateOnly
              ? 'Donations that support Community Support Services'
              : 'Support Community Support Services'}
          </h2>
          <p className={styles.sub}>
            {donateOnly
              ? 'Food, prepared meals, baby supplies, furniture, and household essentials go toward meal delivery, family groceries, infant care, and combined food and furniture support.'
              : 'These practical services are open to donors, volunteers, and partners. Choose the way you want to help.'}
          </p>
        </header>

        <ul className={styles.services}>
          {COMMUNITY_SUPPORT_SERVICES.map((service) => (
            <li key={service.id}>
              <Link to={`${COMMUNITY_SUPPORT_PATH}#${service.id}`} className={styles.serviceLink}>
                <strong>{service.title}</strong>
                <span>{service.summary}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.gifts}>
          <h3 className={styles.giftsTitle}>What you can give</h3>
          <ul className={styles.giftList}>
            {COMMUNITY_DONATION_KINDS.map((kind) => (
              <li key={kind.title} className={styles.gift}>
                <strong>{kind.title}</strong>
                <span>{kind.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {donateOnly ? (
          <div className={styles.actions}>
            <a className={styles.primary} href="#pickup-request">
              Request a donation pickup
            </a>
            <Link className={styles.secondary} to={COMMUNITY_SUPPORT_PATH}>
              Read about each service
            </Link>
          </div>
        ) : (
          <div className={styles.paths}>
            {PATHS.map((path) => (
              <article key={path.id} id={path.id} className={styles.path}>
                <h3>{path.title}</h3>
                <p>{path.body}</p>
                <Link to={path.to}>{path.cta}</Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CommunitySupportInvolve;
