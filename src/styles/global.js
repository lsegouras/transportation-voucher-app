import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  font-family: 'Poppins', sans-serif;
}
`;

export default GlobalStyle;
