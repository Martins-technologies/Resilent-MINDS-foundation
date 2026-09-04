import Button from '../ui/Button';
import Container from '../ui/Container';
import sectionImg from '../../assets/images/section-img.webp';

const StoriesSection = () => {
  return (
    // Top padding aur margin 0 kar diya hai
    <section className="section relative overflow-hidden pt-0 rounded-t-[3rem] md:rounded-t-[5rem] bg-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-t-[3rem] md:rounded-t-[5rem]"
        style={{ backgroundImage: `url(${sectionImg})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1] rounded-t-[3rem] md:rounded-t-[5rem]" />

      {/* Content */}
      <Container>
        {/* Content ka top padding bhi hata diya hai, agar zaroorat ho toh yahan se adjust karein */}
        <div className="relative z-[10] py-16 md:py-24">

          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[450px] items-center">

            {/* Left Side (Empty space) */}
            <div className="hidden md:block" />

            {/* Right Side Content */}
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 my-6 md:my-0 shadow-2xl">

              {/* Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#C9A84C]" />

                <span className="font-body font-bold text-xs tracking-[0.15em] uppercase text-[#C9A84C]">
                  Stories of Strength
                </span>

                <span className="h-px w-8 bg-[#C9A84C]" />
              </div>

              {/* Heading */}
              <h2 className="mb-4 text-[#7E1F3A] text-3xl md:text-4xl font-bold">
                Real People. Real Change.
              </h2>

              {/* Testimonial */}
              <p className="italic mb-4 text-gray-700 text-lg leading-relaxed">
                &ldquo;Resilient Minds Foundation gave me tools and encouragement
                when I needed them most. I feel stronger, more hopeful, and ready
                for what&rsquo;s next.&rdquo;
              </p>

              {/* Author */}
              <p className="text-sm font-bold text-gray-600 mb-8">
                &mdash; Youth Program Participant
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  to="/impact"
                  className="rounded-xl bg-[#7E1F3A] hover:bg-[#65182F] text-white px-6 py-3 transition-all duration-300"
                >
                  Read More Stories →
                </Button>

                <Button
                  variant="outline"
                  to="/contact-us"
                  className="rounded-xl border-2 border-[#7E1F3A] text-[#7E1F3A] hover:bg-[#7E1F3A] hover:text-white transition-all duration-300 bg-transparent px-6 py-3"
                >
                  Share Your Story →
                </Button>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default StoriesSection;