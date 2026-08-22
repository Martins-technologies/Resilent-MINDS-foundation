import { Link } from 'react-router-dom';
import IconLeafDecor from '../icons/IconLeafDecor';
import styles from './HomeSupportBar.module.css';

const HomeSupportBar = () => {
  return (
    <section className={styles.section} aria-label="Get support">
      <IconLeafDecor className={styles.leaf} color="#FEF9F2" opacity={0.14} />

      <div className={`rm-container ${styles.inner}`}>
        <div className={styles.icon} aria-hidden="true">
          <img src="/whowehelp/heart.svg" alt="" className={styles.iconImg} />
        </div>

        <p className={styles.message}>
          If you or someone you know could
          <br />
          use support, we are here for you.
        </p>

        <span className={styles.divider} aria-hidden="true" />

        <div className={styles.actions}>
          <Link to="/contact" className={styles.btn}>
            Get Support
          </Link>
          <Link to="/programs" className={styles.link}>
            Explore Programs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSupportBar;
