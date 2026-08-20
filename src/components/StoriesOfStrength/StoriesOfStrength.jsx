import Button from '../Button/Button';
import IconLeafDecor from '../icons/IconLeafDecor';
import SectionLabel from '../SectionLabel/SectionLabel';
import styles from './StoriesOfStrength.module.css';

const STORY_IMAGE = 'https://picsum.photos/id/838/700/800';

const StoriesOfStrength = () => {
  return (
    <section className={styles.section} aria-labelledby="stories-heading">
      <div className={styles.topWave} aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path
            fill="#2E5D49"
            d="M0,0 H1440 V20 C1200,80 900,10 720,40 C480,76 240,8 0,50 Z"
          />
        </svg>
        <IconLeafDecor className={styles.leaf} color="#FEF9F2" opacity={0.18} />
      </div>

      <div className={styles.layout}>
        <div className={styles.media}>
          <img
            src={STORY_IMAGE}
            alt="Placeholder — young person smiling and looking upward"
            className={styles.image}
            width={700}
            height={800}
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
            <Button to="/contact" variant="outline" size="md">
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesOfStrength;
