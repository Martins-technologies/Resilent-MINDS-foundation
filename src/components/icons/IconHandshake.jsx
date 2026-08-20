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
      <path d="M8 22l8-8 6 6" />
      <path d="M40 22l-8-8-6 6" />
      <path d="M16 20l4 4c2 2 6 2 8 0l4-4" />
      <path d="M14 28l6 6c2 2 8 2 10 0l6-6" />
      <path d="M10 26v8M38 26v8" />
    </svg>
  );
}
