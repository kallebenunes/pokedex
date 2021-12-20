import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *,p {
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0 auto;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    max-width: 1440px;

  }

  @media(max-width: 1024px){
    /* body {
      padding: 0 2rem;
    } */
  }
`;
 
export default GlobalStyle;