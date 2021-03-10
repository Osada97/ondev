import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --main-font:'Ubuntu', sans-serif;
        --sub-font:'Cabin', sans-serif;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    h1,h2,h3,p{
        color:#48484a;
    }
`;
/*font-family: 'Cabin', sans-serif;
font-family: 'Ubuntu', sans-serif; */
