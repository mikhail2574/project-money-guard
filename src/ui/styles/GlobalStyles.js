import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';

const GlobalStyles = createGlobalStyle`
  ${modernNormalize}

  :root {
    --bg: #101010;
    --bg-table: rgba(82, 59, 126, 0.6);
    --white: #fbfbfb;
    --purple: #734aef;
    --yellow: #ffb627;
    --gradient: linear-gradient(
      167deg,
      #ffc727 0%,
      #9e40ba 61.46%,
      #7000ff 90.54%
    );
    --transp-10: rgba(255, 255, 255, 0.1);
    --transp-20: rgba(255, 255, 255, 0.2);
    --transp-40: rgba(255, 255, 255, 0.4);
    --transp-60: rgba(255, 255, 255, 0.6);
    --dashboard-text: #ff868d;
    --button-text: #623f8b;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill::first-line {
    transition: background-color 5000s ease-in-out 0s;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  p,
  h1, 
  h2,  
  h3{
    margin: 0;
    padding: 0;
  }

  ul, 
  ol, 
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }

  input:-moz-autofill,
  textarea:-moz-autofill {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }

  input:-ms-autofill,
  textarea:-ms-autofill {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }
`;

export default GlobalStyles;
