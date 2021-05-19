import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import config from "../config/index"

import { device } from "../utils/variables"

// styles
const { colors } = theme

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(min-content, 3fr) 1fr;
  min-height: 80vh;
  grid-gap: 3rem;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    padding-top: 10rem;
    max-width: 75%;
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

  h4 {
    font-weight: 300;
  }
`


const Hi = styled.h4`
  color: rgb(${colors.violet});
  margin: 0 0 1rem 0;
  font-size: 2rem;
`
const Name = styled.h2`
  color: rgb(${colors.white});
  font-size: 6rem;
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
      <HeroContainer id="hero" className="sectionPad">
        <HeroDetails>
          <Hi>Hello, I'm Diomedes Lajara</Hi>
          <Name>{config.freelance}</Name>
          <Subtitle>{config.freelanceSub}</Subtitle>
          {/* <HeroButton>
            <Link to="/contact">contact me</Link>
          </HeroButton> */}
        </HeroDetails>
        
      </HeroContainer>
    </>
  )
}

export default Hero
