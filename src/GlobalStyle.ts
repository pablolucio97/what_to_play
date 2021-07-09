import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        font-family: 'Oswald', sans-serif;
        letter-spacing: .04rem;
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
