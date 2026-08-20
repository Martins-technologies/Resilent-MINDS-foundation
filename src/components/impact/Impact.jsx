import Button from '../Button/Button';
import IconCalendar from '../icons/IconCalendar';
import IconHeartDove from '../icons/IconHeartDove';
import IconLeafDecor from '../icons/IconLeafDecor';
import IconPeople from '../icons/IconPeople';
import styles from './Impact.module.css';

const STATS = [
  { number: '1,000+', label: 'People Reached', Icon: IconPeople },
  { number: '100+', label: 'Workshops Delivered', Icon: IconCalendar },
  { number: '50+', label: 'Community Volunteers', Icon: IconHeartDove },
];

const Impact = () => {
  return (
    <section className={styles.section} aria-labelledby="impact-heading">
      <svg
        className={styles.wave}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#2E5D49"
          d="M0,80 C200,20 380,90 560,40 C820,-10 1040,70 1440,18 L1440,80 Z"
        />
      </svg>

      <div className={styles.banner}>
        <IconLeafDecor className={styles.leaf} color="#FEF9F2" opacity={0.12} />
        <div className={`rm-container ${styles.inner}`}>
          <div className={styles.top}>
            <div className={styles.copy}>
              <h2 id="impact-heading" className={styles.heading}>
                Our Impact
              </h2>
              <p className={styles.body}>
                Stronger support creates stronger families and stronger
                communities.
              </p>
            </div>
            <ul className={styles.stats}>
              {STATS.map((stat, index) => (
                <li key={stat.label} className={styles.stat}>
                  {index > 0 && <span className={styles.rule} aria-hidden="true" />}
                  <stat.Icon size={40} color="#C79949" />
                  <span className={styles.number}>{stat.number}</span>
                  <span className={styles.label}>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.cta}>
            <Button to="/impact" variant="ivory" size="md" arrow>
              See Our Impact
            </Button>
          </div>
        </div>
      </div>

      <svg
        className={styles.wave}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#2E5D49"
          d="M0,0 H1440 V10 C1240,70 980,0 720,36 C460,72 220,8 0,48 Z"
        />
      </svg>
    </section>
  );
};

export default Impact;
