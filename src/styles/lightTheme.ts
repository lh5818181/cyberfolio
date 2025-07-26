// src/styles/lightTheme.ts
import type { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#0066cc',
    neon: '#0066cc',
    background: '#f5f5f5',
    text: '#111111',
    textSecondary: '#333333',
    primaryHover: '#005bb5',
    neonGreen: '#39ff14',
    neonPink: '#ff007f',
    darkGray: '#dddddd',
    chipBg: '#e0e0e0',
    chipBorder: '#0066cc',
  },
  fontSizes: {
    xsmall: '0.7rem',
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
    xlarge: '1.6rem',
    xxlarge: '2.2rem',
    display: '8vw',
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
    color: '#f5f5f5',
  },
  shadows: {
    card: '0 4px 20px rgba(0, 102, 204, 0.2)',
    chip: '0 0 8px rgba(0, 102, 204, 0.7)',
  },
};
