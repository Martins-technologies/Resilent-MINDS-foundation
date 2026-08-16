const Stat = ({ number, label, className = '' }) => {
  return (
    <div className={`stat text-center ${className}`}>
      <span className="num">{number}</span>
      <span className="label">{label}</span>
    </div>
  );
};

export default Stat;