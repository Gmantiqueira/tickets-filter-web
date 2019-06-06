import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Nunito', sans-serif;
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
    h4{
        font-size: 14px;
    }

    p{
        font-size: 12px;
    }

    .darker{
        color: #414C61;
    }
    .dark{
        color: #54627C;
    }
    .normal{
        color: #677897;
    }
    .light{
        color: #94A0B6;
    }

    .regular{
        font-weight: normal;
    }

    .semibold{
        font-weight: 600;
    }
    
    .bold{
        font-weight: bold;
    }

    .relative{
        position: relative;
    }
`;

export default GlobalStyle;
