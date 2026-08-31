import Image from 'next/image';
import RouteKMark from './RouteKMark';

interface WordmarkProps {
  color?: string;
  size?: number;
  accent?: string;
  useLogo?: boolean;
}

export default function Wordmark({
  color = '#1a1c1c',
  size = 28,
  accent = '#ffd1dc',
  useLogo = false,
}: WordmarkProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.4 }}>
      {useLogo ? (
        <div style={{
          width: size,
          height: size,
          borderRadius: '6px',
          overflow: 'hidden',
          flexShrink: 0,
          position: 'relative',
        }}>
          <Image
            src="/korrido-logo.png"
            alt="Korrido logo"
            width={size}
            height={size}
            style={{ objectFit: 'cover', borderRadius: '6px', filter: 'invert(1)' }}
          />
        </div>
      ) : (
        <RouteKMark color={color} size={size} />
      )}
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: size * 0.6,
          letterSpacing: '-0.03em',
          color,
          lineHeight: 1,
        }}
      >
        kor<span style={{ color: accent }}>rid</span>o
      </span>
    </div>
  );
}
