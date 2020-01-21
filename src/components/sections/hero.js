import React from "react"
import styled from "styled-components"
import theme from "../../utils/theme"
import config from "../../config/index"
import heroImage from "../../images/hero-image.png"

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
  grid-template-columns: 3fr 1fr;
  grid-gap: 10px;
  min-height: 95vh;
`

const HeroDetails = styled.div`
  padding-top: 150px;
  line-height: 1.5;
  letter-spacing: 1px;
`
const HeroImage = styled.div`
  padding-top: 150px;

  img {
    width: 275px;
    border-radius: 100px;
  }
`

const Hi = styled.h4`
  color: rgb(${colors.violet});
  margin: 0 0 20px 3px;
  font-size: 20px;
  font-weight: 400;
`
const Name = styled.h2`
  color: rgb(${colors.white});

  margin: 0;
  font-size: 60px;
  font-weight: 900;
`
const Subtitle = styled.h3`
  color: rgb(${colors.ashblueManatee});
  font-size: 60px;
  font-weight: 900;
`
const ContactBtn = styled.div`
  margin: 60px 0;
  a {
    border-radius: 100px;
    background: transparent;
    color: rgb(${colors.white});
    padding: 12px 24px;
    font-size: 18px;

    border: 1px solid rgb(${colors.violet});
    transition: all 0.4s ease-in-out;
    &:hover {
      background: rgba(${colors.violet}, 0.3);
      color: rgb(${colors.white});
      border: 1px solid transparent;
    }
  }
`
