import styled from "styled-components"

// media query breakpointsź
const size = {
  xs: "480px",
  sm: "768px",
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
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;

  @media ${device.tablet} {
    padding: 0 100px;
  }
  @media ${device.portrait} {
    padding: 0 75px;
  }
  @media ${device.phone} {
    padding: 0 50px;
  }
`
