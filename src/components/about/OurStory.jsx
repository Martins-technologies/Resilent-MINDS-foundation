import IconHeart from '../icons/IconHeart';
import styles from './OurStory.module.css';

const OurStory = () => {
  return (
    <section
      className="relative w-full min-h-[640px] md:min-h-[720px] flex items-center overflow-hidden"
      style={{ background: '#F8F4ED' }}
    >
      {/* Content — left half */}
      <div className="relative z-10 w-full max-w-[42%] min-h-[640px] md:min-h-[720px] flex items-center pl-4 pr-4 md:pl-6 md:pr-6 lg:pl-8 lg:pr-8 py-12" style={{ marginLeft: 20 }}>
        <div className={styles.copy}>
          <p className={styles.label}>Our Story</p>
          <h3 className={styles.heading}>
            Every journey has moments of struggle. But with the right support,
            people can rebuild, recover, and rise stronger.
          </h3>
          <p className={styles.body}>
            Our foundation works to create pathways of hope by offering education, community programs, emotional wellness resources, and resilience-building initiatives.
          </p>
          <p className={styles.body}>
            We are committed to creating environments where people feel heard, supported, and empowered to move forward.
          </p>
          <div className={styles.callout}>
            <span className={styles.iconWrap} aria-hidden="true">
              <IconHeart size={22} color="#C79949" strokeWidth={1.5} />
            </span>
            <p className={styles.calloutText}>
              Because resilient minds create stronger individuals, stronger families, and stronger communities.
            </p>
          </div>
        </div>
      </div>
      {/* Background image — contain keeps all subjects fully visible (zoom-out) */}
      <img
        src="/updated.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-contain object-[right_60%] pointer-events-none select-none"
      />
    </section>
  );
};

export default OurStory;
