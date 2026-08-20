import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../../assets/logo.webp';

const Footer = () => {
  const footerLinks = {
    foundation: [
      { to: '/about', label: 'About Us' },
      { to: '/about#mission', label: 'Our Mission' },
      { to: '/about', label: 'Why We Exist' },
      { to: '/impact', label: 'Our Impact' },
      { to: '/about', label: 'Transparency' },
    ],
    programs: [
      { to: '/programs', label: 'All Programs' },
      { to: '/programs', label: 'Youth Programs' },
      { to: '/programs', label: 'Community Programs' },
      { to: '/programs', label: 'Workplace Wellness' },
      { to: '/resources', label: 'Hope Resource Hub' },
    ],
    getInvolved: [
      { to: '/get-involved', label: 'Volunteer' },
      { to: '/get-involved', label: 'Become a Mentor' },
      { to: '/get-involved', label: 'Community Ambassador' },
      { to: '/get-involved', label: 'Partner With Us' },
      { to: '/get-involved', label: 'Sponsor a Program' },
    ],
  };

  const socialLinks = [
    { icon: FaFacebook, label: 'Facebook' },
    { icon: FaInstagram, label: 'Instagram' },
    { icon: FaLinkedin, label: 'LinkedIn' },
    { icon: FaYoutube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-forest-dark text-[#dfe8e2] pt-14 pb-6">
      <div className="container text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/15">
          {/* Brand */}
          <div className="lg:col-span-1.5">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="Resilient Minds Foundation logo" className="h-20 w-50 object-cover rounded-lg bg-white p-1" />
            </Link>
            <div className="text-[#c9d6cf] text-sm mt-3 max-w-sm">
              Empowering individuals and communities with the support, education, and resources to build resilience and create hopeful futures.
            </div>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-sm hover:bg-gold hover:border-gold hover:text-forest-dark transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Foundation Links */}
          <div>
            <div className="font-body text-sm tracking-[0.06em] uppercase text-white mb-3.5">
              Foundation
            </div>
            <ul className="space-y-2.5">
              {footerLinks.foundation.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-[#c9d6cf] text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <div className="font-body text-sm tracking-[0.06em] uppercase text-white mb-3.5">
              Programs
            </div>
            <ul className="space-y-2.5">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-[#c9d6cf] text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <div className="font-body text-sm tracking-[0.06em] uppercase text-white mb-3.5">
              Get Involved
            </div>
            <ul className="space-y-2.5">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-[#c9d6cf] text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Now with proper border and rounded corners */}
          <div className="border-2 border-gold rounded-2xl p-5 bg-white/5">
            <div className="font-body text-sm tracking-[0.06em] uppercase text-white mb-3.5">
              Stay Connected
            </div>
            <div className="text-[#c9d6cf] text-sm">
              Get updates on programs, resources, and ways to help.
            </div>
            <form
              className="flex items-center mt-2.5 rounded-full overflow-hidden bg-white/10"
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 min-w-0 border-none bg-transparent px-4 py-3 text-white text-sm placeholder-[#a9baaf] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex-shrink-0 border-none bg-gold text-forest-dark px-4 py-3 font-bold cursor-pointer hover:bg-amber-500 transition-colors rounded-full"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2 pt-5 text-sm text-[#a9baaf]">
          <div>&copy; 2026 Resilient Minds Foundation. All rights reserved.</div>
          <div>Stronger Minds. Brighter Futures.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;