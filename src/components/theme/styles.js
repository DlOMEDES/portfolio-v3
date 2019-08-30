import { createGlobalStyle } from "styled-components"

export const colors = {
  white: "#ffffff",
  roseRed: "#e54054",
  tealDowny: "#71e6bc",
  aquamarine: "#79f7db",
  cyanLeaf: "#b0f4e3",
  blueJaguar: "#171524",
  ashblueManatee: "#8892b0",
  blueMadison: "#2f3d4c",
  blueFountain: "#57b9b7",
};
export const gradient = `linear-gradient(115.84deg, rgba(176, 244, 227, 0.9) 0%, rgba(136, 146, 176, 0.9) 100%)`,

export const GlobalStyles = createGlobalStyle`
  html {
      box-sizing: border-box;
    }
  
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    color: ${colors.blueJaguar};
    font-family: 
  }
  
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    // color: ${colors.white};
    margin: 0 0 10px 0;
  }
  
  ul, ol {
    list-style-type: none;
  }
  
  p {
    margin: 0 0 15px 0;
  }
`
