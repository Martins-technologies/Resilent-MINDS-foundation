export default function IconCompassion({
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
      <path d="M24 22c-4.5-4.8-11-1.8-11 3.4 0 5.2 11 11.6 11 11.6s11-6.4 11-11.6c0-5.2-6.5-8.2-11-3.4z" />
      <path d="M10 30c-2 1-4 3.5-4 6.5C6 40 10 42 14 42h20c4 0 8-2 8-5.5 0-3-2-5.5-4-6.5" />
    </svg>
  );
}
