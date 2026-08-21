import Button from '../Button/Button';
import styles from './WhyWeExist.module.css';

const WhyWeExist = () => {
  return (
    <section className={styles.section} aria-labelledby="why-we-exist-heading">
      {/* Same wave as hero — clips this block so the two sections merge */}
      <svg className={styles.clipSvg} aria-hidden="true" width="0" height="0">
        <defs>
          <clipPath id="whyWeExistWave" clipPathUnits="objectBoundingBox">
            <path d="M0 0.147C0.083 0.096 0.139 0.249 0.222 0.220C0.292 0.192 0.340 0.068 0.417 0.090C0.514 0.119 0.583 0.226 0.708 0.192C0.819 0.164 0.903 0.124 1 0.141V1H0Z" />
          </clipPath>
        </defs>
      </svg>

      <div className={styles.inner}>
        {/* ── Left: image ── */}
        <div className={styles.media}>
          <img
            src="/friendgroup.webp"
            alt="A group of friends embracing, showing that no one faces life alone"
            className={styles.image}
          />
          {/* Soft right-edge blend into cream */}
          <div className={styles.fade} aria-hidden="true" />
        </div>

        {/* ── Right: content ── */}
        <div className={styles.content}>
          <div className={styles.labelRow}>
            <span className={styles.tick} aria-hidden="true" />
            <span className={styles.label}>Why We Exist</span>
          </div>

          <h2 id="why-we-exist-heading" className={styles.heading}>
            Because No One Should Face Life&rsquo;s Challenges Alone.
          </h2>

          <p className={styles.body}>
            Life can bring stress, loss, trauma, isolation and uncertainty.
            Resilient Minds Foundation creates pathways of hope through mental
            wellness education, resilience-building programs and compassionate
            support.
          </p>

          <Button to="/about" variant="gold" arrow className={styles.cta}>
            Learn About Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
