export default function IconLeafDecor({ className, opacity = 0.12, color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 320 420"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMinYMax meet"
    >
      <path
        d="M40 400c20-90 10-170 50-240 30-52 90-90 150-80-40 50-48 110-40 170 8 58-10 110-40 150-40-20-88-10-120 0z"
        fill={color}
        opacity={opacity}
      />
      <path
        d="M90 390c30-80 20-150 55-210"
        stroke={color}
        strokeWidth="3"
        opacity={opacity + 0.08}
        fill="none"
      />
      <path
        d="M160 40c-10 40 6 80 4 120M210 80c-30 30-40 80-38 130M120 90c20 40 18 90 10 140"
        stroke={color}
        strokeWidth="2"
        opacity={opacity + 0.06}
        fill="none"
      />
    </svg>
  );
}
