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

      {/* Double-layer cream wave — merges into Why We Exist */}
      <div className={styles.divider} aria-hidden="true">
        <svg
          className={styles.waveBack}
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(254,249,242,0.55)"
            d="M0 36C120 18 200 72 320 62C420 52 490 8 600 16C740 26 840 64 1020 52C1180 42 1300 28 1440 34V140H0Z"
          />
        </svg>
        <svg
          className={styles.waveFill}
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
        >
          <path
            fill="#FEF9F2"
            d="M0 52C120 34 200 88 320 78C420 68 490 24 600 32C740 42 840 80 1020 68C1180 58 1300 44 1440 50V140H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
