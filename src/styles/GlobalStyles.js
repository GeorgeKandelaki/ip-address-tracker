import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        
    }

    *, *::before, *::after{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        // Weights: 300, 500, 600, 600i, 700
        font-size: 1.8rem;
        font-family: "Bricolage Grotesque", sans-serif;
        min-height: 100vh;
        background-color: var(--color-neutral-900);
        color: var(--color-neutral-0);

    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
        font-size: inherit;
    }

    button {
        cursor: pointer;
    }

    *:disabled {
        cursor: not-allowed;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        hyphens: auto;
    }

    img {
        max-width: 100%;
    }

    *::-webkit-scrollbar {
        display: none;
    }

    * {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    @media screen and (max-width: 75em){
        html{
            font-size: 50%;
        }
    }
`;

export default GlobalStyles;
