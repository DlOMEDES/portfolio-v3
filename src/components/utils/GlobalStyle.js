import { createGlobalStyle } from "styled-components"

export const colors = {
  roseRed: "#e53f53",
  tealDowny: "#71E6BC",
  aquamarine: "#79F7DB",
  cyanLeaf: "#B0F4E3",
  blueJaguar: "#171524",
  ashblueManatee: "#8892B0",
  blueMadison: "#2F3D4C",
  blueFountain: "#57B9B7",
  white: "#ffffff",
}

export const gradient = `linear-gradient(115.84deg, rgba(176, 244, 227, 0.9) 0%, rgba(136, 146, 176, 0.9) 100%)`,

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: inherit;
    }

  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins:700,400,300"');
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
  font-weight: 600;
  color: #e54054;
  margin: 0 0 10px 0;
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
