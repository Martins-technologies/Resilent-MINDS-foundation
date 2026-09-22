import { Link } from 'react-router-dom';
import styles from './ProgramsList.module.css';

const GROUPS = [
  {
    id: 'mental-wellness',
    title: 'Mental Wellness Support',
    intro:
      'Education, healing spaces, and workplace programs that strengthen emotional health, confidence, and resilience.',
    programs: [
      {
        title: 'Resilient Minds Academy',
        desc: 'Education for emotional intelligence, confidence and wellbeing.',
        image: '/PROGRAME%20updated/mind.webp',
        link: '/contact-us',
      },
      {
        title: 'Community Healing Circles',
        desc: 'Safe spaces to connect, share and grow together.',
        image: '/PROGRAME%20updated/community.webp',
        link: '/contact-us',
      },
      {
        title: 'Workplace Wellness Initiative',
        desc: 'Healthier, more resilient workplaces and teams.',
        image: '/PROGRAME%20updated/workspace.webp',
        link: '/contact-us',
      },
      {
        title: 'Hope Resource Hub',
        desc: 'Guides, tools and resources for everyday resilience.',
        image: '/PROGRAME%20updated/hope.jpeg',
        link: '/resources',
      },
    ],
  },
  {
    id: 'family-support',
    title: 'Family Support',
    intro:
      'Practical support such as meals, essential supplies, and home necessities can reduce stress and strengthen family wellbeing.',
    link: { to: '/community-support', label: 'Community Support Services →' },
    programs: [],
  },
  {
    id: 'youth-programs',
    title: 'Youth Programs',
    intro: 'Mentorship and skills that help young people build confidence and a brighter tomorrow.',
    programs: [
      {
        title: 'Youth Strong Program',
        desc: 'Mentorship and skills for a brighter tomorrow.',
        image: '/PROGRAME%20updated/youth.webp',
        link: '/contact-us',
      },
    ],
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

        {GROUPS.map((group) => (
          <section key={group.id} id={group.id} className={styles.group} aria-labelledby={`${group.id}-heading`}>
            <h3 id={`${group.id}-heading`} className={styles.groupTitle}>
              {group.title}
            </h3>
            <p className={styles.groupIntro}>{group.intro}</p>
            {group.link ? (
              <Link to={group.link.to} className={styles.link}>
                {group.link.label}
              </Link>
            ) : null}
            {group.programs.length > 0 ? (
              <div className={styles.groupGrid}>
                {group.programs.map((program) => (
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
                      <h4 className={styles.title}>{program.title}</h4>
                      <p className={styles.desc}>{program.desc}</p>
                      <Link to={program.link} className={styles.link}>
                        Learn More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </section>
  );
};

export default ProgramsList;
