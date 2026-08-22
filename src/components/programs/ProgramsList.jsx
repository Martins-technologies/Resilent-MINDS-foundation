import { Link } from 'react-router-dom';
import styles from './ProgramsList.module.css';

const PROGRAMS = [
  {
    title: 'Resilient Minds Academy',
    desc: 'Education for emotional intelligence, confidence and wellbeing.',
    image: '/PROGRAME%20updated/mind.webp',
    link: '/contact',
  },
  {
    title: 'Youth Strong Program',
    desc: 'Mentorship and skills for a brighter tomorrow.',
    image: '/PROGRAME%20updated/youth.webp',
    link: '/contact',
  },
  {
    title: 'Community Healing Circles',
    desc: 'Safe spaces to connect, share and grow together.',
    image: '/PROGRAME%20updated/community.webp',
    link: '/contact',
  },
  {
    title: 'Workplace Wellness Initiative',
    desc: 'Healthier, more resilient workplaces and teams.',
    image: '/PROGRAME%20updated/workspace.webp',
    link: '/contact',
  },
  {
    title: 'Hope Resource Hub',
    desc: 'Guides, tools and resources for everyday resilience.',
    image: '/PROGRAME%20updated/hope.jpeg',
    link: '/resources',
  },
];

const ProgramsList = () => {
  return (
    <section id="programs-list" className={styles.section} aria-labelledby="programs-list-heading">
      <div className="rm-container">
        <header className={styles.header}>
          <p className={styles.label}>Our Programs</p>
          <h2 id="programs-list-heading" className={styles.heading}>
            Our Programs
          </h2>
          <span className={styles.underline} aria-hidden="true" />
        </header>

        <div className={styles.grid}>
          {PROGRAMS.map((program) => (
            <article key={program.title} className={styles.card}>
              <img
                src={program.image}
                alt={program.title}
                loading="lazy"
                className={styles.image}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x400/FEF9F2/2E5D49?text=${encodeURIComponent(program.title)}`;
                }}
              />
              <div className={styles.body}>
                <h3 className={styles.title}>{program.title}</h3>
                <p className={styles.desc}>{program.desc}</p>
                <Link to={program.link} className={styles.link}>
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsList;
