export default function IconMentor({
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
      {/* Center person */}
      <circle cx="24" cy="13" r="4" />
      <path d="M16 42v-7c0-4.4 3.6-8 8-8s8 3.6 8 8v7" />
      {/* Left person */}
      <circle cx="10" cy="17" r="3" />
      <path d="M4 42v-5c0-3.3 2.7-6 6-6" />
      {/* Right person */}
      <circle cx="38" cy="17" r="3" />
      <path d="M44 42v-5c0-3.3-2.7-6-6-6" />
    </svg>
  );
}
