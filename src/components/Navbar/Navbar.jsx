import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BRAND_LOGO_ALT, BRAND_LOGO_SRC } from '../../assets/brandLogo';
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
          <img
            src={BRAND_LOGO_SRC}
            alt={BRAND_LOGO_ALT}
            className={styles.logo}
            width={220}
            height={88}
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
          <Button to="/contact" variant="outlineForest" size="sm" className={styles.navBtn}>
            Get Support
          </Button>
          <Button to="/get-involved" variant="primary" size="sm" className={styles.navBtn}>
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
            <Button to="/contact" variant="outlineForest" size="md" className={styles.navBtn} onClick={close}>
              Get Support
            </Button>
            <Button to="/get-involved" variant="primary" size="md" className={styles.navBtn} onClick={close}>
              Donate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
