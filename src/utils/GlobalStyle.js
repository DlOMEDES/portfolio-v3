import { createGlobalStyle } from "styled-components"
import theme from "./theme"
const { colors } = theme

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }



  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins:900,700,400,300"');
    font-family: "Poppins", Helvetica Neue, sans-serif;
    color: rgb(${colors.ashblueManatee});
    background: rgb(${colors.midnightPurple});
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
  }

  input, select, textarea, button {
    &:focus {
      outline: none;
    }
  }
`
