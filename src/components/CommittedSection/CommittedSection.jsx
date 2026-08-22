import { Link } from 'react-router-dom';
import IconCalendar from '../icons/IconCalendar';
import IconHeart from '../icons/IconHeart';
import IconPeople from '../icons/IconPeople';
import IconSupportMission from '../icons/IconSupportMission';
import styles from './CommittedSection.module.css';

const STATS = [
  {
    Icon: IconPeople,
    number: '1,000+',
    label: 'People\nReached',
  },
  {
    Icon: IconCalendar,
    number: '100+',
    label: 'Workshops\nDelivered',
  },
  {
    Icon: IconSupportMission,
    number: '50+',
    label: 'Community\nVolunteers',
  },
  {
    Icon: IconHeart,
    number: 'Countless',
    label: 'Lives\nEncouraged',
  },
];

const CommittedSection = () => {
  return (
    <section className={styles.section} aria-label="Our commitment and impact">
      <img
        src="/about-committed.png"
        alt=""
        className={styles.bg}
        aria-hidden="true"
      />

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.leftContent}>
            <h2 className={styles.heading}>
              We are committed to building resilient minds and stronger
              communities every day.
            </h2>
            <Link to="/get-involved" className={styles.btn}>
              Join Our Movement&nbsp;→
            </Link>
          </div>
        </div>

        <div className={styles.center} aria-hidden="true" />

        <div className={styles.right}>
          <span className={styles.impactLabel}>Our Impact</span>
          <div className={styles.statsRow}>
            {STATS.map(({ Icon, number, label }) => (
              <div key={label} className={styles.stat}>
                <Icon size={32} color="#C79949" strokeWidth={1.6} className={styles.statIcon} />
                <span className={styles.statNumber}>{number}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
          <p className={styles.footnote}>
            These numbers represent our growing impact and the communities we
            are privileged to serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommittedSection;
