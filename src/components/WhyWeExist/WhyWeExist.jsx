import Button from '../Button/Button';
import SectionLabel from '../SectionLabel/SectionLabel';
import styles from './WhyWeExist.module.css';

const MISSION_IMAGE = 'https://picsum.photos/id/1012/900/700';

const WhyWeExist = () => {
  return (
    <section className={styles.section} aria-labelledby="why-we-exist-heading">
      <div className={styles.media}>
        <img
          src={MISSION_IMAGE}
          alt="Placeholder — diverse group standing together outdoors with arms around one another"
          className={styles.image}
          width={900}
          height={700}
        />
      </div>

      <div className={styles.content}>
        <SectionLabel lined={false}>
          <span className={styles.labelRow}>
            <span className={styles.tick} aria-hidden="true" />
            Why We Exist
          </span>
        </SectionLabel>
        <h2 id="why-we-exist-heading" className={styles.heading}>
          Because No One Should Face Life&rsquo;s Challenges Alone.
        </h2>
        <p className={styles.body}>
          Life can bring stress, loss, isolation, and uncertainty. We create
          pathways of hope by offering education, community programs, emotional
          wellness resources, and resilience-building support — so people feel
          heard, supported, and empowered to move forward.
        </p>
        <Button to="/about" variant="gold" size="md" arrow>
          Learn About Our Mission
        </Button>
      </div>
    </section>
  );
};

export default WhyWeExist;
