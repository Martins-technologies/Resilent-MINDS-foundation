import Button from '../ui/Button';
import styles from '../../styles/PageHero.module.css';

const ContactHero = () => {
  return (
    <section
      className={styles.section}
      aria-label="Contact Us hero"
      style={{ backgroundImage: "url('/contact/hero.webp')" }}
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow block mb-5">
            Contact Us
          </span>

          <h1 className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
            We&rsquo;re here to listen,{' '}
            <span className="text-burgundy">help, and connect.</span>
          </h1>

          <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-8">
            Have a question, need support, or want to learn more about our programs? Reach out to us — we would love to hear from you.
          </p>

          <Button
            variant="primary"
            href="#contact-form"
            className="!rounded-xl"
          >
            Get in Touch →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
