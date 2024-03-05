import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background-color: rgb(202, 232, 244);
  min-width: 800px;
  max-width: 1200px;
  margin: 0px auto auto auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyle;
