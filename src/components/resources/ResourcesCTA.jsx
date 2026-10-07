import Button from '../ui/Button';
import Container from '../ui/Container';
import { FaEnvelope } from 'react-icons/fa';

const ResourcesCTA = () => {
  return (
    <>
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
              to="/contact-us"
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