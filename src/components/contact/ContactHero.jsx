import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import Eyebrow from '../ui/Eyebrow';
import ImgPlaceholder from '../ui/ImgPlaceholder';

const ContactHero = () => {
  return (
    <section className="py-16 md:py-20 bg-ivory">
      <Container>
        <Grid cols={2} className="items-center">
          <div>
            <Eyebrow>Contact Us</Eyebrow>
            <h1 className="mb-4">We&rsquo;re here to listen, help, and connect.</h1>
            <p className="mb-6">
              Have a question, need support, or want to learn more about our programs? Reach out to us — we would love to hear from you.
            </p>
            <Button variant="primary" to="#contact-form">
              Get in Touch →
            </Button>
          </div>
          <ImgPlaceholder minHeight="280px">
            Photo: welcoming foundation office lobby with branded signage
          </ImgPlaceholder>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactHero;