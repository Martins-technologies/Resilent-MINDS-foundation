import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import ImgPlaceholder from '../ui/ImgPlaceholder';
import { FaEnvelope } from 'react-icons/fa';

const ResourcesCTA = () => {
  return (
    <>
      <section className="section section--forest pt-0">
        <Container>
          <Grid cols={2} className="items-center">
            <div>
              <h3 className="text-white mb-4">You are not alone.</h3>
              <p className="mb-5">
                Whether you&rsquo;re looking to learn, heal, or help someone else, these resources are here for you.
              </p>
              <Button variant="gold" to="/contact">
                Get Support Now →
              </Button>
            </div>
            <ImgPlaceholder minHeight="180px">
              Small support group talking in a circle
            </ImgPlaceholder>
          </Grid>
        </Container>
      </section>

      <section className="section pt-8">
        <Container>
          <div className="card flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <h4 className="mb-1">Can&rsquo;t find what you&rsquo;re looking for?</h4>
                <p className="text-sm mb-0">We&rsquo;re here to help. Reach out to us and we&rsquo;ll point you in the right direction.</p>
              </div>
            </div>
            <Button variant="outline" to="/contact">
              Contact Us →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ResourcesCTA;
