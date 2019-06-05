import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Work Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    html, body, #root {
        height: 100%;
    }

    .relative{
        position: relative;
    }
`;

export default GlobalStyle;
