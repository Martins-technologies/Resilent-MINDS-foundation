import styles from './WhyWeExist.module.css';

const WhyWeExist = () => {
  return (
    <section className={styles.section} aria-labelledby="why-we-exist-heading">
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
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
