import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #3a3a3a;
        color: #fff;
        font-family: sans-serif;
    }

    a {
        color: #7529e6;
        text-decoration: none;
    }

    a:hover {
       color: #8a3cff; 
       text-decoration: underline;
    }

`;
