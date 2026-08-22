import IconBrain from '../icons/IconBrain';
import IconTwoPeople from '../icons/IconTwoPeople';
import IconEmpowerment from '../icons/IconEmpowerment';
import IconHandsHeart from '../icons/IconHandsHeart';
import IconResilience from '../icons/IconResilience';
import styles from './FocusAreas.module.css';

const AREAS = [
  {
    Icon: IconBrain,
    title: 'Education',
    desc: 'Building knowledge and awareness for better mental wellness.',
    color: '#6E2839',
  },
  {
    Icon: IconTwoPeople,
    title: 'Connection',
    desc: 'Creating supportive communities where no one has to face challenges alone.',
    color: '#2E5D49',
  },
  {
    Icon: IconEmpowerment,
    title: 'Empowerment',
    desc: 'Equipping individuals with tools and skills to take control of their wellbeing.',
    color: '#C79949',
  },
  {
    Icon: IconHandsHeart,
    title: 'Support',
    desc: 'Providing compassionate resources and guidance at every step.',
    color: '#2E5D49',
  },
  {
    Icon: IconResilience,
    title: 'Resilience',
    desc: 'Helping individuals and communities thrive through every season.',
    color: '#6E2839',
  },
];

const FocusAreas = () => {
  return (
    <section className={styles.section} aria-label="Our core focus areas">
      <div className="rm-container">
        <div className={styles.header}>
          <span className={styles.headerLine} aria-hidden="true" />
          <h2 className={styles.heading}>Our Core Focus Areas</h2>
          <span className={styles.headerLine} aria-hidden="true" />
        </div>
        <ul className={styles.row}>
          {AREAS.map((area, index) => {
            const { Icon } = area;
            return (
              <li key={area.title} className={styles.item}>
                {index > 0 && <span className={styles.divider} aria-hidden="true" />}
                <div
                  className={styles.iconCircle}
                  style={{ backgroundColor: area.color }}
                >
                  <Icon size={28} color="#FFFFFF" strokeWidth={1.7} />
                </div>
                <h3 className={styles.title}>{area.title}</h3>
                <p className={styles.desc}>{area.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FocusAreas;
