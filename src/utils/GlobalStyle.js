import { createGlobalStyle } from "styled-components"
import theme from "./theme"
import { device } from "../utils/variables"
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
    /* this makes rem easier to manage 1rem = 10px --> 10/16 = 0.625 */
    font-size: 62.5%; 
   
    @media ${device.laptop} {
      font-size: 52%; 
    }
    @media ${device.tablet} {
      font-size: 48%; 
    }
    @media ${device.portrait} {
      font-size: 52%; 
    }
    @media ${device.phone} {
      font-size: 52%; 
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: rgb(${colors.ashblueManatee});
    background: rgb(${colors.midnight});
    line-height: 1.6;
    font-size: 1.8rem;
    font-weight: 400;
  }

  
  h1 {
    font-size: 4rem;
  }
  h2 { 
    font-size: 3.5rem;
  } 
  h3 { 
    font-size: 3rem;
    font-weight: 600;
  }
  h4 {
    font-size: 2.5rem;
    font-weight: 400;
  }
  h5 {
    font-size: 2rem;
    font-weight: 300;
    text-transform: capitalize;
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

  /* section {
    max-width: 120rem;  
    margin: 0 auto;
  } */


/* utility classes */
  .mbSm {margin-bottom: 2rem;}
  .mbMd {margin-bottom: 3rem;}
  .mbLg {margin-bottom: 4rem;}
  .mbXl {margin-bottom: 8rem;}

/* section margin */
  .mSec10 {margin: 10rem 0}

/* section padding */
  .secMargin{margin: 30rem 0;}
  
  
`

export default GlobalStyle
