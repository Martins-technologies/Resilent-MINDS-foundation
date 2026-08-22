export default function IconResilience({
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
      <path d="M24 42V18" />
      <path d="M16 42h16" />
      <path d="M24 28c-6.5-2-11-8.5-8.5-15.5 8.5 1.5 9 8 8.5 15.5z" />
      <path d="M24 26c6.5-1.2 11.5-6.8 10-14.5-8.5 1-9.5 7.5-10 14.5z" />
      <path d="M24 20c-2-6 2-11 7-13-2 6-4 10-7 13z" />
    </svg>
  );
}
