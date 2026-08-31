interface RouteKMarkProps {
  color?: string;
  size?: number;
  animated?: boolean;
  className?: string;
}

export default function RouteKMark({
  color = '#1a1c1c',
  size = 64,
  animated = false,
  className = '',
}: RouteKMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={animated ? `draw-mark ${className}` : className}
    >
      <line
        x1="16" y1="10" x2="16" y2="54"
        stroke={color} strokeWidth="3" strokeLinecap="round"
      />
      <path
        d="M16 30 Q28 22 46 11"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M16 30 Q28 40 46 53"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"
      />
      <circle cx="16" cy="30" r="3.5" fill={color} />
      <circle cx="46" cy="11" r="4.5" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="46" cy="11" r="2"   fill={color} />
      <circle cx="46" cy="53" r="3.5" fill={color} />
      <line
        x1="46" y1="56" x2="46" y2="60"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"
      />
    </svg>
  );
}
