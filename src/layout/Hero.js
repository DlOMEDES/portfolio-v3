import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"

import { device } from "../utils/variables"

// styles
const { colors } = theme

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  min-height: 67vh;
  grid-gap: 3rem;
  align-items: center;
  margin-top: 20rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    padding-top: 10rem;
    margin: 0 auto;
  }
  @media ${device.portrait} {
    grid-template-columns: 1fr;
    padding-top: 10rem;
    max-width: 100%;
    margin: 0 auto;
  }
`

const HeroDetails = styled.div`
  line-height: 1.3;
  letter-spacing: 0.1rem;
  max-width: 90rem;
  position: relative;
`

const Hi = styled.h4`
  color: rgba(${colors.violet}, 0.1);
  margin: 0 0 1rem 0;
  font-size: 45rem;
  font-weight: 700;
  position: absolute;
  z-index: -1;
  top: -36.5rem;
  left: -2.5rem;
  @media ${device.tablet} {
    font-size: 30rem;
    top: -21.5rem;
    left: -1.5rem;
  }
  @media ${device.portrait} {
    font-size: 15rem;
    top: -11rem;
    left: -1rem;
  }
`
const Name = styled.h2`
  color: rgb(${colors.white});
  font-size: 8rem;
  margin-bottom: 1rem;

  @media ${device.portrait} {
    font-size: 4rem;
  }
`
const Subtitle = styled.h4`
  color: rgb(${colors.ashblueManatee});
  font-size: 3rem;
  @media ${device.portrait} {
    font-size: 2rem;
  }
`

// const HeroButton = styled(Button)`
//   padding: 0;
//   margin: 5rem 0;
//   a {
//     padding: 1rem 5rem;
//   }
// `

const Hero = () => {
  return (
    <>
      <HeroContainer id="hero">
        <HeroDetails>
          <Hi>Hello</Hi>
          <Name>
            I'm Dio, <br />a Web Developer
          </Name>
          <Subtitle>
            Focusing on user interfaces for websites and apps.
          </Subtitle>
          {/* <HeroButton>
            <Link to="/contact">contact me</Link>
          </HeroButton> */}
        </HeroDetails>
      </HeroContainer>
    </>
  )
}

export default Hero
