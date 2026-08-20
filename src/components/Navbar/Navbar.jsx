import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoPlaceholder from '../../assets/logo-placeholder.svg';
import Button from '../Button/Button';
import IconClose from '../icons/IconClose';
import IconMenu from '../icons/IconMenu';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/who-we-help', label: 'Who We Help' },
  { to: '/impact', label: 'Impact' },
  { to: '/resources', label: 'Resources' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logoLink} onClick={close}>
          {/* SWAP: replace logo-placeholder.svg with the original logo asset */}
          <img
            src={logoPlaceholder}
            alt="Resilient Minds Foundation"
            className={styles.logo}
            width={160}
            height={80}
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
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
        </nav>

        <div className={styles.actions}>
          <Button to="/contact" variant="outline" size="sm">
            Get Support
          </Button>
          <Button to="/get-involved" variant="primary" size="sm" heart>
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
            {NAV_LINKS.map((link) => (
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
          </nav>
          <div className={styles.mobileActions}>
            <Button to="/contact" variant="outline" size="md" onClick={close}>
              Get Support
            </Button>
            <Button to="/get-involved" variant="primary" size="md" heart onClick={close}>
              Donate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
