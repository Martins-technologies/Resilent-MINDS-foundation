import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import Eyebrow from '../ui/Eyebrow';
import ImgPlaceholder from '../ui/ImgPlaceholder';

const ResourcesHero = () => {
  return (
    <section className="py-16 md:py-20 bg-ivory">
      <Container>
        <Grid cols={2} className="items-center">
          <div>
            <Eyebrow>Resources</Eyebrow>
            <h1 className="mb-4">Knowledge. Tools. Support. Empowering stronger minds and communities.</h1>
            <p className="mb-6">
              Explore our library of resources designed to educate, empower, and support individuals, families, and communities on their journey toward mental wellness and resilience.
            </p>
            <Button variant="primary" to="#featured-resources">
              Browse All Resources →
            </Button>
          </div>
          <ImgPlaceholder minHeight="280px">
            Laptop on a desk showing resource articles, coffee and plants nearby
          </ImgPlaceholder>
        </Grid>
      </Container>
    </section>
  );
};

export default ResourcesHero;
