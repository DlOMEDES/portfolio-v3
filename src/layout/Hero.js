import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import config from "../config/index"
import heroImage from "../images/hero-image.png"
import { device } from "../utils/mixins"

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

// styles
const { colors } = theme
const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 95vh;
`

const HeroDetails = styled.div`
  padding-top: 15rem;
  line-height: 1.5;
  letter-spacing: 0.1rem;
`
const HeroImage = styled.div`
  padding-top: 15rem;

  img {
    width: 27.5rem;
    border-radius: 10rem;
  }

  @media ${device.tablet} {
    display: none;
  }
`

const Hi = styled.h4`
  color: rgb(${colors.violet});
  margin: 0 0 2rem 0.3rem;
  font-size: 2rem;
  font-weight: 400;

  @media ${device.tablet} {
    font-size: 1.8rem;
    margin: 0;
  }
`
const Name = styled.h2`
  color: rgb(${colors.white});
  margin: 0;
  font-size: 6rem;
  font-weight: 900;

  @media ${device.tablet} {
    font-size: 4rem;
  }
`
const Subtitle = styled.h3`
  color: rgb(${colors.ashblueManatee});
  font-size: 6rem;
  font-weight: 900;

  @media ${device.tablet} {
    font-size: 3rem;
  }
`
const ContactBtn = styled.div`
  margin: 6rem 0;
  a {
    border-radius: 10rem;
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
