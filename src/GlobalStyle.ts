import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        font-family: 'Lato', sans-serif;
    }

    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${props => props.theme.colors.background};
        overflow-x: hidden;
    }

    a{
        text-decoration-line: none;
    }

`;
