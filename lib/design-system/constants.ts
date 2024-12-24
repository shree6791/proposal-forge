export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

export const TRANSITIONS = {
  fast: '150ms',
  medium: '300ms',
  slow: '500ms'
} as const;

export const Z_INDICES = {
  modal: 100,
  overlay: 75,
  dropdown: 50,
  header: 40,
  above: 10,
  default: 1,
  below: -1
} as const;