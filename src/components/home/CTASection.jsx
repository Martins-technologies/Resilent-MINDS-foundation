import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import ImgPlaceholder from '../ui/ImgPlaceholder';

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
          <div className="relative w-full overflow-hidden">
            {/* 
              OVERLAY: Tailwind absolute + gradient
              "from-[#6E2839]" = Start color (aapka burgundy)
              "via-[#6E2839]" = Color continue hota hai
              "to-transparent" = Fade out ho jata hai right side par
              
              "left-[-100%]" => Overlay ko left mein bahar khichega, taaki left column bhi cover ho jaye
              "w-[200%]" => Isko width double kar diya taaki left bahar tak chala jaye
              "opacity-90" => thoda transparent rakhe taaki text dikhe (optional)
            */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6E2839] via-[#6E2839] to-transparent left-[-100%] w-[200%] h-full pointer-events-none z-10 opacity-90" />

            {/* Image / Placeholder */}
            <ImgPlaceholder
              minHeight="220px"
              className="bg-gradient-to-br from-[#8a3346] to-[#6E2839] text-white relative z-0"
            >
              Photo: hands cupping a small seedling
            </ImgPlaceholder>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default CTASection;