import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import Eyebrow from '../ui/Eyebrow';
import ImgPlaceholder from '../ui/ImgPlaceholder';

const StoriesSection = () => {
  return (
    <section className="section">
      <Container>
        <Grid cols={2} className="items-center">
          <ImgPlaceholder minHeight="260px">
            Photo: young person smiling, looking upward
          </ImgPlaceholder>
          <div>
            <Eyebrow>Stories of Strength</Eyebrow>
            <h2 className="mb-4">Real People. Real Change.</h2>
            <p className="italic mb-4">
              &ldquo;Resilient Minds Foundation gave me tools and encouragement when I needed them most. I feel stronger, more hopeful, and ready for what&rsquo;s next.&rdquo;
            </p>
            <p className="text-sm font-bold text-ink mb-6">&mdash; Youth Program Participant</p>
            <div className="flex flex-wrap gap-3.5">
              <Button variant="primary" to="/impact">
                Read More Stories →
              </Button>
              <Button variant="outline" to="/contact">
                Share Your Story
              </Button>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default StoriesSection;