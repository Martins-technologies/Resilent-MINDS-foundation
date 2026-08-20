import Container from '../ui/Container';
import Grid from '../ui/Grid';
import Eyebrow from '../ui/Eyebrow';
import { FaHeart } from 'react-icons/fa'
const OurStory = () => {
  return (
    <section className="section section--band">
      <Container>
        <Grid cols={2} className="items-center">
          {/* Left Side - Content */}
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h3 className="mb-2">
              Every journey has moments of struggle. But with the right support, people can rebuild, recover, and rise stronger.
            </h3>
            <p className="mb-4">
              Our foundation works to create pathways of hope by offering education, community programs, emotional wellness resources, and resilience-building initiatives.
            </p>
            <p className="mb-4">
              We are committed to creating environments where people feel heard, supported, and empowered to move forward.
            </p>
            <div className="disc flex items-center gap-8">
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-burgundy flex items-center justify-center text-burgundy">
                <FaHeart className="text-sm" />
              </div>
              <p className="font-bold text-2xl text-burgundy ">
                Because resilient minds create stronger individuals, stronger families, and stronger communities.
              </p>
            </div>
          </div>

          {/* Right Side - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop&crop=center"
              alt="Support group meeting"
              className="w-full h-[150px] object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop&crop=center"
              alt="People in conversation"
              className="w-full h-[150px] object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=300&fit=crop&crop=center"
              alt="Community support hands"
              className="w-full h-[150px] object-cover rounded-xl col-span-2"
            />
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default OurStory;