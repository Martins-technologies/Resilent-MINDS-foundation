import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../../assets/logo.png';

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
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/15">
          {/* Brand */}
          <div className="lg:col-span-1.5">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="Resilient Minds Foundation logo" className="h-11 w-auto rounded-lg bg-white p-1" />
              <div className="font-heading leading-tight">
                <strong className="block text-white text-base md:text-lg">RESILIENT</strong>
                <span className="block text-white text-base md:text-lg font-bold">MINDS</span>
                <small className="block font-body text-[0.6rem] tracking-[0.14em] text-gold uppercase mt-0.5">Foundation</small>
              </div>
            </Link>
            <p className="text-[#c9d6cf] text-sm mt-3 max-w-sm">
              Empowering individuals and communities with the support, education, and resources to build resilience and create hopeful futures.
            </p>
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
            <h4 className="font-body text-sm tracking-[0.06em] uppercase text-gold mb-3.5">Foundation</h4>
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
            <h4 className="font-body text-sm tracking-[0.06em] uppercase text-gold mb-3.5">Programs</h4>
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
            <h4 className="font-body text-sm tracking-[0.06em] uppercase text-gold mb-3.5">Get Involved</h4>
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

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-sm tracking-[0.06em] uppercase text-gold mb-3.5">Stay Connected</h4>
            <p className="text-[#c9d6cf] text-sm">Get updates on programs, resources, and ways to help.</p>
            <form className="flex mt-2.5 rounded-full overflow-hidden bg-white/10" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 border-none bg-transparent px-4 py-3 text-white text-sm placeholder-[#a9baaf] focus:outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="border-none bg-gold text-forest-dark px-4 font-bold cursor-pointer">
                →
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2 pt-5 text-sm text-[#a9baaf]">
          <p>&copy; 2026 Resilient Minds Foundation. All rights reserved.</p>
          <p>Stronger Minds. Brighter Futures.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;