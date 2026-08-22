export default function IconSponsor({
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
      {/* Heart */}
      <path d="M24 38S10 29 10 19c0-4.4 3.6-8 8-8 2.8 0 5.2 1.4 6.8 3.6C26.4 12.4 28.8 11 31.6 11c4.4 0 8 3.6 8 8 0 10-15.6 19-15.6 19z" />
    </svg>
  );
}
