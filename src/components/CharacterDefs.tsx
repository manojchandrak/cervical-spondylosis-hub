export default function CharacterDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <radialGradient id="headGrad" cx="35%" cy="30%" r="75%">
          <stop offset="0%" style={{ stopColor: 'var(--skin-light)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--skin-dark)' }} />
        </radialGradient>

        <linearGradient id="neckGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'var(--skin-light)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--skin-dark)' }} />
        </linearGradient>

        <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'var(--accent-light)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--accent-dark)' }} />
        </linearGradient>

        <radialGradient id="accentGrad" cx="35%" cy="30%" r="75%">
          <stop offset="0%" style={{ stopColor: 'var(--accent-light)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--accent-dark)' }} />
        </radialGradient>

        <radialGradient id="warmGrad" cx="35%" cy="30%" r="75%">
          <stop offset="0%" style={{ stopColor: 'var(--accent-2-light)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--accent-2-dark)' }} />
        </radialGradient>

        <radialGradient id="stageGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: 'var(--accent)', stopOpacity: 0.16 }} />
          <stop offset="100%" style={{ stopColor: 'var(--accent)', stopOpacity: 0 }} />
        </radialGradient>

        <filter id="charShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.25" />
        </filter>
      </defs>
    </svg>
  )
}
