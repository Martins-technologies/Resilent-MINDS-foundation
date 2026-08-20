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
      <circle cx="24" cy="13" r="4" />
      <circle cx="12" cy="18" r="3" />
      <circle cx="36" cy="18" r="3" />
      <path d="M15 40v-6c0-4.2 4-7 9-7s9 2.8 9 7v6" />
      <path d="M8 40v-5c0-2.8 2-5 5-6" />
      <path d="M40 40v-5c0-2.8-2-5-5-6" />
    </svg>
  );
}
