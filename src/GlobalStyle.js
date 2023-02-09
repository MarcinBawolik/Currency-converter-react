import { createGlobalStyle } from "styled-components";
import background from "./images/background.jfif"

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    :root{
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    }
`;