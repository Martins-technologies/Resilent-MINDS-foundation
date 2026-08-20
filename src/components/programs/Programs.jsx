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
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&h=300&q=80',
    alt: 'Students engaged in a classroom learning session',
  },
  {
    title: 'Youth Strong Program',
    desc: 'Mentorship and skills for a brighter tomorrow.',
    to: '/programs',
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=400&h=300&q=80',
    alt: 'Young people together mentoring outdoors',
  },
  {
    title: 'Community Healing Circles',
    desc: 'Safe spaces to connect, share and grow together.',
    to: '/programs',
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=300&q=80',
    alt: 'People gathered in a healing circle conversation',
  },
  {
    title: 'Workplace Wellness Initiative',
    desc: 'Healthier, more resilient workplaces and teams.',
    to: '/programs',
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&h=300&q=80',
    alt: 'Colleagues collaborating in a healthy workplace',
  },
  {
    title: 'Hope Resource Hub',
    desc: 'Guides, tools and resources for everyday resilience.',
    to: '/resources',
    cta: 'Explore Resources',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&h=300&q=80',
    alt: 'Books and resources for mental wellness',
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
