import { Link } from 'react-router-dom';
import IconArrowRight from '../icons/IconArrowRight';
import SectionLabel from '../SectionLabel/SectionLabel';
import styles from './Programs.module.css';

const PROGRAMS = [
  {
    title: 'Resilient Minds Academy',
    desc: 'Education for emotional intelligence, confidence and wellbeing.',
    to: '/programs',
    cta: 'Learn More',
    image: 'https://picsum.photos/id/24/400/300',
    alt: 'Placeholder — books and a plant on a study desk',
  },
  {
    title: 'Youth Strong Program',
    desc: 'Mentorship and skills for a brighter tomorrow.',
    to: '/programs',
    cta: 'Learn More',
    image: 'https://picsum.photos/id/1011/400/300',
    alt: 'Placeholder — young people together outdoors',
  },
  {
    title: 'Community Healing Circles',
    desc: 'Safe spaces to connect, share and grow together.',
    to: '/programs',
    cta: 'Learn More',
    image: 'https://picsum.photos/id/996/400/300',
    alt: 'Placeholder — people gathered in a circle',
  },
  {
    title: 'Workplace Wellness Initiative',
    desc: 'Healthier, more resilient workplaces and teams.',
    to: '/programs',
    cta: 'Learn More',
    image: 'https://picsum.photos/id/180/400/300',
    alt: 'Placeholder — laptop on a bright office desk',
  },
  {
    title: 'Hope Resource Hub',
    desc: 'Guides, tools and resources for everyday resilience.',
    to: '/resources',
    cta: 'Explore Resources',
    image: 'https://picsum.photos/id/28/400/300',
    alt: 'Placeholder — plant and workspace still life',
  },
];

const Programs = () => {
  return (
    <section className={styles.section} aria-labelledby="programs-heading">
      <div className="rm-container">
        <header className={styles.header}>
          <SectionLabel lined align="center">
            Our Programs
          </SectionLabel>
          <h2 id="programs-heading" className={styles.heading}>
            Creating Real Change in Our Communities
          </h2>
          <p className={styles.sub}>
            Practical support. Meaningful connection. Lasting impact.
          </p>
        </header>

        <div className={styles.grid}>
          {PROGRAMS.map((program) => (
            <article key={program.title} className={styles.card}>
              <img
                src={program.image}
                alt={program.alt}
                className={styles.image}
                width={400}
                height={300}
              />
              <div className={styles.body}>
                <h3 className={styles.title}>{program.title}</h3>
                <p className={styles.desc}>{program.desc}</p>
                <Link to={program.to} className={styles.link}>
                  {program.cta}
                  <IconArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
