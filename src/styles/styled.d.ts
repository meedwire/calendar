import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: string;
    border: string;
    radius: keyof typeof Radius;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    };
  }
}
