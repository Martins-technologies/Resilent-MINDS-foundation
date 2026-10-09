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

      <div className="max-w-[740px]">
        <p className="!text-[19px] md:!text-[21px] text-ink-soft leading-relaxed mb-4 md:whitespace-nowrap">
          Life challenges can affect anyone. Stress, loss,
          <br />
          trauma, isolation, and uncertainty can impact mental
          <br />
          wellbeing. We believe everyone deserves access to support,
          <br />
          encouragement, and tools that help them move forward.
        </p>

        <p className="!text-[19px] md:!text-[21px] text-ink-soft leading-relaxed md:whitespace-nowrap">
          Resilient Minds Foundation Charity was created
          <br />
          from a belief that mental wellness is essential to human
          <br />
          wellbeing. Too many individuals silently carry emotional
          <br />
          burdens without access to meaningful support.
        </p>
      </div>
    </PageHero>
  );
};

export default AboutHero;
