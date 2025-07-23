export const theme = {
  colors: {
    background: '#111',
    text: '#f1f1f1',
    primary: '#00f6ff',
    primaryHover: '#00cdd6',
  },
  fontSizes: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
  },
  spacing: (factor: number) => `${factor * 8}px`,  // <-- adiciona aqui
  borderRadius: '8px',                            // e um valor padrão
};
