import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './GetInvolved.module.css';

const WAYS = [
  { label: 'Volunteer',          to: '/get-involved', icon: '/volunteer.svg' },
  { label: 'Become a Mentor',    to: '/get-involved', icon: '/becomea mentor.svg' },
  { label: 'Partner With Us',    to: '/get-involved', icon: '/partnerwithus.svg' },
  { label: 'Sponsor a Program',  to: '/get-involved', icon: '/sponsoraprogram.svg' },
  { label: 'Support Our Mission',to: '/get-involved', icon: '/supportourmission.svg' },
];

const GetInvolved = () => {
  return (
    <section className={styles.section} aria-labelledby="get-involved-heading">
      <div className="rm-container">
        <div className={styles.header}>
          <div>
            <h2 id="get-involved-heading" className={styles.heading}>
              Get Involved
            </h2>
            <p className={styles.sub}>
              Together, we can build stronger minds and brighter futures.
            </p>
          </div>
          <Button to="/get-involved" variant="gold" size="md" arrow>
            Join Our Movement
          </Button>
        </div>

        <ul className={styles.row}>
          {WAYS.map((way, i) => (
            <li key={way.label} className={styles.cell}>
              {i > 0 && <span className={styles.divider} aria-hidden="true" />}
              <Link to={way.to} className={styles.item}>
                <span className={styles.icon}>
                  <img src={way.icon} alt="" aria-hidden="true" className={styles.iconImg} />
                </span>
                <span className={styles.label}>{way.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GetInvolved;
