export default function IconTwoPeople({
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
      <circle cx="17" cy="13" r="4.5" />
      <path d="M8 38v-7.5c0-4.4 4-8 9-8s9 3.6 9 8V38" />
      <circle cx="31" cy="13" r="4.5" />
      <path d="M22 38v-7.5c0-4.4 4-8 9-8s9 3.6 9 8V38" />
    </svg>
  );
}
