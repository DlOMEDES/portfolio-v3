import styled from "styled-components"
import theme from "../utils/theme"
const { colors } = theme
// media query breakpointsź
const size = {
  xs: "600px",
  sm: "800px",
  md: "1200px",
  lg: "1440px",
}

export const device = {
  phone: `(max-width: ${size.xs})`,
  portrait: `(max-width: ${size.sm})`,
  tablet: `(max-width: ${size.md})`,
  laptop: `(max-width: ${size.lg})`,
}

export const MainContainer = styled.div`
  padding: 0 150px;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  /* min-height: 100vh; */

  @media ${device.tablet} {
    padding: 0 100px;
  }
  @media ${device.portrait} {
    padding: 0 100px;
  }
  @media ${device.phone} {
    padding: 0 25px;
  }
`

export const Button = styled.div`
  margin: 6rem 0;
  text-transform: uppercase;
  a {
    border-radius: 0.5rem;
    background: rgba(${colors.violet}, 0.3);
    color: rgb(${colors.white});
    padding: 1rem 10rem;
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 0.3rem;

    transition: all 0.4s ease-in-out;
    &:hover {
      background: rgb(${colors.white});
      color: rgb(${colors.midnight});
    }
    @media ${device.tablet} {
      padding: 1rem 6.7rem;
    }
  }
`
