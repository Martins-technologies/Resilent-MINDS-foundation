import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import img from '../../assets/images/hands-join.webp'
import { FaTree } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhoWeHelpCTA = () => {
  return (
    <>



    <section className="section section--forest mx-8 rounded-2xl">
      <Container>
        <Grid cols={2} className="items-center gap-8">
          
          <div className="flex items-center gap-4">
            {/* Gold Tree Icon */}
            <div className="w-15 h-15 rounded-full bg-[#C79949] flex items-center justify-center text-white shadow-md flex-shrink-0">
              <FaTree size={50} />
            </div>
            
            {/* Text Content */}
            <div>
              <h3 className="text-white mb-2">No matter the challenge, no one should have to face it alone.</h3>
              <div className="text-gold font-semibold mb-0">We are here to help.</div>
            </div>
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


  
        <section className="section section--burgundy py-5 mt-4 overflow-hidden relative">
          {/* decorative branch — bottom-right */}
          <img
            src="/whowehelp/who we help-01.svg"
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 right-6 h-full opacity-15 pointer-events-none select-none"
          />

          <Container>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">

              {/* ── Gold icon ── */}
              <div className="w-[72px] h-[72px] rounded-full bg-[#C79949] flex items-center justify-center shadow-lg flex-shrink-0">
                <img
                  src="/whowehelp/heart.svg"
                  alt="Heart icon"
                  className="w-9 h-9 invert brightness-0 invert"
                />
              </div>

              {/* ── Text ── */}
              <p className="text-white font-semibold text-base md:text-lg leading-snug text-center md:text-left max-w-md">
                If you or someone you know could use support, we are here for you.
              </p>

              {/* ── Divider ── */}
              <div className="hidden md:block w-[1px] h-12 bg-white/40 flex-shrink-0" />

              {/* ── Buttons ── */}
              <div className="flex flex-wrap items-center gap-5">
                <Button to="/contact" variant="white" className="!rounded-xl font-semibold px-6">
                  Get Support
                </Button>
                <Link to="/programs" className="text-white font-medium text-sm md:text-base hover:opacity-75 transition-opacity">
                  Explore Programs →
                </Link>
              </div>

            </div>
          </Container>
        </section>
      </>
      );
};

     

export default WhoWeHelpCTA;

// hands-join