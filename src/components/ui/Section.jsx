const Section = ({ variant = 'default', tight = false, className = '', children }) => {
  const variants = {
    default: 'section',
    forest: 'section section--forest',
    burgundy: 'section section--burgundy',
    band: 'section section--band',
  };

  const tightClass = tight ? 'section--tight' : '';

  return <section className={`${variants[variant]} ${tightClass} ${className}`}>{children}</section>;
};

export default Section;