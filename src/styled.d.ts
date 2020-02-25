import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    borderRadius: string;

    containerMaxWidth: string;

    fontsFamilies: {
      primary: string;
    };

    colors: {
      primary: string;
    };
  }
}
