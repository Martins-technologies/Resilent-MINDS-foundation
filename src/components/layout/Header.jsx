import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/programs', label: 'Programs' },
    { to: '/who-we-help', label: 'Who We Help' },
    { to: '/impact', label: 'Impact' },
    { to: '/resources', label: 'Resources' },
    { to: '/get-involved', label: 'Get Involved' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ivory border-b border-line shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5 gap-6">
          
          {/* Logo - Left Side */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="Resilient Minds Foundation" className="h-12 w-auto" />
          </Link>

          {/* Navigation - Center */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium text-ink whitespace-nowrap py-2 border-b-2 border-transparent hover:text-burgundy hover:border-gold transition-all duration-200 ${
                    isActive ? 'text-burgundy border-gold' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Side - Only Mobile Menu Button (No Buttons) */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-line rounded-lg transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} className="text-forest" /> : <Menu size={28} className="text-forest" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Buttons at Bottom */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-line bg-ivory">
            <div className="flex flex-col gap-1">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-lg text-ink font-medium hover:bg-line hover:text-burgundy transition-colors ${
                      isActive ? 'text-burgundy bg-line' : ''
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}
              
              {/* Buttons at Bottom - Only in Mobile */}
              <div className="mt-4 pt-4 border-t border-line flex flex-col gap-3 px-4">
                <Link 
                  to="/contact" 
                  className="w-full text-center px-5 py-3 text-sm font-semibold border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white transition-all duration-200 rounded-full"
                  onClick={closeMenu}
                >
                  Get Support
                </Link>
                <Link 
                  to="/get-involved"
                  className="w-full text-center px-5 py-3 text-sm font-semibold bg-gold text-forest-dark hover:bg-[#B8973A] transition-all duration-200 rounded-full shadow-md"
                  onClick={closeMenu}
                >
                  Donate
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;