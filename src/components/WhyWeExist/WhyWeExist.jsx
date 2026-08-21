import Button from '../Button/Button';
import styles from './WhyWeExist.module.css';

const WhyWeExist = () => {
  return (
    <section className={styles.section} aria-labelledby="why-we-exist-heading">
      {/* Soft extra waves that sit on the photo — not a solid cream band */}
      <div className={styles.merge} aria-hidden="true">
        <svg
          className={styles.mergeSvg}
          viewBox="0 0 1440 88"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.28)"
            d="M0 42C210 8 360 76 540 54C760 28 920 6 1120 32C1260 50 1360 72 1440 48V62C1260 74 1120 40 920 22C760 40 540 70 360 88C210 20 80 56 0 56V42Z"
          />
          <path
            d="M0 42C210 8 360 76 540 54C760 28 920 6 1120 32C1260 50 1360 72 1440 48"
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className={styles.media}>
        <img
          src="/group.jpeg"
          alt="People sitting together in a supportive group conversation"
          className={styles.image}
          width={960}
          height={520}
        />
        <div className={styles.mediaFade} aria-hidden="true" />
        <svg
          className={styles.curveBlend}
          viewBox="0 0 280 520"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="whyExistBlend" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FEF9F2" stopOpacity="0" />
              <stop offset="28%" stopColor="#FEF9F2" stopOpacity="0.35" />
              <stop offset="62%" stopColor="#FEF9F2" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#FEF9F2" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#whyExistBlend)"
            d="M96 0C58 70 128 130 72 200C18 268 118 330 64 400C36 440 78 480 52 520H280V0H96Z"
          />
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.labelRow}>
          <span className={styles.tick} aria-hidden="true" />
          <span className={styles.label}>Why We Exist</span>
        </div>
        <h2 id="why-we-exist-heading" className={styles.heading}>
          Because No One Should Face
          <br />
          Life&rsquo;s Challenges
          <br />
          Alone.
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
    </section>
  );
};

export default WhyWeExist;
