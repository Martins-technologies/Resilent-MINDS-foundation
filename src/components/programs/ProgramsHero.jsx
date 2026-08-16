import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import Eyebrow from '../ui/Eyebrow';
import ImgPlaceholder from '../ui/ImgPlaceholder';

const ProgramsHero = () => {
  return (
    <section className="py-16 md:py-20 bg-ivory">
      <Container>
        <Grid cols={2} className="items-center">
          <div>
            <Eyebrow>Our Programs</Eyebrow>
            <h1 className="mb-4">Programs that build resilience and empower change.</h1>
            <p className="mb-6">
              We create educational, emotional, and community-based programs that help individuals strengthen their mental wellness, build life skills, and thrive.
            </p>
            <Button variant="primary" to="#programs-list">
              Explore Our Programs →
            </Button>
          </div>
          <div className="grid gap-4">
            <ImgPlaceholder minHeight="180px">
              Small group conversation, warm indoor light
            </ImgPlaceholder>
            <ImgPlaceholder minHeight="140px">
              Workshop presentation to seated group
            </ImgPlaceholder>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default ProgramsHero;