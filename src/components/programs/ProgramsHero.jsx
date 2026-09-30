import PageHero from '../layout/PageHero';

const ProgramsHero = () => {
  return (
    <PageHero image="/PROGRAME%20updated/hero.webp" ariaLabel="Our Programs hero">
      <span className="eyebrow block mb-5">
        Our Programs
      </span>

      <h1 className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
        Programs that{' '}
        <span className="text-burgundy">build resilience and</span>{' '}
        empower change.
      </h1>

      <p className="text-sm md:text-base text-ink-soft leading-relaxed">
        We create educational, emotional, and community-based programs that help individuals strengthen their mental wellness, build life skills, and thrive.
      </p>
    </PageHero>
  );
};

export default ProgramsHero;
