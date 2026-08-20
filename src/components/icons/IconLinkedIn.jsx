export default function IconLinkedIn({ size = 16, color = 'currentColor', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
      <path d="M6.5 9H4v11h2.5V9zM5.2 4C4.3 4 3.5 4.8 3.5 5.7S4.3 7.4 5.2 7.4 7 6.6 7 5.7 6.2 4 5.2 4zM20 20h-2.5v-5.6c0-1.8-.8-2.4-1.8-2.4s-2.2.9-2.2 2.5V20H11V9h2.5v1.5c.5-.9 1.7-1.8 3.4-1.8 2.2 0 3.1 1.2 3.1 3.8V20z" />
    </svg>
  );
}
