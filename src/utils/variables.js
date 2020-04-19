import styled from "styled-components"

// media query breakpointsź
const size = {
  sm: "600px",
  md: "1200px",
  lg: "1440px",
}

export const device = {
  phone: `(max-width: ${size.xs})`,
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
    /* padding: 0 50px; */
  }
`
