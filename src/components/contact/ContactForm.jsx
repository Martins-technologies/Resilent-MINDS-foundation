import { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Eyebrow from '../ui/Eyebrow';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — this is a demo form. Connect it to your email/CRM endpoint to go live.');
  };

  return (
    <Card className="w-full">
      <h3 className="font-body text-sm tracking-[0.04em] uppercase text-ink mb-1">
        Send Us a Message
      </h3>
      <p className="text-sm mb-4">Fill out the form below and we&rsquo;ll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
          <div className="form-field">
            <label htmlFor="first-name" className="block text-sm font-semibold text-ink mb-1.5">
              First Name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              required
              className="w-full px-3.5 py-3 border border-line rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
            />
          </div>
          <div className="form-field">
            <label htmlFor="last-name" className="block text-sm font-semibold text-ink mb-1.5">
              Last Name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              required
              className="w-full px-3.5 py-3 border border-line rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
            />
          </div>
        </div>
        <div className="form-field mb-3.5">
          <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-3.5 py-3 border border-line rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
          />
        </div>
        <div className="form-field mb-3.5">
          <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-1.5">
            Phone Number (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full px-3.5 py-3 border border-line rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
          />
        </div>
        <div className="form-field mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1.5">
            How can we help you?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-3.5 py-3 border border-line rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold resize-vertical"
          />
        </div>
        <Button variant="primary" type="submit">
          Send Message →
        </Button>
        {status && (
          <p className="mt-3 text-sm text-forest" role="status">
            {status}
          </p>
        )}
      </form>
    </Card>
  );
};

export default ContactForm;