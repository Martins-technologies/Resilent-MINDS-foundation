import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import { FaQuoteLeft } from 'react-icons/fa';

const StoriesGrid = () => {
  return (
    <section className="section">
      <Container>
        <div className="mb-10">
          <Eyebrow>Real Stories</Eyebrow>
          <h2 className="mb-0">Real Stories. Real Change.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="card bg-[#F6EFE2] border-0">
              <FaQuoteLeft className="text-gold text-xl mb-3" />
              <p className="text-sm italic mb-3">
                After participating in one of our resilience workshops, a program participant discovered new coping strategies and rebuilt their confidence.
              </p>
              <p className="text-sm font-bold text-ink mb-0">&mdash; Program Participant</p>
            </div>
            <div className="w-full h-[140px] overflow-hidden rounded-lg">
              <img 
                src="/impact/3.webp"
                alt="Community members standing together"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="w-full h-[220px] overflow-hidden rounded-lg">
              <img 
                src="/impact/2.webp"
                alt="Two women in warm conversation"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="card border-0" style={{ backgroundColor: '#F1E6D2' }}>
              <FaQuoteLeft className="text-burgundy text-xl mb-3" />
              <p className="text-sm italic mb-3 text-burgundy font-semibold">
                Resilient Minds Foundation gave me tools and encouragement when I needed them most.
              </p>
              <p className="text-sm font-bold text-ink mb-0">&mdash; Program Participant</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="card bg-[#F6EFE2] border-0">
              <FaQuoteLeft className="text-gold text-xl mb-3" />
              <p className="text-sm italic mb-3">
                The programs helped our community feel more connected and supported.
              </p>
              <p className="text-sm font-bold text-ink mb-0">&mdash; Community Member</p>
            </div>
            <div className="w-full h-[140px] overflow-hidden rounded-lg">
              <img 
                src="/impact/4 (1).webp"
                alt="Small group seated in a support circle"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default StoriesGrid;