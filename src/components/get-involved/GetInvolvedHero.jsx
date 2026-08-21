import Button from '../ui/Button';
import styles from '../../styles/PageHero.module.css';

const GetInvolvedHero = () => {
  return (
    <section
      className={styles.section}
      aria-label="Get Involved hero"
      style={{ backgroundImage: "url('/getinvolvedhero.jpeg')" }}
    >
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow block mb-5">
            Get Involved
          </span>

          <h1 className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
            Be part of the change.{' '}
            <span className="text-burgundy">Together, we build resilience.</span>
          </h1>

          <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-8">
            Your time, skills, and generosity help us empower individuals and communities to overcome challenges, grow stronger, and create brighter futures.
          </p>

          <Button
            variant="primary"
            href="#ways-to-help"
            className="!rounded-xl"
          >
            Find Your Way to Get Involved →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedHero;
