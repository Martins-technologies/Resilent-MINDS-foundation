import Button from '../ui/Button';
import styles from '../../styles/PageHero.module.css';

const ResourcesHero = () => {
  return (
    <section
      className={styles.section}
      aria-label="Resources hero"
      style={{ backgroundImage: "url('/resourceshero.jpeg')" }}
    >
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow block mb-5">
            Resources
          </span>

          <h1 className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
            Knowledge. Tools. Support.{' '}
            <span className="text-burgundy">
              Empowering stronger minds and communities.
            </span>
          </h1>

          <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-8">
            Explore our library of resources designed to educate, empower, and support individuals, families, and communities on their journey toward mental wellness and resilience.
          </p>

          <Button
            variant="primary"
            href="#featured-resources"
            className="!rounded-xl"
          >
            Browse All Resources →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
