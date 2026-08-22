export default function IconYouTube({ size = 16, color = 'currentColor', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="7" width="18" height="12" rx="3" stroke={color} strokeWidth="1.6" />
      <path d="M11 10.5v7l6-3.5-6-3.5z" fill={color} />
    </svg>
  );
}
