import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import  img from '../../assets/images/impact-section.jpeg'
const TogetherSection = () => {
  return (
    <section className="section">
      <Container>
        <div className="rounded-xl overflow-hidden bg-[#F6EFE2]">
          <Grid cols={2} className="items-center p-0">
            
            {/* LEFT: Real Image */}
            <div className="w-full h-[260px] overflow-hidden">
              <img 
                src={img}
                alt="Volunteers planting a community garden together"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT: Text */}
            <div className="p-8">
              <h3 className="mb-3">Together, We Create Change</h3>
              <p className="mb-5">
                Through education, outreach, and compassion, we are building communities where resilience can grow.
              </p>
              <Button variant="primary" to="/get-involved">
                Join Our Movement
              </Button>
            </div>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default TogetherSection;