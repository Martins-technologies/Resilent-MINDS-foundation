export default function IconBrain({
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
      <path d="M24 11c-1.2-4.2-8.5-5.4-12.2-.8C8.4 14.2 8.8 19 12 21.2c-3.2 1.8-4.2 6.6-1.4 9.8 2.2 2.6 6.6 3.2 9.6 1.6" />
      <path d="M24 11c1.2-4.2 8.5-5.4 12.2-.8C39.6 14.2 39.2 19 36 21.2c3.2 1.8 4.2 6.6 1.4 9.8-2.2 2.6-6.6 3.2-9.6 1.6" />
      <path d="M24 11v24.5" />
      <path d="M15.5 16.5c2.2.8 3.4 2.6 2.6 5" />
      <path d="M32.5 16.5c-2.2.8-3.4 2.6-2.6 5" />
      <path d="M14.5 26c2.6.2 4.2 2.2 3.4 4.4" />
      <path d="M33.5 26c-2.6.2-4.2 2.2-3.4 4.4" />
      <path d="M20 38c1.2 1.6 2.6 2.2 4 2.2s2.8-.6 4-2.2" />
    </svg>
  );
}
