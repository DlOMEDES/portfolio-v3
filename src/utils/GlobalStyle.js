import { createGlobalStyle } from "styled-components"
import theme from "../utils/theme"
const { colors } = theme

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: inherit;
    }

  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins:900,700,400,300"');
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    color: ${colors.blueJaguar};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
  font-weight: 600;
  margin: 0 0 10px 0;
  }

  ol,ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }

  input, select, textarea, button {
    &:focus {
      outline: none;
    }
  }
`
