import { Link } from 'react-router-dom';
import IconArrowRight from '../icons/IconArrowRight';
import SectionLabel from '../SectionLabel/SectionLabel';
import styles from './Programs.module.css';

const PROGRAMS = [
  {
    title: 'Resilient Minds Academy',
    desc: 'Education for emotional intelligence, confidence and wellbeing.',
    to: '/our-programs',
    cta: 'Learn More',
    image: '/books.jpeg',
    alt: 'Students engaged in a classroom learning session',
  },
  {
    title: 'Youth Strong Program',
    desc: 'Mentorship and skills for a brighter tomorrow.',
    to: '/our-programs',
    cta: 'Learn More',
    image: '/youth.webp',
    alt: 'Young people together mentoring outdoors',
  },
  {
    title: 'Community Healing Circles',
    desc: 'Safe spaces to connect, share and grow together.',
    to: '/our-programs',
    cta: 'Learn More',
    image: '/PROGRAME updated/community.webp',
    alt: 'People gathered in a healing circle conversation',
  },
  {
    title: 'Workplace Wellness Initiative',
    desc: 'Healthier, more resilient workplaces and teams.',
    to: '/our-programs',
    cta: 'Learn More',
    image: '/laptop.jpeg',
    alt: 'Colleagues collaborating in a healthy workplace',
  },
  {
    title: 'Hope Resource Hub',
    desc: 'Guides, tools and resources for everyday resilience.',
    to: '/resources',
    cta: 'Explore Resources',
    image: '/test.webp',
    alt: 'A small green sprout growing in soil during golden hour',
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
