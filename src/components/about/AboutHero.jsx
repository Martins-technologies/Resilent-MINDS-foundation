import Button from '../ui/Button';
import styles from '../../styles/PageHero.module.css';

const AboutHero = () => {
  return (
    <section
      className={styles.section}
      aria-label="About Us hero"
      style={{ backgroundImage: "url('/abouthero.jpeg')" }}
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className="mb-2 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
            About Us
          </h1>

          <span className="eyebrow block mb-5">
            Why We Exist
          </span>

          <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-4">
            Life challenges can affect anyone. Stress, loss, trauma, isolation, and uncertainty can impact mental wellbeing. We believe everyone deserves access to support, encouragement, and tools that help them move forward.
          </p>

          <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-8">
            Resilient Minds Foundation Charity was created from a belief that mental wellness is essential to human wellbeing. Too many individuals silently carry emotional burdens without access to meaningful support.
          </p>

          <Button
            variant="primary"
            to="/about"
            className="!rounded-xl"
          >
            Learn More About Our Journey →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
