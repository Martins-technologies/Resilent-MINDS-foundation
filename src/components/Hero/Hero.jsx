import { Link } from 'react-router-dom';
import IconArrowRight from '../icons/IconArrowRight';
import styles from './Hero.module.css';

const HERO_IMAGE = '/homepagebanner.webp';

const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Homepage hero">
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className={styles.bg}
      />

      <div className={styles.panel} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.heading}>
            <span className={styles.line}>Building Stronger Minds.</span>
            <span className={styles.line}>
              Creating <span className={styles.accent}>Hopeful</span> Futures.
            </span>
          </h1>
          <p className={styles.body}>
            Every person has the ability to overcome challenges with the right
            support. We provide education, resources, and community connections
            that help individuals build emotional resilience and thrive.
          </p>
          <div className={styles.actions}>
            <Link to="/contact-us" className={styles.supportBtn}>
              Get Support
              <IconArrowRight size={16} />
            </Link>
            <Link to="/get-involved/donation-collection" className={styles.donateBtn}>
              Donate
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
