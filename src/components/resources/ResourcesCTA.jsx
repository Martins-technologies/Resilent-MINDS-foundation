import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import { FaEnvelope } from 'react-icons/fa';

const ResourcesCTA = () => {
  return (
    <>
      <section className="section section--forest pt-0">
        <Container>
          <Grid cols={2} className="items-center gap-8">
            {/* Left Side - Text */}
            <div>
              <h3 className="text-white mb-4 text-2xl md:text-3xl font-bold leading-tight">
                You are not alone.
              </h3>
              <p className="mb-5 text-white/90 text-base leading-relaxed">
                Whether you&rsquo;re looking to learn, heal, or help someone else, these resources are here for you.
              </p>
              <Button variant="gold" to="/contact">
                Get Support Now →
              </Button>
            </div>

            {/* Right Side - Real Image */}
            <div className="w-full rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEdhdGhlcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Small support group talking in a circle"
                className="w-full h-full object-cover aspect-square md:aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </Grid>
        </Container>
      </section>

      <section className="section pt-8">
        <Container>
          <div className="card flex flex-col md:flex-row justify-between items-center gap-5 p-6 bg-white shadow-md rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#C79949] flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-[#0f4c3a]">Can&rsquo;t find what you&rsquo;re looking for?</h4>
                <p className="text-sm mb-0 text-gray-600">We&rsquo;re here to help. Reach out to us and we&rsquo;ll point you in the right direction.</p>
              </div>
            </div>
            <Button variant="outline" to="/contact" className="border-[#5c1a2e] text-[#5c1a2e] hover:bg-[#5c1a2e] hover:text-white">
              Contact Us →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ResourcesCTA;