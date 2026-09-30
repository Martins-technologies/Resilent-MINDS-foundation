import PageHero from '../layout/PageHero';

const ContactHero = () => {
  return (
    <PageHero image="/contact/hero.webp" ariaLabel="Contact Us hero">
      <span className="eyebrow block mb-5">
        Contact Us
      </span>

      <h1 className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
        We&rsquo;re here to listen,{' '}
        <span className="text-burgundy">help, and connect.</span>
      </h1>

      <p className="text-sm md:text-base text-ink-soft leading-relaxed">
        Have a question, need support, or want to learn more about our programs? Reach out to us — we would love to hear from you.
      </p>
    </PageHero>
  );
};

export default ContactHero;
