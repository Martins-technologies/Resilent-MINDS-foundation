import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const WhyWeExist = () => {
  return (
    <section className="section section--band overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">

          {/* Left Side - Image */}
          <div className="relative overflow-visible">

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-none">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&crop=center"
                alt="Group of friends walking together, arms around shoulders"
                className="
                  block w-full
                  h-[280px]
                  sm:h-[350px]
                  md:h-[400px]
                  lg:h-[400px]
                  object-cover
                "
              />

              {/* CURVE - Hidden on mobile (hidden), visible from medium screens up (md:block) */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  z-20
                  pointer-events-none
                  sm:hidden
                  md:block
                "
              >
                <svg
                  viewBox="0 0 1200 50"
                  preserveAspectRatio="none"
                  className="
                    block w-full
                    md:h-[45px]
                    lg:h-[55px]
                  "
                >
                  <path
                    d="M0,0 C300,35 900,35 1200,0 L1200,0 L0,0 Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

          </div>

          {/* Right Side - Content */}
          <div className="relative">

            <Eyebrow>Why We Exist</Eyebrow>

            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-forest">
              Because No One Should Face Life&rsquo;s Challenges Alone.
            </h2>

            <p className="text-base md:text-lg text-ink-soft mb-6 leading-relaxed">
              Life can bring stress, loss, isolation and uncertainty. Despite
              this, people continue to seek out ways of coping through various
              methods, including building bridges or connecting with support.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default WhyWeExist;