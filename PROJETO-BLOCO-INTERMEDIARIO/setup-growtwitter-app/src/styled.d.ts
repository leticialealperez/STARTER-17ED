import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string;
        secondary: string;
        btnPrimary: string;
        text: string;
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
    };
    fonts: {
        default: string;
    };
    fontSizes: {
        small: string;
        medium: string;
        large: string;
    };
    icons: {
        main: string;
        iconInitialPage: {
            selected: string;
            default: string;
        };
        iconExplore: {
            selected: string;
            default: string;
        }
        iconProfile: {
            selected: string;
            default: string;
        };
        iconLike: {
            default: string;
            selected: string;
        };
        iconReply: string;
        arrowIcon: string;
        closeIcon: string;
    }

  }
}