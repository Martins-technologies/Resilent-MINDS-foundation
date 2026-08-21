import Button from '../Button/Button';
import IconCalendar from '../icons/IconCalendar';
import IconHeartDove from '../icons/IconHeartDove';
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
      </div>

    </section>
  );
};

export default Impact;
