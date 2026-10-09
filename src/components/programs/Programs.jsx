import { Link } from 'react-router-dom';
import IconArrowRight from '../icons/IconArrowRight';
import SectionLabel from '../SectionLabel/SectionLabel';
import styles from './Programs.module.css';

const COMMUNITY_PROGRAMS = [
  {
    title: 'Youth Strong Program',
    desc: 'Mentorship and skills for a brighter tomorrow.',
    image: '/updated/01_Home_Youth_Strong_Program.webp',
    alt: 'Students collaborating around a table in a library classroom',
    width: 1473,
    height: 1068,
    full: true,
  },
  {
    title: 'Community Healing Circles',
    desc: 'Safe spaces to connect, share and grow together.',
    image: '/updated/02_Home_Community_Healing_Circles.webp',
    alt: 'People gathered in a community healing circle',
    width: 1536,
    height: 1024,
    full: true,
  },
  {
    title: 'Workplace Wellness Initiative',
    desc: 'Healthier, more resilient workplaces and teams.',
    image: '/updated/03_Home_Workplace_Wellness_Initiative.webp',
    alt: 'Colleagues in a workplace wellness session',
    width: 1536,
    height: 1024,
    full: true,
  },
];

const RESOURCE_HUB = {
  title: 'Hope Resource Hub',
  desc: 'Guides, tools and resources for everyday resilience.',
  to: '/resources',
  cta: 'Explore Resources',
  image: '/test.webp',
  alt: 'A small green sprout growing in soil during golden hour',
};

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

        <div className={styles.layout}>
          {/* Grouped Programs Area */}
          <div className={styles.programsGroup}>
            <div className={styles.programsGrid}>
              {COMMUNITY_PROGRAMS.map((program) => (
                <div key={program.title} className={styles.programItem}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={program.image}
                      alt={program.alt}
                      width={program.width}
                      height={program.height}
                      style={program.full ? {
                        width: '100%',
                        height: 'auto',
                        aspectRatio: `${program.width} / ${program.height}`,
                        objectFit: 'contain',
                        objectPosition: 'center',
                      } : undefined}
                      className={program.full ? `${styles.image} ${styles.imageFull}` : styles.image}
                    />
                  </div>
                  <div className={styles.itemBody}>
                    <h3 className={styles.title}>{program.title}</h3>
                    <p className={styles.desc}>{program.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.groupFooter}>
              <Link to="/our-programs" className={styles.groupCta}>
                <span>Learn More</span>
                <IconArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Hope Resource Hub - Separate */}
          <article className={styles.resourceCard}>
            <div className={styles.imageWrapper}>
              <img
                src={RESOURCE_HUB.image}
                alt={RESOURCE_HUB.alt}
                className={styles.image}
                width={400}
                height={300}
              />
            </div>
            <div className={styles.resourceBody}>
              <h3 className={styles.title}>{RESOURCE_HUB.title}</h3>
              <p className={styles.desc}>{RESOURCE_HUB.desc}</p>
              <Link to={RESOURCE_HUB.to} className={styles.link}>
                <span>{RESOURCE_HUB.cta}</span>
                <IconArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Programs;
