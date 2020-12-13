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
    
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: rgb(${colors.ashblueManatee});
    background: rgb(${colors.midnightPurple});
    line-height: 1.6;
    font-size: 1.8rem;
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
    max-width: 120rem;  
    /* margin: 0 auto; */
    
    @media ${device.tablet} {
      max-width: 80rem;  
    }
  }


/* utility classes */
  .mbSm {margin-bottom: 2rem;}
  .mbMd {margin-bottom: 3rem;}
  .mbLg {margin-bottom: 4rem;}
  .mbXl {margin-bottom: 8rem;}

/* section margin */
  .mSec10 {margin: 10rem 0}

/* section padding */
  .sectionPad{padding: 20rem 0;}
  
`

export default GlobalStyle
