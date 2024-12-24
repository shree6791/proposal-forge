import { colors, gradients } from './colors';

export const theme = {
  colors,
  gradients,
  typography: {
    fonts: {
      heading: 'var(--font-geist-sans)',
      body: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  }
};