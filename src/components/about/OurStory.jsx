import IconHeart from '../icons/IconHeart';
import styles from './OurStory.module.css';

const OurStory = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.label}>Our Story</p>
          <h3 className={styles.heading}>
            Every journey has moments of struggle. But with the right support,
            people can rebuild, recover, and rise stronger.
          </h3>
          <p className={styles.body}>
            Our foundation works to create pathways of hope by offering education, community programs, emotional wellness resources, and resilience-building initiatives.
          </p>
          <p className={styles.body}>
            We are committed to creating environments where people feel heard, supported, and empowered to move forward.
          </p>
          <div className={styles.callout}>
            <span className={styles.iconWrap} aria-hidden="true">
              <IconHeart size={22} color="#C79949" strokeWidth={1.5} />
            </span>
            <p className={styles.calloutText}>
              Because resilient minds create stronger individuals, stronger families, and stronger communities.
            </p>
          </div>
        </div>
      </div>

      <img
        src="/updatedimages/5%20(2).webp"
        alt="People connecting through support, learning, and community programs"
        className={styles.image}
      />
    </section>
  );
};

export default OurStory;
