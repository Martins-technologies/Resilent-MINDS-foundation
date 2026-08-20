import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const WhyWeExist = () => {
  return (
    <section className="section section--band overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Side - Image (Full, No Border) */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&crop=center"
              alt="Group of friends walking together, arms around shoulders"
              className="w-full h-[400px] object-cover "
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <Eyebrow>Why We Exist</Eyebrow>
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-forest">
              Because No One Should Face Life&rsquo;s Challenges Alone.
            </h2>
            <p className="text-base md:text-lg text-ink-soft mb-6 leading-relaxed">
              Life can bring stress, loss, isolation and uncertainty. Despite 
              this, people continue to seek out ways of coping through various 
              methods, including building bridges or connecting with support.
            </p>
            <Button variant="gold" to="/about" className="mt-2 rounded-xl">
              Learn more for more →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyWeExist;