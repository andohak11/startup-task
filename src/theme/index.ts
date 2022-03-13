const theme = {
  white: '#ffffff',
  primary: '#404eb2',
  default: '#1b1b1b',
  bg: '#f2f2f2',
  borderColor: '#d2d2d2',
  sizes: {
    sm: '0.8rem',
    base: '1rem',
    lg: '1.2rem',
    xl: '1.6rem',
    xxl: '2rem'
  },
  spaces: {
    sm: '4px',
    base: '8px',
    lg: '16px',
    xl: '24px',
    xxl: '32px'
  }
};

export type Theme = typeof theme;
export default theme;
