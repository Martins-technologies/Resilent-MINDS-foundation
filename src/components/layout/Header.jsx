import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND_LOGO_ALT, BRAND_LOGO_SRC } from '../../assets/brandLogo';

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
    { to: '/about', label: 'About' },
    { to: '/programs', label: 'Programs' },
    { to: '/who-we-help', label: 'Who We Help' },
    { to: '/impact', label: 'Impact' },
    { to: '/resources', label: 'Resources' },
    { to: '/get-involved', label: 'Get Involved' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-ivory border-b border-line shadow-sm">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between py-4 md:py-5 gap-4">
          
          {/* Logo - Left Side */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={BRAND_LOGO_SRC} alt={BRAND_LOGO_ALT} className="h-16 w-auto object-contain" />
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

          {/* Right Side - Buttons (Desktop) + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            
            <div className="hidden lg:flex items-center gap-4">
              <Link 
                to="/contact" 
                className="px-5 py-2.5 text-sm font-bold border border-[#2E5D49] text-[#2E5D49] bg-transparent hover:bg-[#2E5D49] hover:text-white transition-all duration-200 rounded-lg"
              >
               Get Support
              </Link>
              <Link 
                to="/get-involved"
                className="px-5 py-2.5 text-sm font-bold bg-[#6E2839] text-white hover:bg-[#5a1f2e] transition-all duration-200 rounded-lg"
              >
                Donate
              </Link>
            </div>

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

        {/* Mobile Menu - Buttons at Bottom (Only Mobile) */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-line bg-ivory relative z-50">
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
              
              <div className="mt-4 pt-4 border-t border-line flex flex-col gap-3 px-4">
                <Link 
                  to="/contact" 
                  className="w-full text-center px-5 py-2.5 text-sm font-bold border border-[#2E5D49] text-[#2E5D49] bg-transparent hover:bg-[#2E5D49] hover:text-white transition-all duration-200 rounded-lg"
                  onClick={closeMenu}
                >
                   Get Support
                </Link>
                <Link 
                  to="/get-involved"
                  className="w-full text-center px-5 py-2.5 text-sm font-bold bg-[#6E2839] text-white hover:bg-[#5a1f2e] transition-all duration-200 rounded-lg"
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