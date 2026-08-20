import Button from '../Button/Button';
import IconLeafDecor from '../icons/IconLeafDecor';
import styles from './Hero.module.css';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80';

const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Homepage hero">
      <div className={styles.grid}>
        <div className={styles.content}>
          <IconLeafDecor className={styles.leaf} color="#2E5D49" opacity={0.12} />
          <div className={styles.copy}>
            <h1 className={styles.heading}>
              Building Stronger Minds.
              <br />
              Creating <span className={styles.accent}>Hopeful</span> Futures.
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
        </div>

        <div className={styles.visual}>
          <img
            src={HERO_IMAGE}
            alt="Woman smiling with eyes closed in warm sunlight"
            className={styles.image}
            width={1200}
            height={900}
          />
          <p className={styles.script}>
            <span>Strength Within.</span>
            <span className={styles.scriptLine}>Hope Ahead.</span>
          </p>
        </div>
      </div>

      <div className={styles.waves} aria-hidden="true">
        <svg
          className={styles.waveBack}
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(254, 249, 242, 0.5)"
            d="M0,52 C260,90 520,12 780,34 C1040,56 1240,10 1440,30 L1440,90 L0,90 Z"
          />
        </svg>
        <svg
          className={styles.waveFront}
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
        >
          <path
            fill="#FEF9F2"
            d="M0,38 C280,72 560,6 840,26 C1120,46 1280,12 1440,24 L1440,72 L0,72 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
