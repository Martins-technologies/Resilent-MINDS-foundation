import { Link } from 'react-router-dom';
import IconArrowRight from '../icons/IconArrowRight';
import SectionLabel from '../SectionLabel/SectionLabel';
import {
  COMMUNITY_SUPPORT_PATH,
  COMMUNITY_SUPPORT_SERVICES,
  COMMUNITY_SUPPORT_TITLE,
  COMMUNITY_SUPPORT_WELLBEING,
} from '../../data/communitySupportServices';
import styles from './CommunitySupportPreview.module.css';

const CommunitySupportPreview = () => {
  return (
    <section className={styles.section} aria-labelledby="community-support-heading" id="community-support">
      <div className="rm-container">
        <header className={styles.header}>
          <SectionLabel lined align="center">
            {COMMUNITY_SUPPORT_TITLE}
          </SectionLabel>
          <h2 id="community-support-heading" className={styles.heading}>
            How We Support the Community
          </h2>
          <p className={styles.sub}>{COMMUNITY_SUPPORT_WELLBEING}</p>
        </header>

        <div className={styles.grid}>
          {COMMUNITY_SUPPORT_SERVICES.map((service) => (
            <article key={service.id} className={styles.card}>
              <img
                src={service.image}
                alt={service.alt}
                className={
                  service.imageFit === 'contain'
                    ? `${styles.image} ${styles.imageContain}`
                    : styles.image
                }
                width={400}
                height={300}
              />
              <div className={styles.body}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.summary}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.more}>
          <Link to={COMMUNITY_SUPPORT_PATH} className={styles.moreLink}>
            Explore all community support services
            <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySupportPreview;
