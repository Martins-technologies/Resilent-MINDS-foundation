import Button from '../Button/Button';
import IconLeafDecor from '../icons/IconLeafDecor';
import styles from './SupportBanner.module.css';

const SUPPORT_IMAGE = '/bottom.webp';

const SupportBanner = () => {
  return (
    <section className={styles.section} aria-labelledby="support-heading">
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            fill="#6E2839"
            d="M0,80 C240,10 480,70 720,30 C960,-10 1200,50 1440,16 V80 H0 Z"
          />
        </svg>
      </div>

      <div className={styles.banner}>
        <IconLeafDecor className={styles.leaf} color="#FEF9F2" opacity={0.1} />
        <div className={styles.copy}>
          <h2 id="support-heading" className={styles.heading}>
            Your Support Creates Hope
          </h2>
          <p className={styles.body}>
            Help us reach more people, expand programs and deliver resources
            where they&rsquo;re needed most.
          </p>
          <Button to="/get-involved" variant="gold" size="md" heart arrow>
            Give Hope Today
          </Button>
        </div>
        <div
          className={styles.media}
          style={{ backgroundImage: `url(${SUPPORT_IMAGE})` }}
          role="img"
          aria-label="Hands holding a seedling, a symbol of hope and growth"
        />
      </div>
    </section>
  );
};

export default SupportBanner;
