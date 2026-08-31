const operators = [
  'Mumbai Metro Cabs',
  'CityLink Pune',
  'QuickRide BLR',
  'Delhi Fleet Co.',
  'Hyderabad Rides',
  'Kochi Cabs',
];

export default function TrustBar() {
  return (
    <section
      style={{
        background: '#ffffff',
        padding: '32px 5vw',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 40,
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '0.6875rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(26,28,28,0.3)',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Trusted by operators across India
        </div>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center' }}>
          {operators.map((op) => (
            <div
              key={op}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.875rem',
                color: 'rgba(26,28,28,0.22)',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              {op}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
