import Button from '../ui/Button';
import styles from '../../styles/PageHero.module.css';

const ImpactHero = () => {
  return (
    <section
      className={styles.section}
      aria-label="Impact hero"
      style={{ backgroundImage: "url('/impacthero.jpeg')" }}
    >
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow block mb-5">
            Impact
          </span>

          <h1 className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
            Stories of Strength.{' '}
            <span className="text-burgundy">Communities of Hope.</span>
          </h1>

          <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-8">
            We believe in real-world transformation. Through education, outreach, compassion, and resilience-building initiatives, we help individuals build stronger minds and communities where hope can thrive.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" to="/contact" className="!rounded-xl">
              Share Your Story
            </Button>
            <Button variant="outline" to="/programs" className="!rounded-xl">
              See How We Create Change
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHero;
