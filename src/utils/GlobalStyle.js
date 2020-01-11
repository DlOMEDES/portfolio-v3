import { createGlobalStyle } from "styled-components"
import theme from "../utils/theme"
const { colors } = theme

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
    }

  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins:900,700,400,300"');
    font-family: 'Poppins', sans-serif;
    color: ${colors.white};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
  font-weight: 600;
  }

  ol,ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: ${colors.roseRed}
  }

  input, select, textarea, button {
    &:focus {
      outline: none;
    }
  }
`
