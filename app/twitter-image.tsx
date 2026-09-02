import { ImageResponse } from 'next/og';

export const alt = 'Korrido · In-Cab Advertising';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: '#14110E',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: '#FCF8F3',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'baseline',
              fontFamily: 'monospace',
            }}
          >
            Korrido
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '4px',
            }}
          >
            <div
              style={{
                width: '420px',
                height: '8px',
                background: '#E8A33D',
                borderRadius: '4px',
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: '#FCF8F3',
            marginTop: '40px',
            maxWidth: '900px',
            lineHeight: 1.3,
            fontFamily: 'sans-serif',
          }}
        >
          Your next customer is sitting in a cab.
        </div>
        <div
          style={{
            fontSize: 20,
            color: '#C9B89A',
            marginTop: '16px',
            fontFamily: 'sans-serif',
          }}
        >
          Premium in-cab advertising. 20-30 minutes of undivided attention. Live in 48 hours.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            fontSize: 18,
            color: '#E8A33D',
            fontWeight: 700,
            letterSpacing: '2px',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
          }}
        >
          korrido.com
        </div>
      </div>
    ),
    { ...size }
  );
}
