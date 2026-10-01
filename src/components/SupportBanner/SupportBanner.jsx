import Button from '../Button/Button';
import IconLeafDecor from '../icons/IconLeafDecor';
import styles from './SupportBanner.module.css';

const SupportBanner = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.section} aria-labelledby="support-heading">
      <div className={styles.banner}>
        <IconLeafDecor className={styles.leaf} color="#FEF9F2" opacity={0.12} />

        <div className={styles.copy}>
          <h2 id="support-heading" className={styles.heading}>
            Your Support Creates Hope
          </h2>
          <p className={styles.body}>
            Help us reach more people, expand programs and deliver resources
            where they&rsquo;re needed most.
          </p>
          <Button
            to="/get-involved/donation-collection"
            onClick={handleClick}
            variant="gold"
            size="lg"
            heart
            arrow
          >
            Give Hope Today
          </Button>
        </div>

        <img
          src="/support-hands.webp"
          alt="Hands holding a small seedling, a symbol of hope and growth"
          className={styles.photo}
        />
      </div>
    </section>
  );
};

export default SupportBanner;
