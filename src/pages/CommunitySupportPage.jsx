import { Link } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import {
  COMMUNITY_DONATION_KINDS,
  COMMUNITY_SUPPORT_INTRO,
  COMMUNITY_SUPPORT_SERVICES,
  COMMUNITY_SUPPORT_SUBTITLE,
  COMMUNITY_SUPPORT_TITLE,
  COMMUNITY_SUPPORT_WELLBEING,
} from '../data/communitySupportServices';
import styles from './CommunitySupportPage.module.css';

const CommunitySupportPage = () => {
  return (
    <article>
      <PageHero image="/whowehelp/hero.webp" ariaLabel="Community Support Services">
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span className={styles.crumbCurrent} aria-current="page">
            {COMMUNITY_SUPPORT_TITLE}
          </span>
        </nav>
        <span className="eyebrow block mb-5">{COMMUNITY_SUPPORT_SUBTITLE}</span>
        <h1 className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
          Community Support <span className="text-burgundy">Services</span>
        </h1>
        <p className="text-sm md:text-base text-ink-soft leading-relaxed">
          {COMMUNITY_SUPPORT_INTRO}
        </p>
      </PageHero>

      <section id="services" className={styles.services} aria-labelledby="services-heading">
        <div className="rm-container">
          <p className={styles.wellbeing}>{COMMUNITY_SUPPORT_WELLBEING}</p>
          <h2 id="services-heading" className={styles.sectionTitle}>
            Food, Essentials &amp; Family Assistance
          </h2>
          <p className={styles.includes}>Our Support Includes:</p>
          <div className={styles.list}>
            {COMMUNITY_SUPPORT_SERVICES.map((service) => (
              <article key={service.id} id={service.id} className={styles.service}>
                <img
                  src={service.image}
                  alt={service.alt}
                  className={
                    service.imageFit === 'contain'
                      ? `${styles.image} ${styles.imageContain}`
                      : styles.image
                  }
                />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.give} aria-labelledby="give-heading">
        <div className="rm-container">
          <h2 id="give-heading">Ways to support these services</h2>
          <p className={styles.giveLead}>
            People can donate food, baby supplies, prepared meals, furniture, and household essentials.
            Volunteers and partners help those gifts reach the families who need them.
          </p>
          <ul className={styles.kinds}>
            {COMMUNITY_DONATION_KINDS.map((kind) => (
              <li key={kind.title}>
                <strong>{kind.title}</strong>
                <span>{kind.detail}</span>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Link className={styles.primary} to="/get-involved/donation-collection">
              Donate goods
            </Link>
            <Link className={styles.secondary} to="/get-involved#volunteer">
              Volunteer
            </Link>
            <Link className={styles.secondary} to="/get-involved#partner-with-us">
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default CommunitySupportPage;
