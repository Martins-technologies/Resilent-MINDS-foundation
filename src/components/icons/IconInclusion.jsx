export default function IconInclusion({
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
      <circle cx="24" cy="24" r="14" />
      <path d="M18 20c2-3 10-3 12 0" />
      <path d="M16 26c2 6 14 6 16 0" />
      <path d="M24 14v20" />
    </svg>
  );
}
