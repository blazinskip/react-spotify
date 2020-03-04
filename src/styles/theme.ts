import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  name: 'main',
  borderRadius: '5px',

  fontsFamilies: {
    primary: 'sans-serif',
  },
  containerMaxWidth: '1200px',

  spacing: {
    xs: '8px',
    s: '16px',
    m: '32px',
    l: '64px',
  },

  colors: {
    white: '#fbfbfb',
    primary: '#1db954',
    primaryLight: '#1ed760',
    greenDark: '#0c7b33',
  },

  links: {
    color: 'greenDark',
    hoverColor: 'primaryLight',
    padding: 'xs',
  },
};
