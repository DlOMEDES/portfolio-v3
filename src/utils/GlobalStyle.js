import { createGlobalStyle } from "styled-components"
import theme from "./theme"
const { colors } = theme

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:900,700,400,300"');

  *,
  *:before,
  *:after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

  html {
    font-size: 10px;
  }

  body {
    font-family: "Poppins", Helvetica Neue, sans-serif;
    color: rgb(${colors.ashblueManatee});
    background: rgb(${colors.midnightPurple});
  }

  p {
      font-size:1.8rem;
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

export default GlobalStyle
