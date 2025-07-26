// src/styles/lightTheme.ts
import type { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#0066cc',
    neon: '#0066cc',
    background: '#ffffff',
    text: '#111111',
    textSecondary: '#333333',
    primaryHover: '#0055aa',
    neonGreen: '#33cc33',
    neonPink: '#ff3399',
    darkGray: '#f0f0f0',
    chipBg: '#eeeeee',
    chipBorder: '#0066cc',
  },
  fontSizes: {
    xsmall: '0.7rem',
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
    xlarge: '1.6rem',
    xxlarge: '2.2rem',
    display: '9vw',
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
    backgroundColor: '#0066cc',
    color: '#fff',
  },
  shadows: {
    card: '0 4px 20px rgba(0, 0, 0, 0.1)',
    chip: '0 0 8px rgba(0, 102, 204, 0.7)',
  },
}
