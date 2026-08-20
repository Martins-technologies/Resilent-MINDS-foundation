import ContactHero from '../components/contact/ContactHero';
import WaysToConnect from '../components/contact/WaysToConnect';
import ContactForm from '../components/contact/ContactForm';
import FAQSection from '../components/contact/FAQSection';
import Container from '../components/ui/Container';
import Grid from '../components/ui/Grid';
import Card from '../components/ui/Card';
import Eyebrow from '../components/ui/Eyebrow';
import { FaHeart, FaShieldAlt, FaClock, FaExclamationTriangle } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <WaysToConnect />
      <section className="section">
        <Container>
          <Grid cols={2} className="items-start">
            <ContactForm />
            <div>
              <Card className="bg-[#F6EFE2] border-none">
                <Eyebrow>We Care. We Respond.</Eyebrow>
                <div className="mt-2.5 space-y-4">
                  
                  {/* 1. Compassionate Support - Gold Icon */}
                  <div className="flex items-start gap-3  my-8">
                    <div className="w-15 h-15 rounded-full bg-[#C79949] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <FaHeart className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="font-bold text-ink mb-0.5">Compassionate Support</p>
                      <p className="text-sm">Your questions and concerns matter to us. Our team is here to listen and guide you.</p>
                    </div>
                  </div>

                  {/* 2. Confidential & Respectful - Forest Green Icon */}
                  <div className="flex items-start gap-3  my-8">
                    <div className="w-15 h-15 rounded-full bg-[#2E5D49] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <FaShieldAlt className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="font-bold text-ink mb-0.5">Confidential &amp; Respectful</p>
                      <p className="text-sm">We treat every message with the utmost respect, privacy, and care.</p>
                    </div>
                  </div>

                  {/* 3. Timely Response - Burgundy Icon */}
                  <div className="flex items-start gap-3  my-8">
                    <div className="w-15 h-15 rounded-full bg-[#6E2839] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <FaClock className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="font-bold text-ink mb-0.5">Timely Response</p>
                      <p className="text-sm">We strive to respond to all inquiries as quickly as possible.</p>
                    </div>
                  </div>

                </div>
                
                {/* Emergency Warning - Red/Gold Border Icon */}
                <div className="flex items-start gap-3 my-8 pt-3.5 border-t border-line">
                  <div className="w-15 h-15 rounded-full bg-[#C79949] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <FaExclamationTriangle className="text-white text-sm" />
                  </div>
                  <p className="text-sm">
                    If this is an emergency, please call your local emergency services or visit the nearest hospital.
                  </p>
                </div>
              </Card>
            </div>
          </Grid>
          <FAQSection />

        </Container>
      </section>
    </>
  );
};

export default ContactPage;