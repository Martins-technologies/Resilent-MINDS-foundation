import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';

const CTASection = () => {
  return (
    <section className="section section--burgundy">
      <Container>
        <Grid cols={2} className="items-center">
          {/* Left Column (Text & Button) */}
          <div>
            <h2 className="mt-0 text-white mb-4">Your Support Creates Hope</h2>
            <p className="text-[#f0dde0] mb-6">
              Help us reach more people, expand programs and deliver resources where they&rsquo;re needed most.
            </p>
            <Button variant="gold" to="/get-involved">
              ♥ Give Hope Today →
            </Button>
          </div>

          {/* Right Column (Image with Overlay) */}
          <div className="relative w-full overflow-hidden rounded-lg">
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6E2839] via-[#6E2839] to-transparent left-[-100%] w-[200%] h-full pointer-events-none z-10 opacity-90" />

            {/* Image */}
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Hands cupping a small seedling - symbol of hope and growth"
              className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover relative z-0"
              loading="lazy"
            />
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default CTASection;