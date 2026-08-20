import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import { FaEnvelope, FaTree } from 'react-icons/fa';

const ResourcesCTA = () => {
  return (
    <>
      <section className="section section--forest pt-6 pb-8">
        <Container>
          <Grid cols={2} className="items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
            {/* Left Side - Text */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-15 h-15 rounded-full bg-[#C79949] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <FaTree size={20} />
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-0">
                  You are not alone.
                </h3>
              </div>
              <p className="mb-4 text-white/90 text-base leading-relaxed mx-13">
                Whether you&rsquo;re looking to learn, heal, or help someone else, these resources are here for you.
              </p>
              <Button variant="gold" to="/contact" className='rounded-xl mx-13  text-white'>
                Get Support Now →
              </Button>
            </div>

            {/* Right Side - Real Image */}
            <div className="w-full rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEdhdGhlcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Small support group talking in a circle"
                className="w-full h-48 md:h-56 object-cover"
                loading="lazy"
              />
            </div>
          </Grid>
        </Container>
      </section>

      <section className="section pt-6 pb-8">
        <Container>
          <div className="card flex flex-col md:flex-row justify-between items-center gap-5 p-5 md:p-6 bg-white shadow-md rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C79949] flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-[#0f4c3a]">Can&rsquo;t find what you&rsquo;re looking for?</h4>
                <p className="text-sm mb-0 text-gray-600">We&rsquo;re here to help. Reach out to us and we&rsquo;ll point you in the right direction.</p>
              </div>
            </div>
            <Button
              variant="outline"
              to="/contact"
              className="rounded-xl !border-2 !border-[#2E5D49] !text-[#2E5D49] bg-transparent hover:!bg-[#2E5D49] hover:!text-white transition-colors"
            >
              Contact Us →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ResourcesCTA;