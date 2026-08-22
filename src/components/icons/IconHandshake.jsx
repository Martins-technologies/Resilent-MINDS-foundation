export default function IconHandshake({
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
      {/* Left hand reaching */}
      <path d="M6 30l6-8h6l4 4" />
      {/* Right hand reaching */}
      <path d="M42 30l-6-8h-6l-4 4" />
      {/* Clasp in the middle */}
      <path d="M22 26c0 0 2 3 4 2s4-4 6-2l2 2" />
      <path d="M22 26l-2-2c-1-1-3-1-4 0l-4 6c-1 1-1 3 0 4l2 2" />
      <path d="M42 30l-2 4c-1 2-3 3-5 3H20c-2 0-4-1-5-3l-3-4" />
    </svg>
  );
}
