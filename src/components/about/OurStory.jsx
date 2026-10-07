import IconHeart from '../icons/IconHeart';
import styles from './OurStory.module.css';

const OurStory = () => {
  return (
    <section className={styles.section} aria-labelledby="our-story-heading">
      <div className={styles.layout}>
        <figure className={styles.card}>
          <img
            src="/05_our_story_image_1.webp"
            alt="People gathered around a table, learning and supporting one another"
          />
        </figure>

        <div className={styles.copy}>
          <p className={styles.label}>Our Story</p>
          <h2 id="our-story-heading" className={styles.heading}>
            <span>Every journey has</span>
            <span>moments of struggle.</span>
            <span>But with the right support,</span>
            <span>people can rebuild, recover,</span>
            <span>and rise stronger.</span>
          </h2>
          <p className={styles.body}>
            Our foundation works to create pathways of hope by offering education, community programs, emotional wellness resources, and resilience-building initiatives.
          </p>
          <p className={styles.body}>
            We are committed to creating environments where people feel heard, supported, and empowered to move forward.
          </p>
          <div className={styles.callout}>
            <span className={styles.iconWrap} aria-hidden="true">
              <IconHeart size={20} color="#C79949" strokeWidth={1.6} />
            </span>
            <p className={styles.calloutText}>
              Because resilient minds create stronger individuals, stronger families, and stronger communities.
            </p>
          </div>
        </div>

        <figure className={styles.card}>
          <img
            src="/06_our_story_image_2.webp"
            alt="A small group talking together in a bright community space"
          />
        </figure>
      </div>
    </section>
  );
};

export default OurStory;
