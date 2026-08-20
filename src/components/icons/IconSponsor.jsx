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
      <path d="M24 40s-13-7.8-16.6-14.4C4.2 20 7.2 13.5 14 13.5c3.6 0 6 2 7.2 4C22.4 15.5 24.8 13.5 28.4 13.5c6.8 0 9.8 6.5 6.6 12.1C37 32.2 24 40 24 40z" />
    </svg>
  );
}
