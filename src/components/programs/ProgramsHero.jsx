import Button from '../ui/Button';
import styles from '../../styles/PageHero.module.css';

const ProgramsHero = () => {
  return (
    <section
      className={styles.section}
      aria-label="Our Programs hero"
      style={{ backgroundImage: "url('/PROGRAME%20updated/hero.webp')" }}
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow block mb-5">
            Our Programs
          </span>

          <h1 className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
            Programs that{' '}
            <span className="text-burgundy">build resilience and</span>{' '}
            empower change.
          </h1>

          <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-8">
            We create educational, emotional, and community-based programs that help individuals strengthen their mental wellness, build life skills, and thrive.
          </p>

          <Button
            variant="primary"
            href="#programs-list"
            className="!rounded-xl"
          >
            Explore Our Programs →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
