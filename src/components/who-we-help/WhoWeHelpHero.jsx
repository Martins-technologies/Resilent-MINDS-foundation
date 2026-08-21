import styles from '../../styles/PageHero.module.css';

const WhoWeHelpHero = () => {
  return (
    <section
      className={styles.section}
      aria-label="Who We Help hero"
      style={{ backgroundImage: "url('/whowehelpshero.jpeg')" }}
    >
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow block mb-5">
            Who We Help
          </span>

          <h1 className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
            Support for every journey.{' '}
            <span className="text-burgundy">Hope for every future.</span>
          </h1>

          <p className="text-sm md:text-base text-ink-soft leading-relaxed">
            Mental health challenges can affect anyone&mdash;at any age, in any season of life. We are here for individuals, families, and communities, walking alongside them with compassion, resources, and hope.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpHero;
