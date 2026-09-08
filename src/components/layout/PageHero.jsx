import styles from '../../styles/PageHero.module.css';

const PageHero = ({ image, ariaLabel, children }) => {
  return (
    <section
      className={styles.section}
      aria-label={ariaLabel}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className={styles.mobileImage}
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
