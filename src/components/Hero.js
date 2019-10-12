import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import config from "../config/index"
import selfImage from "../images/self-bg.png"

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroDetails>
          <Hi>Hi, my name is</Hi>
          <Name>{config.name}</Name>
          <Subtitle>{config.iDO}</Subtitle>
          <ContactBtn>
            <a href="/">Contact me</a>
          </ContactBtn>
        </HeroDetails>
        <HeroImage>
          <img src={selfImage} alt="" />
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
  min-height: 100vh;
`

const HeroDetails = styled.div`
  padding-top: 150px;
`
const HeroImage = styled.div`
  padding-top: 150px;

  img {
    width: 275px;
    border-radius: 100px;
  }
`

const Hi = styled.h4`
  color: ${colors.roseRed};
  margin: 0 0 20px 3px;
  font-size: 20px;
  font-weight: 400;
`
const Name = styled.h2`
  color: ${colors.white};
  font-weight: 700;
  margin: 0;
  font-size: 60px;
  font-weight: 900;
`
const Subtitle = styled.h3`
  color: ${colors.blueQueen};
  font-size: 60px;
  font-weight: 900;
`

const ContactBtn = styled.div`
  margin: 60px 0;
  a {
    border-radius: 100px;
    background: transparent;
    color: ${colors.roseRed};
    padding: 13px 35px;
    font-size: 16px;
    border: 1px solid ${colors.roseRed};
    transition: all 0.4s ease-in-out;
    &:hover {
      background: ${colors.roseRed};
      color: ${colors.white};
    }
  }
`
