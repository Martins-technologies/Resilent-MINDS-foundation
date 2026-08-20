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
      <path d="M24 20c-3.2-3.4-8-1.2-8 2.4 0 3.8 8 8.6 8 8.6s8-4.8 8-8.6c0-3.6-4.8-5.8-8-2.4z" />
      <path d="M12 28c-4 3-6 8-4 12h32c2-4 0-9-4-12" />
      <path d="M10 24c-2-4 0-10 6-12M38 24c2-4 0-10-6-12" />
    </svg>
  );
}
