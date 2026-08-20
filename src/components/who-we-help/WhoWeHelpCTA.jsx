import Button from '../ui/Button';
import Container from '../ui/Container';
import Grid from '../ui/Grid';
import img from '../../assets/images/hands-join.webp'
import { FaHandsHelping, FaTree  } from 'react-icons/fa'; // Gold icon ke liye

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


  
        <section className="section section--burgundy py-4 mt-4">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">

              {/* Left Side: Icon + Text */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C79949] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <FaHandsHelping size={20} />
                </div>

                {/* Text */}
                <p className="text-white font-semibold mb-0 text-base md:text-lg leading-snug ">
                  If you or someone you know could use support, we are here for you.
                </p>
              </div>

              <div className="hidden md:block w-[1px] h-10 bg-white opacity-40"></div>

              <div className="flex flex-wrap gap-3.5"> 
                <Button to="/contact" variant="burgundy" className="rounded-xl">
                  Get Support →
                </Button>
                <Button variant="outlineLight" to="/programs" className='rounded-xl'>
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