import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import config from "../config/index"
import heroImage from "../images/self-noBG.png"
import { device, Button } from "../utils/variables"
import { Link } from "gatsby"

// styles
const { colors } = theme

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(min-content, 2fr) 1fr;
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
`
const HeroImage = styled.div`
  margin: 0 auto;
  img {
    width: 20rem;
    border-radius: 1rem;
    background: rgb(${colors.ashblueManatee});
  }

  @media ${device.tablet} {
    display: none;
  }
`

const Hi = styled.p`
  color: rgb(${colors.ashblueManatee});
  margin: 0 0 1.5rem 0;
`
const Title = styled.h1`
  color: rgb(${colors.white});
`
const Subtitle = styled.h5`
  margin: 1.5rem 0;
  color: rgba(${colors.violet}, 0.5);
  text-transform: none;
`

const HeroButton = styled(Button)`
  padding: 0;
  margin: 5rem 0;
  a {
    padding: 1rem 5rem;
  }
`

const Hero = () => {
  return (
    <>
      <HeroContainer id="hero" className="sectionPad">
        <HeroDetails>
          <Hi>Hi, my name is {config.name}.</Hi>
          <Title>{config.iDo}</Title>
          <Subtitle>{config.siteDescription}</Subtitle>
          <HeroButton>
            <Link to="/contact">contact me</Link>
          </HeroButton>
        </HeroDetails>
        <HeroImage>
          <img src={heroImage} alt="" />
        </HeroImage>
      </HeroContainer>
    </>
  )
}

export default Hero
