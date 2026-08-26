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
      <div className={styles.banner}>
        <IconLeafDecor className={styles.leaf} color="#FEF9F2" opacity={0.16} />
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
            <div className={styles.statsCol}>
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
              <div className={styles.cta}>
                <Button to="/impact" variant="ivory" size="md" arrow>
                  See Our Impact
                </Button>
              </div>
            </div>
          </div>
        </div>
        <svg
          className={styles.wave}
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#faf7f2"
            d="M0 48C160 18 280 78 460 58C640 38 760 8 960 28C1140 46 1280 22 1440 40V90H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Impact;
