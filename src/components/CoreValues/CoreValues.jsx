import styles from './CoreValues.module.css';

const VALUES = [
  {
    title: 'Compassion',
    desc: 'We meet people where they are with empathy.',
    logo: '/compasion.jfif',
  },
  {
    title: 'Resilience',
    desc: 'We believe every person can recover and grow.',
    logo: '/Resilliance.jfif',
  },
  {
    title: 'Empowerment',
    desc: 'We provide tools for a healthier, stronger future.',
    logo: '/empowerment.webp',
  },
  {
    title: 'Inclusion',
    desc: 'Everyone is valued, respected and supported.',
    logo: '/icons-04.svg',
  },
  {
    title: 'Hope',
    desc: 'Hope is the foundation for healing and change.',
    logo: '/icons-05.svg',
  },
];

const CoreValues = () => {
  return (
    <section className={styles.section} aria-label="Core values">
      <div className="rm-container">
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
