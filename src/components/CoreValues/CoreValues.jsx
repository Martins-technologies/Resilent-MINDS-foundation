import styles from './CoreValues.module.css';
import Eyebrow from '../ui/Eyebrow';

const VALUES = [
  {
    title: 'Compassion',
    desc: 'We meet people where they are with empathy, kindness, and understanding.',
    logo: '/compasion.jfif',
  },
  {
    title: 'Resilience',
    desc: 'We believe every person has the ability to recover, adapt, and grow through adversity.',
    logo: '/Resilliance.jfif',
  },
  {
    title: 'Empowerment',
    desc: 'We provide tools, education, and opportunities that help people take control of their wellbeing.',
    logo: '/empowerment1.webp',
  },
  {
    title: 'Inclusion',
    desc: 'We create safe spaces where everyone feels valued, respected, and supported.',
    logo: '/empowerment.webp',
  },
  {
    title: 'Hope',
    desc: 'We believe hope is the foundation for healing, transformation, and positive change.',
    logo: '/hope.webp',
  },
  {
    title: 'Community',
    desc: 'We strengthen connections because no one should face life\'s challenges alone.',
    logo: '/community.webp',
  },
];

const CoreValues = () => {
  return (
    <section className={styles.section} aria-label="Core values">
      <div className="rm-container">
        <div className={styles.header}>
          <Eyebrow>Our Core Values</Eyebrow>
        </div>
        <ul className={styles.row}>
          {VALUES.map((value, index) => (
            <li key={value.title} className={styles.item}>
              {index > 0 && <span className={styles.divider} aria-hidden="true" />}
              <div className={styles.iconWrap}>
                <img
                  src={value.logo}
                  alt={value.title}
                  className={styles.logo}
                />
              </div>
              <h3 className={styles.title}>{value.title}</h3>
              <p className={styles.desc}>{value.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoreValues;
