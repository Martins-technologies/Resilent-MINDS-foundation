import styles from '../../styles/PageHero.module.css';

const PageHero = ({
  image,
  ariaLabel,
  imageShiftRight = 0,
  imagePositionY = 'center',
  className = '',
  children,
}) => {
  const shift = imageShiftRight ? `${imageShiftRight}%` : '0%';
  const positionX = imageShiftRight ? `calc(50% + ${imageShiftRight}%)` : '50%';

  return (
    <section
      className={`${styles.section} ${className}`}
      aria-label={ariaLabel}
      style={{
        backgroundImage: `url('${image}')`,
        '--hero-shift': shift,
        '--hero-pos-y': imagePositionY,
        backgroundPosition: `${positionX} ${imagePositionY}`,
      }}
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
