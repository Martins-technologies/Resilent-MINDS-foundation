import Button from '../ui/Button';
import IconResilience from '../icons/IconResilience';
import styles from './StrongerMindsBanner.module.css';

const StrongerMindsBanner = () => {
  return (
    <section className={styles.section} aria-labelledby="stronger-minds-heading">
      <div className={styles.inner}>
        <div className={styles.photoWrap}>
          <img
            src="/hand.webp"
            alt="People placing their hands together in a show of unity"
            className={styles.photo}
          />
        </div>

        <div className={styles.copy}>
          <h2 id="stronger-minds-heading" className={styles.heading}>
            Together, we build stronger minds and stronger communities.
          </h2>
          <p className={styles.body}>
            Every program we create is designed to bring hope, build skills,
            and strengthen the resilience that helps individuals and communities thrive.
          </p>
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaRow}>
              <IconResilience size={36} color="#C79949" strokeWidth={1.7} />
              <p className={styles.ctaText}>
                Our impact grows when we work together.
              </p>
            </div>
            <Button
              variant="gold"
              to="/get-involved"
              className="!rounded-xl !text-white"
            >
              Join Our Movement →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrongerMindsBanner;
