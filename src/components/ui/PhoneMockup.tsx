'use client';

export default function PhoneMockup() {
  return (
    <div className="animate-float select-none" aria-hidden="true">
      {/* Phone outer frame */}
      <div
        className="relative mx-auto"
        style={{
          width: '240px',
          height: '480px',
          background: 'linear-gradient(145deg, #1A1B1E 0%, #0D0E10 100%)',
          borderRadius: '36px',
          border: '1.5px solid rgba(255,255,255,0.12)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 1px 0 rgba(255,255,255,0.08) inset',
          padding: '10px',
        }}
      >
        {/* Side buttons */}
        <div style={{
          position: 'absolute',
          left: '-3px',
          top: '90px',
          width: '3px',
          height: '28px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '2px 0 0 2px',
        }} />
        <div style={{
          position: 'absolute',
          left: '-3px',
          top: '130px',
          width: '3px',
          height: '52px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '2px 0 0 2px',
        }} />
        <div style={{
          position: 'absolute',
          right: '-3px',
          top: '110px',
          width: '3px',
          height: '60px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '0 2px 2px 0',
        }} />

        {/* Screen */}
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#0A0B0C',
            borderRadius: '28px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Status bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 16px 4px',
          }}>
            <span style={{ color: '#F0F0F0', fontSize: '11px', fontWeight: 600 }}>9:41</span>
            <div style={{
              width: '80px',
              height: '20px',
              background: '#0A0B0C',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.1)',
            }} />
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <div style={{ width: '14px', height: '10px', border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: '2px', position: 'relative' }}>
                <div style={{ position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-50%)', width: '2px', height: '5px', background: 'rgba(255,255,255,0.4)', borderRadius: '1px' }} />
                <div style={{ width: '70%', height: '100%', background: '#00E5A0', borderRadius: '1px' }} />
              </div>
            </div>
          </div>

          {/* App content */}
          <div style={{ padding: '12px 16px 0' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <p style={{ color: '#8A8A9A', fontSize: '10px', marginBottom: '2px' }}>Good afternoon</p>
                <p style={{ color: '#F0F0F0', fontSize: '13px', fontWeight: 700 }}>Chidi A.</p>
              </div>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00E5A0, #7B61FF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: '#000', fontSize: '12px', fontWeight: 700 }}>C</span>
              </div>
            </div>

            {/* Balance card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,229,160,0.15) 0%, rgba(123,97,255,0.1) 100%)',
              border: '1px solid rgba(0,229,160,0.2)',
              borderRadius: '16px',
              padding: '16px',
              marginBottom: '16px',
            }}>
              <p style={{ color: '#8A8A9A', fontSize: '10px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portfolio Balance</p>
              <p style={{ color: '#F0F0F0', fontSize: '22px', fontWeight: 700, marginBottom: '2px', letterSpacing: '-0.5px' }}>
                245.50 <span style={{ fontSize: '12px', color: '#8A8A9A', fontWeight: 400 }}>USDT</span>
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00E5A0' }} />
                <p style={{ color: '#00E5A0', fontSize: '10px', fontWeight: 600 }}>1 USDT = ₦1,612</p>
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <button style={{
                flex: 1,
                background: '#00E5A0',
                color: '#08090A',
                border: 'none',
                borderRadius: '12px',
                padding: '10px 8px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                Cash Out
              </button>
              <button style={{
                flex: 1,
                background: 'rgba(123,97,255,0.15)',
                color: '#7B61FF',
                border: '1px solid rgba(123,97,255,0.3)',
                borderRadius: '12px',
                padding: '10px 8px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 10h20" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Dollar Card
              </button>
            </div>

            {/* Assets */}
            <p style={{ color: '#8A8A9A', fontSize: '10px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Assets</p>
            {[
              { name: 'USDT', amount: '245.50', naira: '₦395,748', color: '#26A17B' },
              { name: 'BTC', amount: '0.0012', naira: '₦142,300', color: '#F7931A' },
            ].map((asset) => (
              <div key={asset.name} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: `${asset.color}20`,
                    border: `1px solid ${asset.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{ color: asset.color, fontSize: '8px', fontWeight: 700 }}>{asset.name[0]}</span>
                  </div>
                  <span style={{ color: '#F0F0F0', fontSize: '11px', fontWeight: 600 }}>{asset.name}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: '#F0F0F0', fontSize: '11px', fontWeight: 600 }}>{asset.amount}</p>
                  <p style={{ color: '#8A8A9A', fontSize: '9px' }}>{asset.naira}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
