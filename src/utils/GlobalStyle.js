import { createGlobalStyle } from "styled-components"
import theme from "./theme"
// import { device } from "../utils/mixins"
const { colors } = theme

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

  *,
  *:before,
  *:after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
    }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: rgb(${colors.ashblueManatee});
    background: rgb(${colors.midnightPurple});
    line-height: 1.6;
    font-size:1.6rem;
    font-weight: 400;
  }


  h1,
  h2, 
  h3{
    font-weight: 600;
  }
  
  h4, 
  h5 {
    font-weight: 300;
  } 

  ol, ul {
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

  section {
    padding: 20rem 0;
  }
`

export default GlobalStyle
