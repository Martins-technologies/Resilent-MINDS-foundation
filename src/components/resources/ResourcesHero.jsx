import PageHero from '../layout/PageHero';

const ResourcesHero = () => {
  return (
    <PageHero image="/Resources/hero.webp" ariaLabel="Resources hero">
      <span className="eyebrow block mb-5">
        Resources
      </span>

      <h1 className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
        Knowledge. Tools. Support.{' '}
        <span className="text-burgundy">
          Empowering stronger minds and communities.
        </span>
      </h1>

      <p className="text-sm md:text-base text-ink-soft leading-relaxed">
        Explore our library of resources designed to educate, empower, and support individuals, families, and communities on their journey toward mental wellness and resilience.
      </p>
    </PageHero>
  );
};

export default ResourcesHero;
