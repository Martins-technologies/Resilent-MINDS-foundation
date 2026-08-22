export default function IconHeart({
  size = 16,
  color = 'currentColor',
  strokeWidth = 1.6,
  className,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 20s-7-4.4-9.2-8.2C.6 8.6 2.2 5 6 5c2 0 3.4 1.1 4 2.2C10.6 6.1 12 5 14 5c3.8 0 5.4 3.6 3.2 6.8C19 15.6 12 20 12 20z" />
    </svg>
  );
}
