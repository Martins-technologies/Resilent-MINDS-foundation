export default function IconSupportMission({
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
      <circle cx="24" cy="12" r="4.5" />
      {/* Small heart on chest */}
      <path d="M24 22c-1.6-1.8-4-0.6-4 1.4 0 2 4 4.6 4 4.6s4-2.6 4-4.6c0-2-2.4-3.2-4-1.4z" />
      {/* Body / torso */}
      <path d="M14 44v-8c0-5.5 4.5-10 10-10s10 4.5 10 10v8" />
    </svg>
  );
}
