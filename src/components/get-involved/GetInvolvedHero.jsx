import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import Eyebrow from '../ui/Eyebrow';
import ImgPlaceholder from '../ui/ImgPlaceholder';

const GetInvolvedHero = () => {
  return (
    <section className="py-16 md:py-20 bg-ivory">
      <Container>
        <Grid cols={2} className="items-center">
          <div>
            <Eyebrow>Get Involved</Eyebrow>
            <h1 className="mb-4">Be part of the change. Together, we build resilience.</h1>
            <p className="mb-6">
              Your time, skills, and generosity help us empower individuals and communities to overcome challenges, grow stronger, and create brighter futures.
            </p>
            <Button variant="primary" to="#ways-to-help">
              Find Your Way to Get Involved →
            </Button>
          </div>
          <ImgPlaceholder minHeight="280px">
            Volunteers packing donation boxes outdoors, smiling
          </ImgPlaceholder>
        </Grid>
      </Container>
    </section>
  );
};

export default GetInvolvedHero;
