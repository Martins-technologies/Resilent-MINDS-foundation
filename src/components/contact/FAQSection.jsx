import Container from '../ui/Container';
import Card from '../ui/Card';
import Eyebrow from '../ui/Eyebrow';
import FAQItem from '../ui/FAQItem';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How can I get support for myself or someone I know?',
      answer: 'Reach out through this contact form or use the Get Support button in the navigation bar, and our team will follow up with next steps and resources.',
    },
    {
      question: 'How do I get involved or volunteer?',
      answer: 'Visit the Get Involved page to see current volunteer, mentorship, and ambassador opportunities.',
    },
    {
      question: 'Can my organization partner with Resilient Minds Foundation?',
      answer: 'Yes — send us a message with a bit about your organization and we\'ll be in touch to discuss partnership options.',
    },
    {
      question: 'How can I donate or sponsor a program?',
      answer: 'You can donate food, furniture, and other approved goods through our material-donation program on the Donation Collection page, or contact us to discuss sponsoring a specific program.',
    },
    {
      question: 'How do I stay updated on events and programs?',
      answer: 'Subscribe to our newsletter in the footer or follow us on social media for the latest updates.',
    },
  ];

  return (
    <section className="section py-12 bg-[#FEF9F2]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Left Side: FAQ Content */}
          <Card className="mt-0 p-6 md:p-8 shadow-sm !bg-[#F7F3EA] border border-[#DED7C9]">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <div className="mt-2.5">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Card>

          {/* Right Side: Rounded contact image */}
          <div className="w-full aspect-[813/427] rounded-2xl overflow-hidden shadow-sm border border-[#DED7C9]">
            <img
              src="/contact/cup.webp"
              alt="A comforting cup representing care and support"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FAQSection;