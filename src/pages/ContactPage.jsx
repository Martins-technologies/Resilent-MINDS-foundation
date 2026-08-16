import ContactHero from '../components/contact/ContactHero';
import WaysToConnect from '../components/contact/WaysToConnect';
import ContactForm from '../components/contact/ContactForm';
import FAQSection from '../components/contact/FAQSection';
import Container from '../components/ui/Container';
import Grid from '../components/ui/Grid';
import Card from '../components/ui/Card';
import Eyebrow from '../components/ui/Eyebrow';

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
                <div className="mt-2.5">
                  <p className="font-bold text-ink mb-0.5">Compassionate Support</p>
                  <p className="text-sm">Your questions and concerns matter to us. Our team is here to listen and guide you.</p>
                </div>
                <div className="mt-4">
                  <p className="font-bold text-ink mb-0.5">Confidential &amp; Respectful</p>
                  <p className="text-sm">We treat every message with the utmost respect, privacy, and care.</p>
                </div>
                <div className="mt-4">
                  <p className="font-bold text-ink mb-0.5">Timely Response</p>
                  <p className="text-sm">We strive to respond to all inquiries as quickly as possible.</p>
                </div>
                <p className="text-sm border-t border-line pt-3.5 mt-3.5">
                  If this is an emergency, please call your local emergency services or visit the nearest hospital.
                </p>
              </Card>
              <FAQSection />
            </div>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;