const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textTertiary: '#ffffff',
    primary: '#0366d6',
    error: '#d73a4a',
    appBarBackground: '#24292e',
    itemBackground: '#ffffff'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export const withAlpha = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default theme;