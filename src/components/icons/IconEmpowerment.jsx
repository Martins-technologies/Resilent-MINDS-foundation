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
      <circle cx="24" cy="22" r="6" />
      <path d="M12 42c0-6.6 5.4-12 12-12s12 5.4 12 12" />
      <path d="M24 5v4" />
      <path d="M15.2 8.2l2.2 3.4" />
      <path d="M32.8 8.2l-2.2 3.4" />
      <path d="M9.5 15.5l3.6 1.6" />
      <path d="M38.5 15.5l-3.6 1.6" />
    </svg>
  );
}
