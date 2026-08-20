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
      <path d="M24 42V22" />
      <path d="M24 28c-6-2-10-8-8-14 8 2 8 8 8 14z" />
      <path d="M24 26c6-1 11-6 10-13-8 1-9 7-10 13z" />
      <path d="M16 42h16" />
    </svg>
  );
}
