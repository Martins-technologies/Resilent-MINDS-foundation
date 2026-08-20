import IconCompassion from '../icons/IconCompassion';
import IconEmpowerment from '../icons/IconEmpowerment';
import IconHope from '../icons/IconHope';
import IconInclusion from '../icons/IconInclusion';
import IconResilience from '../icons/IconResilience';
import styles from './CoreValues.module.css';

const VALUES = [
  {
    title: 'Compassion',
    desc: 'We meet people where they are with empathy.',
    Icon: IconCompassion,
  },
  {
    title: 'Resilience',
    desc: 'We believe every person can recover and grow.',
    Icon: IconResilience,
  },
  {
    title: 'Empowerment',
    desc: 'We provide tools for a healthier, stronger future.',
    Icon: IconEmpowerment,
  },
  {
    title: 'Inclusion',
    desc: 'Everyone is valued, respected and supported.',
    Icon: IconInclusion,
  },
  {
    title: 'Hope',
    desc: 'Hope is the foundation for healing and change.',
    Icon: IconHope,
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
                <value.Icon size={48} color="#2E5D49" />
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
