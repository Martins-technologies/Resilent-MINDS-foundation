export default function IconHope({
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
      <path d="M24 8v6" />
      <path d="M12 12l4 4" />
      <path d="M36 12l-4 4" />
      <path d="M8 24h6" />
      <path d="M34 24h6" />
      <path d="M12 36h24" />
      <path d="M10 30c2.5-8 9-12 14-12s11.5 4 14 12" />
    </svg>
  );
}
