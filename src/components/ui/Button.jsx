import { Link } from 'react-router-dom';

const Button = ({
  variant = 'primary',
  size = 'default',
  to,
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-[40px] font-semibold border-2 border-transparent cursor-pointer transition-all hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-burgundy text-white hover:bg-burgundy-dark',
    outline: 'bg-transparent text-forest border-forest outline-green-900 hover:bg-forest hover:text-white',
    outlineLight: 'bg-transparent text-white border-white/60 hover:bg-white/15',
    gold: 'bg-gold text-forest-dark hover:bg-[#b8873a]',
    burgundy: 'bg-[#6E2839] text-white border-[#6E2839] hover:bg-[#5a1f2e]',
    white: 'bg-white text-[#6E2839] border-white hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    default: 'px-6 py-3 text-sm md:text-base',
    lg: 'px-8 py-4 text-base md:text-lg',
  };

  const combined = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combined} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combined} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined} {...props}>
      {children}
    </button>
  );
};

export default Button;