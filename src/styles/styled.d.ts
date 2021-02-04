import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: string;
    border: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    };
  }
}
