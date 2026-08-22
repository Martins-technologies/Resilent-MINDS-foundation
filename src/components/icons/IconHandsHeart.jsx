export default function IconHandsHeart({
  size = 48,
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
      <path d="M24 18.5s-5.2-3.2-6.6-5.8C16 10 18.2 7.2 21.4 7.2c1.6 0 2.8 1 3.2 2.1.4-1.1 1.6-2.1 3.2-2.1 3.2 0 5.4 2.8 4 5.5-1.4 2.6-6.6 5.8-6.6 5.8z" />
      <path d="M8 28.5c0-3.2 2.4-5.5 5.4-5.5h3.4c1.6 0 3 .8 3.8 2.1l.8 1.4" />
      <path d="M8 28.5v6.2c0 2.6 2 4.8 4.6 5.2 4.2.7 8.2.7 11.4.1" />
      <path d="M17.2 25.6v8.4" />
      <path d="M13.2 23.8v10.6" />
      <path d="M40 28.5c0-3.2-2.4-5.5-5.4-5.5h-3.4c-1.6 0-3 .8-3.8 2.1l-.8 1.4" />
      <path d="M40 28.5v6.2c0 2.6-2 4.8-4.6 5.2-4.2.7-8.2.7-11.4.1" />
      <path d="M30.8 25.6v8.4" />
      <path d="M34.8 23.8v10.6" />
    </svg>
  );
}
