import Button from '../ui/Button';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const ContactHero = () => {
  return (
    <section 
      className="py-20 md:py-28 relative bg-cover bg-center bg-no-repeat "
      style={{ 
        // Background Image: Welcoming office/lobby vibe
        backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
      }}
    >
      {/* Overlay - Text ko readable banane ke liye */}
      <div className="absolute inset-0 bg-white/80"></div>

      <Container>
        {/* Content - Left Aligned */}
        <div className="relative z-10 w-full md:w-3/5 lg:w-1/2 text-left">
          
          <Eyebrow>Contact Us</Eyebrow>
          
          <h1 className="mb-4 text-[#0f4c3a] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            We&rsquo;re here to listen,<br/>
            <span className='text-burgundy'> help, and connect.</span>
          </h1>
          
          <div className="mb-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
            Have a question, need support, or want to learn more about our programs? Reach out to us — we would love to hear from you.
          </div>
          
          <Button variant="primary" to="#contact-form" className="shadow-md rounded-xl" >
            Get in Touch →
          </Button>
          
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;