import styles from './SectionLabel.module.css';

const SectionLabel = ({ children, lined = false, align = 'left' }) => {
  return (
    <div className={`${styles.wrap} ${styles[align]}`}>
      {lined && <span className={styles.line} aria-hidden="true" />}
      <span className={styles.label}>{children}</span>
      {lined && <span className={styles.line} aria-hidden="true" />}
    </div>
  );
};

export default SectionLabel;
