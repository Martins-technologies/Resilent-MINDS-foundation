export default function IconHeartDove({
  size = 40,
  color = 'currentColor',
  strokeWidth = 1.5,
  className,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 40s-12-7.2-15.4-13.4C5.4 21 8 15 14.2 15c3.2 0 5.4 1.8 6.4 3.6C21.6 16.8 23.8 15 27 15c6.2 0 8.8 6 5.2 11.6C36 32.8 24 40 24 40z" />
      <path d="M18 24c3-1 6 0 8 2 1-4 4-6 8-6" />
    </svg>
  );
}
