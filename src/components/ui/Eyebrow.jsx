const Eyebrow = ({ children, className = '' }) => {
  return <span className={`eyebrow ${className}`}>{children}</span>;
};

export default Eyebrow;