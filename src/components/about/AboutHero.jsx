import PageHero from '../layout/PageHero';

const AboutHero = () => {
  return (
    <PageHero
      image="/aboutusbanner.png"
      ariaLabel="About Us hero"
    >
      <h1 className="mb-2 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
        About Us
      </h1>

      <span className="eyebrow block mb-5">
        Why We Exist
      </span>

      <p className="!text-[9px] md:!text-[11px] text-ink-soft leading-relaxed mb-4">
        Life challenges can affect anyone. Stress, loss, trauma,
        <br />
        isolation, and uncertainty can impact mental wellbeing. We believe
        <br />
        everyone deserves access to support, encouragement, and tools that
        <br />
        help them move forward.
      </p>

      <p className="!text-[9px] md:!text-[11px] text-ink-soft leading-relaxed">
        Resilient Minds Foundation Charity was created from a belief that
        <br />
        mental wellness is essential to human wellbeing. Too many
        <br />
        individuals silently carry emotional burdens without access to
        <br />
        meaningful support.
      </p>
    </PageHero>
  );
};

export default AboutHero;
