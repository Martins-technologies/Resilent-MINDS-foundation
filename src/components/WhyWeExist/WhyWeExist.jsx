import Button from '../Button/Button';
import styles from './WhyWeExist.module.css';

const WhyWeExist = () => {
  return (
    <section className={styles.section} aria-labelledby="why-we-exist-heading">
      <div className={styles.media}>
        <img
          src="/group.jpeg"
          alt="Group of people standing together with arms around each other"
          className={styles.image}
          width={792}
          height={392}
        />
        {/* Blur-to-transparent gradient edge blending into content */}
        <div className={styles.blurGradient} aria-hidden="true" />
        <svg
          className={styles.edgeWave}
          viewBox="0 0 220 392"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#FEF9F2"
            d="M220 0H96C48 48 168 92 84 156C12 216 150 268 72 332C36 360 88 380 70 392H220V0Z"
          />
          <path
            d="M96 0C48 48 168 92 84 156C12 216 150 268 72 332C36 360 88 380 70 392"
            fill="none"
            stroke="rgba(209,209,209,0.9)"
            strokeWidth="1.75"
          />
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.labelRow}>
          <span className={styles.tick} aria-hidden="true" />
          <span className={styles.label}>Why We Exist</span>
        </div>
        <h2 id="why-we-exist-heading" className={styles.heading}>
          Because No One Should Face Life&rsquo;s
          <br />
          Challenges Alone.
        </h2>
        <p className={styles.body}>
          Life can bring stress, loss, trauma, isolation and uncertainty.
          Resilient Minds Foundation creates pathways of hope through mental
          wellness education, resilience-building programs and compassionate
          support.
        </p>
        <Button to="/about" variant="gold" size="sm" arrow className="!px-4 !py-2 !text-xs">
          Learn About Our Mission
        </Button>
      </div>
    </section>
  );
};

export default WhyWeExist;
