export default function IconVolunteer({
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
      {/* Head */}
      <circle cx="24" cy="14" r="5" />
      {/* Body */}
      <path d="M14 42v-8c0-5.5 4.5-10 10-10s10 4.5 10 10v8" />
      {/* Arms open/welcoming */}
      <path d="M14 28l-6 4M34 28l6 4" />
    </svg>
  );
}
