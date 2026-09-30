import PageHero from '../layout/PageHero';

const GetInvolvedHero = () => {
  return (
    <PageHero image="/get%20involved/hero.webp" ariaLabel="Get Involved hero">
      <span className="eyebrow block mb-5">
        Get Involved
      </span>

      <h1 className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]">
        Be part of the change.{' '}
        <span className="text-burgundy">Together, we build resilience.</span>
      </h1>

      <p className="text-sm md:text-base text-ink-soft leading-relaxed">
        Your time, skills, and generosity help us empower individuals and communities to overcome challenges, grow stronger, and create brighter futures.
      </p>
    </PageHero>
  );
};

export default GetInvolvedHero;
