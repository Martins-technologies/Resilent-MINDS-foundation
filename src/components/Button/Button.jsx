import { Link } from 'react-router-dom';
import IconArrowRight from '../icons/IconArrowRight';
import IconHeart from '../icons/IconHeart';
import styles from './Button.module.css';

const Button = ({
  to,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  arrow = false,
  heart = false,
  children,
  className = '',
  onClick,
  ...props
}) => {
  const classNames = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {heart && <IconHeart size={size === 'lg' ? 18 : 16} />}
      <span>{children}</span>
      {arrow && <IconArrowRight size={size === 'lg' ? 20 : 16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classNames} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classNames} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
