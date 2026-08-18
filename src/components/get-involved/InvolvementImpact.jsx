import Container from '../ui/Container';
import Grid from '../ui/Grid';
import ImgPlaceholder from '../ui/ImgPlaceholder';
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
        <Grid cols={2} className="items-center">
          <ImgPlaceholder minHeight="200px">
            Hands cupped together holding a small heart
          </ImgPlaceholder>
          <div>
            <h3 className="text-white mb-5">Your involvement creates real change. Stronger minds. Brighter futures.</h3>
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
