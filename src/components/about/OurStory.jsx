import Container from '../ui/Container';
import Grid from '../ui/Grid';
import Eyebrow from '../ui/Eyebrow';

const OurStory = () => {
  return (
    <section className="section section--band">
      <Container>
        <Grid cols={2} className="items-center">
          {/* Left Side - Content */}
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mb-4">
              Every journey has moments of struggle. But with the right support, people can rebuild, recover, and rise stronger.
            </h2>
            <p className="mb-4">
              Our foundation works to create pathways of hope by offering education, community programs, emotional wellness resources, and resilience-building initiatives.
            </p>
            <p className="mb-4">
              We are committed to creating environments where people feel heard, supported, and empowered to move forward.
            </p>
            <p className="font-bold text-burgundy border-l-3 border-gold pl-3.5">
              Because resilient minds create stronger individuals, stronger families, and stronger communities.
            </p>
          </div>

          {/* Right Side - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop&crop=center"
              alt="Support circle conversation"
              className="w-full h-[150px] object-cover rounded-xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop&crop=center"
              alt="Student journaling"
              className="w-full h-[150px] object-cover rounded-xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=300&fit=crop&crop=center"
              alt="Hands together in unity"
              className="w-full h-[150px] object-cover rounded-xl col-span-2"
            />
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default OurStory;