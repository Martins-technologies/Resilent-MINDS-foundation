import { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = 'service_sk7p1h8'; 
  const TEMPLATE_ID = 'template_mw17ujk';
  const USER_ID = 'jjZ3z_Iy5FqVvqjZH'; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const formData = new FormData(e.target);
    const templateParams = {
      from_name: formData.get('first-name') + ' ' + formData.get('last-name'),
      from_email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        setStatus('Your message was sent successfully! We will get back to you soon.');
        e.target.reset();
      })
      .catch((error) => {
        setStatus('Something went wrong. Please try again later.');
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Card className="w-full p-6 shadow-lg rounded-xl bg-white">
      <h3 className="font-body text-sm tracking-[0.04em] uppercase text-[#6E2839] mb-1">
        Send Us a Message
      </h3>
      <p className="text-sm mb-4 text-gray-600">Fill out the form below and we will get back to you as soon as possible.</p>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
          <div className="form-field">
            <label htmlFor="first-name" className="block text-xs font-semibold text-[#2E5D49] mb-1">
              First Name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C79949] focus:border-[#C79949]"
            />
          </div>
          <div className="form-field">
            <label htmlFor="last-name" className="block text-xs font-semibold text-[#2E5D49] mb-1">
              Last Name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C79949] focus:border-[#C79949]"
            />
          </div>
        </div>
        
        <div className="form-field mb-3.5">
          <label htmlFor="email" className="block text-xs font-semibold text-[#2E5D49] mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C79949] focus:border-[#C79949]"
          />
        </div>
        
        <div className="form-field mb-3.5">
          <label htmlFor="phone" className="block text-xs font-semibold text-[#2E5D49] mb-1">
            Phone Number (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C79949] focus:border-[#C79949]"
          />
        </div>
        
        <div className="form-field mb-4">
          <label htmlFor="message" className="block text-xs font-semibold text-[#2E5D49] mb-1">
            How can we help you?
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C79949] focus:border-[#C79949] resize-vertical"
          />
        </div>
        
        {/* Button with rounded-xl and smaller size */}
        <Button 
          variant="primary" 
          type="submit" 
          disabled={isSubmitting} 
          className={`rounded-xl py-2.5 px-6 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        {status && (
          <p className={`mt-3 text-sm font-medium ${status.includes('success') ? 'text-[#2E5D49]' : 'text-[#6E2839]'}`} role="status">
            {status}
          </p>
        )}
      </form>
    </Card>
  );
};

export default ContactForm;