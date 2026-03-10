import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* RESET BÁSICO */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* HTML */
html {
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.5;
  font-weight: 400;
}

/* BODY */
body {
  font-family: ${({ theme }) => theme.fonts.main};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;
}

/* LINKS */
a {
  text-decoration: none;
  color: inherit;
}

/* LISTAS */
ul {
  list-style: none;
}

/* BOTÕES */
button {
  border: none;
  cursor: pointer;
  font-family: inherit;
}

/* INPUTS */
input, textarea {
  font-family: inherit;
}

/* IMAGENS */
img {
  max-width: 100%;
  display: block;
}

`;
