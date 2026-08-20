import Button from '../Button/Button';
import IconLeafDecor from '../icons/IconLeafDecor';
import SectionLabel from '../SectionLabel/SectionLabel';
import styles from './StoriesOfStrength.module.css';

const StoriesOfStrength = () => {
  return (
    <section className={styles.section} aria-labelledby="stories-heading">
      <div className={styles.topWave} aria-hidden="true">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
          <path
            fill="#2E5D49"
            d="M0,0 H1440 V18 C1180,72 920,8 720,32 C480,58 220,6 0,40 Z"
          />
        </svg>
        <IconLeafDecor className={styles.leaf} color="#FEF9F2" opacity={0.16} />
      </div>

      <div className={styles.layout}>
        <div className={styles.media}>
          <img
            src="/child.jpeg"
            alt="Young child smiling and looking upward"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <SectionLabel lined>Stories of Strength</SectionLabel>
          <h2 id="stories-heading" className={styles.heading}>
            Real People. Real Change.
          </h2>
          <blockquote className={styles.quote}>
            &ldquo;Resilient Minds Foundation gave me tools and encouragement
            when I needed them most. I feel stronger, more hopeful, and ready
            for what&rsquo;s next.&rdquo;
          </blockquote>
          <p className={styles.attr}>&mdash; Youth Program Participant</p>
          <div className={styles.actions}>
            <Button to="/impact" variant="primary" size="md" arrow>
              Read More Stories
            </Button>
            <Button to="/contact" variant="outline" size="md" className={styles.shareBtn}>
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesOfStrength;
