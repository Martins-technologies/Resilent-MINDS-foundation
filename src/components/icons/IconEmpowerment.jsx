export default function IconEmpowerment({
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
      <circle cx="24" cy="12" r="4" />
      <circle cx="12" cy="16" r="3.5" />
      <circle cx="36" cy="16" r="3.5" />
      <path d="M16 28c0-4 3.5-7 8-7s8 3 8 7v10H16V28z" />
      <path d="M12 32c-3.5-1-6-4-6-8v10h6" />
      <path d="M36 32c3.5-1 6-4 6-8v10h-6" />
    </svg>
  );
}
