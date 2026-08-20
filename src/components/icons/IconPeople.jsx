export default function IconPeople({
  size = 40,
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
      <circle cx="24" cy="12" r="4" />
      <circle cx="12" cy="16" r="3.2" />
      <circle cx="36" cy="16" r="3.2" />
      <path d="M16 40v-8c0-4 3.5-7 8-7s8 3 8 7v8" />
      <path d="M8 40v-7c0-3 2.2-5.5 5.2-6.4" />
      <path d="M40 40v-7c0-3-2.2-5.5-5.2-6.4" />
    </svg>
  );
}
