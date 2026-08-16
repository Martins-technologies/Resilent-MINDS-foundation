const IconCircle = ({ icon, bgColor = '#F1E6D2', textColor = '#6E2839', className = '', children }) => {
  return (
    <div
      className={`w-[52px] h-[52px] rounded-full flex items-center justify-center text-xl mb-3.5 ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {icon || children}
    </div>
  );
};

export default IconCircle;