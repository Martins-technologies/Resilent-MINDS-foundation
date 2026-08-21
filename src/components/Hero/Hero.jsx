import Button from '../Button/Button';
import IconLeafDecor from '../icons/IconLeafDecor';
import styles from './Hero.module.css';

const HERO_IMAGE = '/home%20banner.webp';

const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Homepage hero">

      {/* Full-bleed background image */}
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className={styles.bg}
        width={1600}
        height={700}
      />

      {/* Left-to-right gradient overlay — keeps text readable */}
      <div className={styles.overlay} />

      {/* Content layer */}
      <div className={styles.inner}>
        <IconLeafDecor className={styles.leaf} color="#2E5D49" opacity={0.14} />

        <div className={styles.copy}>
          <h1 className={styles.heading}>
            Building Minds Stronger.
            <br />
            Creating{' '}
            <span className={styles.phrase}>
              <span className={styles.accent}>Hopeful</span> Futures.
            </span>
          </h1>
          <p className={styles.body}>
            Every person has the ability to overcome challenges with the right
            support. We provide education, resources, and community connections
            that help individuals build emotional resilience and thrive.
          </p>
          <div className={styles.actions}>
            <Button to="/get-involved" variant="primary" size="lg" heart arrow>
              Donate Today
            </Button>
            <Button to="/contact" variant="outlineForest" size="lg" arrow>
              Get Support
            </Button>
          </div>
        </div>

        {/* Script text — bottom right over the photo */}
        <p className={styles.script}>
          <span>Strength Within.</span>
          <span className={styles.scriptLine}>Hope Ahead.</span>
        </p>
      </div>

      {/* Bottom wave divider */}
      <div className={styles.divider} aria-hidden="true">
        <svg
          className={styles.waveFill}
          viewBox="0 0 1440 88"
          preserveAspectRatio="none"
        >
          <path
            fill="#FEF9F2"
            d="M0 42C210 8 360 76 540 54C760 28 920 6 1120 32C1260 50 1360 72 1440 48V88H0Z"
          />
        </svg>
        <svg
          className={styles.waveAccent}
          viewBox="0 0 1440 88"
          preserveAspectRatio="none"
        >
          <path
            d="M0 54C150 22 280 70 430 48C560 30 640 16 760 28"
            fill="none"
            stroke="#D1D1D1"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
