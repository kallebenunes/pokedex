import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *,p {
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0 auto;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    max-width: 1024px;
  }
`;
 
export default GlobalStyle;