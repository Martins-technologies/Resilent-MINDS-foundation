import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BRAND_LOGO_ALT, BRAND_LOGO_SRC } from '../../assets/brandLogo';
import Button from '../Button/Button';
import IconClose from '../icons/IconClose';
import IconMenu from '../icons/IconMenu';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/who-we-help', label: 'Who We Help' },
  { to: '/impact', label: 'Impact' },
  { to: '/resources', label: 'Resources' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact-us', label: 'Contact Us' },
];

const PROGRAM_MENU = [
  { to: '/community-support', label: 'Community Support Services' },
  { to: '/get-involved', label: 'Volunteer / Get Involved' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const programsActive = pathname === '/our-programs' || pathname === '/community-support';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  const beforePrograms = NAV_LINKS.slice(0, 2);
  const afterPrograms = NAV_LINKS.slice(2);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logoLink} onClick={close}>
          <img
            src={BRAND_LOGO_SRC}
            alt={BRAND_LOGO_ALT}
            className={styles.logo}
            width={220}
            height={88}
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {beforePrograms.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}

          <div className={styles.dropdownWrap}>
            <NavLink
              to="/our-programs"
              className={`${styles.link} ${programsActive ? styles.active : ''}`}
            >
              Programs
            </NavLink>
            <div className={styles.dropdown}>
              {PROGRAM_MENU.map((item) => (
                <NavLink key={item.label} to={item.to} className={styles.dropdownLink}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {afterPrograms.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button to="/contact-us" variant="outlineForest" size="sm" className={styles.navBtn}>
            Get Support
          </Button>
          <Button to="/get-involved/donation-collection" variant="primary" size="sm" className={styles.navBtn}>
            Donate
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <IconClose size={28} color="#2E5D49" />
          ) : (
            <IconMenu size={28} color="#2E5D49" />
          )}
        </button>
      </div>

      {open && (
        <div className={styles.mobilePanel}>
          <nav className={styles.mobileNav} aria-label="Mobile">
            {beforePrograms.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${styles.mobileLink} ${isActive ? styles.mobileActive : ''}`
                }
                end={link.to === '/'}
                onClick={close}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/our-programs"
              className={`${styles.mobileLink} ${programsActive ? styles.mobileActive : ''}`}
              onClick={close}
            >
              Programs
            </NavLink>
            <div className={styles.mobileSub}>
              {PROGRAM_MENU.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={styles.mobileSubLink}
                  onClick={close}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            {afterPrograms.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${styles.mobileLink} ${isActive ? styles.mobileActive : ''}`
                }
                onClick={close}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className={styles.mobileActions}>
            <Button to="/contact-us" variant="outlineForest" size="md" className={styles.navBtn} onClick={close}>
              Get Support
            </Button>
            <Button to="/get-involved/donation-collection" variant="primary" size="md" className={styles.navBtn} onClick={close}>
              Donate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
