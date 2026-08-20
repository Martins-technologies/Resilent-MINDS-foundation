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
      <path d="M24 22c-3.8-4-9.2-1.4-9.2 2.8 0 4.4 9.2 9.8 9.2 9.8s9.2-5.4 9.2-9.8c0-4.2-5.4-6.8-9.2-2.8z" />
      <path d="M14 32c-4 2-8 6-6 10h32c2-4-2-8-6-10" />
    </svg>
  );
}
