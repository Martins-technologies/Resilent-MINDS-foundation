import Card from '../ui/Card';
import Eyebrow from '../ui/Eyebrow';
import FAQItem from '../ui/FAQItem';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How can I get support for myself or someone I know?',
      answer: 'Reach out through this contact form or the Get Support option in the header, and our team will follow up with next steps and resources.',
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
      answer: 'You can give directly from the Get Involved page, or contact us to discuss sponsoring a specific program.',
    },
    {
      question: 'How do I stay updated on events and programs?',
      answer: 'Subscribe to our newsletter in the footer or follow us on social media for the latest updates.',
    },
  ];

  return (
    <Card className="mt-6">
      <Eyebrow>Frequently Asked Questions</Eyebrow>
      <div className="mt-2.5">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Card>
  );
};

export default FAQSection;