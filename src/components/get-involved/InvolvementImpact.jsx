import Container from '../ui/Container';
import Grid from '../ui/Grid';
import Stat from '../ui/Stat';

const InvolvementImpact = () => {
  const stats = [
    { number: '1,000+', label: 'People Reached' },
    { number: '100+', label: 'Workshops Delivered' },
    { number: '50+', label: 'Community Volunteers' },
    { number: 'Countless', label: 'Lives Encouraged' },
  ];

  return (
    <section className="section section--forest pt-0">
      <Container>
        <Grid cols={2} className="items-center gap-8 md:gap-12">
          
          {/* Left Side - Real Image */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Person in a peaceful, hopeful moment"
              className="w-full h-full object-cover aspect-square md:aspect-[4/3]"
              loading="lazy"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-white mb-5 text-2xl md:text-3xl font-bold leading-tight">
              Your involvement creates real change. Stronger minds. Brighter futures.
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Stat key={index} number={stat.number} label={stat.label} />
              ))}
            </div>
          </div>
          
        </Grid>
      </Container>
    </section>
  );
};

export default InvolvementImpact;