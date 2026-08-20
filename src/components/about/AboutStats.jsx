import Container from '../ui/Container';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';

const AboutStats = () => {
  const stats = [
    { number: '1,000+', label: 'People', sublabel: 'Tested' },
    { number: '100+', label: 'Workhours', sublabel: 'Delivered' },
    { number: '50+', label: 'Currently', sublabel: 'Volunteers' },
    { number: 'Countless', label: 'Users', sublabel: 'Foreground' },
  ];

  return (
    <section className="section section--band py-8 md:py-10 ">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side - Heading and Button */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest mb-6">
              We are committed to building resilient minds and stronger communities every day.
            </h2>
            <Button variant="primary" to="/get-involved" className='rounded-xl'>
              Join Our Movement →
            </Button>
          </div>

          {/* Right Side - Stats with Vertical Dividers Only */}
          <div className="lg:w-1/2 ">
            <Eyebrow>Our Impact</Eyebrow>
            <div className="grid grid-cols-4 gap-0 mt-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`p-4 text-center ${
                    index < stats.length - 1 ? 'border-r border-line' : ''
                  }`}
                >
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold text-burgundy font-heading block">
                    {stat.number}
                  </span>
                  <span className="text-xs font-semibold text-ink block mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-ink-soft block">
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-ink-soft mt-6 text-start max-w-10/12">
              These numbers represent our growing impact and the communities we are privileged to serve.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStats;