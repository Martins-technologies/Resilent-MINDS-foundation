import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import IconHandshake from '../icons/IconHandshake';
import IconMentor from '../icons/IconMentor';
import IconSponsor from '../icons/IconSponsor';
import IconSupportMission from '../icons/IconSupportMission';
import IconVolunteer from '../icons/IconVolunteer';
import styles from './GetInvolved.module.css';

const WAYS = [
  { label: 'Volunteer', to: '/get-involved', Icon: IconVolunteer },
  { label: 'Become a Mentor', to: '/get-involved', Icon: IconMentor },
  { label: 'Partner With Us', to: '/get-involved', Icon: IconHandshake },
  { label: 'Sponsor a Program', to: '/get-involved', Icon: IconSponsor },
  { label: 'Support Our Mission', to: '/get-involved', Icon: IconSupportMission },
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
          {WAYS.map((way) => (
            <li key={way.label}>
              <Link to={way.to} className={styles.item}>
                <span className={styles.icon}>
                  <way.Icon size={48} color="#2E5D49" />
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
