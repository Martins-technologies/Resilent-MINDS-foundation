const ImgPlaceholder = ({ children, minHeight = '180px', className = '' }) => {
  return (
    <div className={`img-placeholder ${className}`} style={{ minHeight }}>
      <span>{children}</span>
    </div>
  );
};

export default ImgPlaceholder;