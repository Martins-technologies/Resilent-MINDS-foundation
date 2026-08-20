import Button from '../ui/Button';
import Container from '../ui/Container';
import sectionImg from '../../assets/images/section-img.webp';

const StoriesSection = () => {
  return (
    <section className="section relative overflow-hidden">
      {/* Full Width Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sectionImg})` }}
      ></div>

      <Container>
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[450px] items-center">
            {/* Left Side - Empty (image visible) */}
            <div></div>

            {/* Right Side - White Overlay with Content */}
            <div className="  p-8 md:p-12 lg:p-16  my-6 md:my-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-gold"></span>
                <span className="font-body font-bold text-xs tracking-[0.12em] uppercase text-gold">
                  Stories of Strength
                </span>
                <span className="h-px w-6 bg-gold"></span>
              </div>

              <h2 className="mb-4 text-burgundy text-3xl md:text-4xl font-bold">
                Real People. Real Change.
              </h2>

              <p className="italic mb-4 text-ink/80 text-lg">
                &ldquo;Resilient Minds Foundation gave me tools and encouragement when I needed them most. I feel stronger, more hopeful, and ready for what&rsquo;s next.&rdquo;
              </p>

              <p className="text-sm font-bold text-ink/70 mb-8">
                &mdash; Youth Program Participant
              </p>

              <div className="flex flex-wrap gap-3.5">
                <Button variant="primary" to="/impact" className='rounded-xl'>
                  Read More Stories →
                </Button>
                <Button
                  variant="outline"
                  to="/contact"
                  className="rounded-xl outline outline-2 outline-green-900 text-green-900 hover:bg-green-900 hover:text-white transition-all duration-300 bg-transparent hover:outline-green-800"
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