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
          <div>
            <h2 className="mt-0 text-white mb-4">Your Support Creates Hope</h2>
            <p className="text-[#f0dde0] mb-6">
              Help us reach more people, expand programs and deliver resources where they&rsquo;re needed most.
            </p>
            <Button variant="gold" to="/get-involved">
              ♥ Give Hope Today →
            </Button>
          </div>
          <ImgPlaceholder
            minHeight="220px"
            className="bg-gradient-to-br from-[#8a3346] to-[#6E2839] text-white"
          >
            Photo: hands cupping a small seedling
          </ImgPlaceholder>
        </Grid>
      </Container>
    </section>
  );
};

export default CTASection;