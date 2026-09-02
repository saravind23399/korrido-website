type IconProps = { className?: string; style?: React.CSSProperties };

function Icon({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowRight({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </Icon>
  );
}

export function ArrowUpRight({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </Icon>
  );
}

export function Check({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M20 6L9 17l-5-5" />
    </Icon>
  );
}

export function ChevronDown({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M6 9l6 6 6-6" />
    </Icon>
  );
}

export function MapPin({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}

export function Upload({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M12 16V4" />
      <path d="M5 11l7-7 7 7" />
      <path d="M4 17v4h16v-4" />
    </Icon>
  );
}

export function Zap({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </Icon>
  );
}

export function Edit({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </Icon>
  );
}

export function Radio({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8l1.4-1.4" />
      <path d="M4.6 17.2a9 9 0 1 1 12.8 0" />
      <path d="M7.3 14.7A6 6 0 1 1 16.7 5.3" />
    </Icon>
  );
}

export function ShieldCheck({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  );
}

export function Banknote({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 10h.01" />
      <path d="M18 14h.01" />
    </Icon>
  );
}

export function EyeOff({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94l9.88 9.88z" />
      <path d="M9.9 5.6A9.66 9.66 0 0 1 12 5c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <path d="M2 2l20 20" />
    </Icon>
  );
}

export function Wrench({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-.7.7" />
      <path d="M13.3 10.7a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l.7-.7" />
      <path d="M2 22l7-7" />
      <path d="M4 12l8-8" />
    </Icon>
  );
}

export function Menu({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </Icon>
  );
}

export function X({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </Icon>
  );
}

export function Calendar({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </Icon>
  );
}

export function BarChart({ className, style }: IconProps) {
  return (
    <Icon className={className} style={style}>
      <path d="M3 3v18h18" />
      <path d="M18.7 8l-4.7 4.7-3-3-6.4 6.4" />
    </Icon>
  );
}
