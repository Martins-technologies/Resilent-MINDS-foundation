import IconLeafDecor from '../icons/IconLeafDecor';
import styles from './StoriesGrid.module.css';

const StoriesGrid = () => {
  return (
    <section className={styles.section} aria-labelledby="stories-heading">
      <div className="rm-container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>Real Stories</span>
          <h2 id="stories-heading" className={styles.title}>
            Real Stories.
            <span className={styles.titleAccent}>Real Change.</span>
          </h2>
          <span className={styles.underline} aria-hidden="true" />
        </header>

        <div className={styles.collage} role="img" aria-label="Stories of impact collage">
          {/* Top-left — Sarah */}
          <article className={`${styles.slot} ${styles.slotSarah}`}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <p className={styles.quote}>
              After participating in our resilience workshop, Sarah discovered
              new coping strategies and rebuilt her confidence.
            </p>
            <p className={styles.attribution}>&mdash; Sarah, Program Participant</p>
            <IconLeafDecor className={styles.leaf} color="#C9B89A" opacity={0.55} />
          </article>

          {/* Bottom-middle — Community */}
          <article className={`${styles.slot} ${styles.slotCommunity}`}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <p className={styles.quote}>
              The programs helped our community feel more connected and
              supported.
            </p>
            <p className={styles.attribution}>&mdash; Community Member</p>
          </article>

          {/* Top-right — Program Participant */}
          <article className={`${styles.slot} ${styles.slotParticipant}`}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <p className={styles.quote}>
              Resilient Minds Foundation gave me tools and encouragement when I
              needed them most.
            </p>
            <p className={styles.attribution}>&mdash; Program Participant</p>
          </article>

          {/* Mobile-only photos from existing assets */}
          <img
            className={`${styles.mobileImg} ${styles.mobileSofa}`}
            src="/impact/2.webp"
            alt="Two women sharing a supportive conversation"
          />
          <img
            className={`${styles.mobileImg} ${styles.mobileCircle}`}
            src="/impact/3.webp"
            alt="Community members gathered in a healing circle"
          />
          <img
            className={`${styles.mobileImg} ${styles.mobileOutdoor}`}
            src="/impact/4%20(1).webp"
            alt="Friends standing together outdoors"
          />
        </div>
      </div>
    </section>
  );
};

export default StoriesGrid;
