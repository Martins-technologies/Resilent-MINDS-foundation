import PageHero from '../layout/PageHero';

const AboutHero = () => {
  return (
    <PageHero image="/abouthero.jpeg" ariaLabel="About Us hero" imageShiftRight={5} imagePositionY="20%">
      <h1 className="mb-2 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
        About Us
      </h1>

      <span className="eyebrow block mb-5">
        Why We Exist
      </span>

      <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-4">
        Life challenges can affect anyone. Stress, loss, trauma, isolation, and uncertainty can impact mental wellbeing. We believe everyone deserves access to support, encouragement, and tools that help them move forward.
      </p>

      <p className="text-sm md:text-base text-ink-soft leading-relaxed">
        Resilient Minds Foundation Charity was created from a belief that mental wellness is essential to human wellbeing. Too many individuals silently carry emotional burdens without access to meaningful support.
      </p>
    </PageHero>
  );
};

export default AboutHero;
