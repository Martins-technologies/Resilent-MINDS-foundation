const Grid = ({ cols = 2, className = '', children }) => {
  const colClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  };

  return <div className={`grid gap-6 ${colClasses[cols] || colClasses[2]} ${className}`}>{children}</div>;
};

export default Grid;