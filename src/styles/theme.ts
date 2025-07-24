// src/styles/theme.ts
export const theme = {
  colors: {
    primary: '#00ffff',
    neon: '#00ffff',
    background: '#0f0f10',
    text: '#ffffff',
    textSecondary: '#aaaaaa',
    primaryHover: '#00cdd6',
    neonGreen: '#39ff14',
    neonPink: '#ff007f',
    darkGray: '#1a1a1a',
    chipBg: '#222',
    chipBorder: '#00f6ff',
  },
  fontSizes: {
    xsmall: '0.7rem',
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
    xlarge: '1.6rem',
    xxlarge: '2.2rem',
    display: '3.2rem',
  },
  fontFamily: {
  heading: `'Orbitron', sans-serif`,
  body: `'Sora', sans-serif`,
},
  spacing: (factor: number) => `${factor * 8}px`,
  borderRadius: '8px',
  chips: {
    padding: '0.4rem 1rem',
    borderRadius: '999px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    backgroundColor: '#00f6ff',
    color: '#111',
  },
  shadows: {
    card: '0 4px 20px rgba(0, 246, 255, 0.2)',
    chip: '0 0 8px rgba(0, 246, 255, 0.7)',
  },
};
