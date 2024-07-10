import { DefaultTheme, ThemeProvider } from 'styled-components';

import iconLikeDefault from '../../assets/light_color/icone_curtir.svg';
import iconLikeSelected from '../../assets/light_color/icone_curtir_selecionado.svg';
import iconExploreDefault from '../../assets/light_color/icone_explorar.svg';
import iconExploreSelected from '../../assets/light_color/icone_explorar_selecionado.svg';
import iconInitialPageDefault from '../../assets/light_color/icone_pagina_inicial.svg';
import iconInitialPageSelected from '../../assets/light_color/icone_pagina_inicial_selecionado.svg';
import iconProfileDefault from '../../assets/light_color/icone_perfil.svg';
import iconProfileSelected from '../../assets/light_color/icone_perfil_selecionado.svg';
import iconReply from '../../assets/light_color/icone_responder.svg';
import arrowIcon from '../../assets/light_color/icone_seta.svg';
import iconMain from '../../assets/light_color/logo_growtweet.svg';
import closeIcon from '../../assets/light_color/X.svg';


const lightTheme: DefaultTheme = {
    colors: {
        primary: "#1D9BF0",
        secondary: "#AFDBD2",
        btnPrimary: "#1D9BF0",
        text: "#FFFF",
        gray1: "#333333",
        gray2: "#4F4F4F",
        gray3: "#828282",
        gray4: "#c3c3c3",
        gray5: "#E0E0E0",
        gray6: "#E9E9E9",
        gray7: "#F2F2F2",
        gray8: "#fcfcfcde",
    },
    fonts: {
        default: "Karla, Roboto, sans-serif"
    },
    fontSizes: {
        small: "1rem",
        medium: "2rem",
        large: "3rem"
    },
    icons: {
        arrowIcon: arrowIcon,
        closeIcon: closeIcon,
        main: iconMain,
        iconReply: iconReply,
        iconExplore: {
            default: iconExploreDefault,
            selected: iconExploreSelected
        },
        iconInitialPage: {
            default: iconInitialPageDefault,
            selected: iconInitialPageSelected
        },
        iconLike: {
            default: iconLikeDefault,
            selected: iconLikeSelected
        },
        iconProfile: {
            default: iconProfileDefault,
            selected: iconProfileSelected
        }
    }
}

interface LightThemeProps {
    children: React.ReactNode;
}

export function LightTheme(props: LightThemeProps) {
    return (
        <ThemeProvider theme={lightTheme}>
            {props.children}
        </ThemeProvider>
    )
}