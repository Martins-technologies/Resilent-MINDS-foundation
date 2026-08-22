export default function IconPlantSprig({
  size = 36,
  color = '#ffffff',
  strokeWidth = 2.4,
  className,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="24" y1="61" x2="24" y2="16" />
        <ellipse cx="24" cy="9.6" rx="4" ry="7" />
        <ellipse cx="33" cy="21" rx="9.2" ry="4" transform="rotate(-40 33 21)" />
        <ellipse cx="33" cy="35.2" rx="9.2" ry="4" transform="rotate(-40 33 35.2)" />
        <ellipse cx="33" cy="49.4" rx="9.2" ry="4" transform="rotate(-40 33 49.4)" />
        <ellipse cx="15" cy="21" rx="9.2" ry="4" transform="rotate(40 15 21)" />
        <ellipse cx="15" cy="35.2" rx="9.2" ry="4" transform="rotate(40 15 35.2)" />
        <ellipse cx="15" cy="49.4" rx="9.2" ry="4" transform="rotate(40 15 49.4)" />
      </g>
    </svg>
  );
}
