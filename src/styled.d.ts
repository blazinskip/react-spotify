import 'styled-components';player

// and extend them!
declare module 'styled-components' {
  export interface Colors {
    white: string;
    primary: string;
    primaryLight: string;
    greenDark: string;
  }

  export interface DefaultTheme {
    name: string;
    borderRadius: string;

    containerMaxWidth: string;

    spacing: {
      xs: string;
      s: string;
      m: string;
      l: string;
    };

    fontsFamilies: {
      primary: string;
    };

    colors: Colors;

    links: {
      color: 'greenDark';
      hoverColor: 'primaryLight';
      padding: 'xs';
    };
  }
}
