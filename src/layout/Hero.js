import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import config from "../config/index"
import heroImage from "../images/self-noBG.png"
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
  }
`

const HeroDetails = styled.div`
  line-height: 1.3;
  letter-spacing: 0.1rem;
`
const HeroImage = styled.div`
  img {
    width: 20rem;
    border-radius: 1rem;
    background: rgb(${colors.ashblueManatee});
  }

  @media ${device.tablet} {
    display: none;
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
`
const Subtitle = styled.h4`
  color: rgb(${colors.ashblueManatee});
  font-size: 6rem;
`
const ContactBtn = styled.div`
  margin: 6rem 0;
  a {
    border-radius: 0.5rem;
    background: transparent;
    color: rgb(${colors.white});
    padding: 1.2rem 2.4rem;
    font-size: 1.8rem;

    border: 0.1rem solid rgb(${colors.violet});
    transition: all 0.4s ease-in-out;
    &:hover {
      background: rgba(${colors.violet}, 0.5);
      color: rgb(${colors.white});
      border: 0.1rem solid transparent;
    }
  }
`

const Hero = () => {
  return (
    <>
      <HeroContainer id="hero">
        <HeroDetails>
          <Hi>Hi, my name is</Hi>
          <Name>{config.name}</Name>
          <Subtitle>{config.iDO}</Subtitle>
          <ContactBtn>
            <a href="/">Contact me</a>
          </ContactBtn>
        </HeroDetails>
        <HeroImage>
          <img src={heroImage} alt="" />
        </HeroImage>
      </HeroContainer>
    </>
  )
}

export default Hero
