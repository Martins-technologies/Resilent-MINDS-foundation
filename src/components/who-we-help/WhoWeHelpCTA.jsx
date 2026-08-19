import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import img from '../../assets/images/hands-join.webp'
const WhoWeHelpCTA = () => {
  return (
    <>
      <section className="section section--forest">
        <Container>
          <Grid cols={2} className="items-center gap-8">
            <div>
              <h3 className="text-white mb-2">No matter the challenge, no one should have to face it alone.</h3>
              <p className="text-gold font-semibold mb-0">We are here to help.</p>
            </div>
            <div className="w-full h-[180px] rounded-lg shadow-md overflow-hidden">
              <img 
                src={img}
                alt="Hands joined together in a circle of support"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop";
                }}
              />
            </div>
          </Grid>
        </Container>
      </section>

      <section className="section section--burgundy py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-white font-semibold mb-0">
              If you or someone you know could use support, we are here for you.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button variant="gold" to="/contact">
                Get Support
              </Button>
              <Button variant="outlineLight" to="/programs">
                Explore Programs →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhoWeHelpCTA;

// hands-join