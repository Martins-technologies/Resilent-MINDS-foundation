import Button from '../ui/Button';
import Container from '../ui/Container';

const ProgramsCTA = () => {
  return (
    <>
      <section className="section section--forest py-10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div>
              <h3 className="mt-0 text-white mb-2">
                Together, we build stronger minds and stronger communities.
              </h3>
              <p className="text-[#d9e6df]">
                Every program we create is designed to bring hope, build skills, and strengthen the resilience that helps individuals and communities thrive.
              </p>
            </div>
            <Button variant="gold" to="/get-involved">
              Join Our Movement →
            </Button>
          </div>
        </Container>
      </section>

      <section className="section section--burgundy py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-white font-semibold mb-0">
              Help us expand these programs and reach more individuals in need. Your support creates real, lasting change.
            </p>
            <Button variant="outlineLight" to="/get-involved">
              Donate Today →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProgramsCTA;