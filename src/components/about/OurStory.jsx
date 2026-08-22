import Eyebrow from '../ui/Eyebrow';

const OurStory = () => {
  return (
    <section
      className="relative w-full min-h-[364px] flex items-center overflow-hidden"
      style={{ background: '#F8F4ED' }}
    >
      {/* Content — left half */}
      <div className="w-full max-w-[52%] min-h-[364px] flex items-center px-12 py-10">
        <div className="max-w-[560px]">
          <Eyebrow>Our Story</Eyebrow>
          <h3 className="mb-4 mt-2 text-forest leading-snug">
            Every journey has moments of struggle. But with the right support, people can rebuild, recover, and rise stronger.
          </h3>
          <p className="mb-4 text-gray-700">
            Our foundation works to create pathways of hope by offering education, community programs, emotional wellness resources, and resilience-building initiatives.
          </p>
          <p className="mb-5 text-gray-700">
            We are committed to creating environments where people feel heard, supported, and empowered to move forward.
          </p>
          <p className="font-bold text-xl text-burgundy leading-snug">
            Because resilient minds create stronger individuals, stronger families, and stronger communities.
          </p>
        </div>
      </div>

      {/* Right half — background image, no box overlays */}
      <div
        className="absolute top-0 right-0 w-[50%] h-full"
        style={{
          backgroundImage: "url('/aboutourstory.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </section>
  );
};

export default OurStory;