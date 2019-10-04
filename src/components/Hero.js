import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import config from "../config/index"
import selfImage from "../images/self-bg.png"

const { colors } = theme

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 10px;
  min-height: 100vh;
`

const HeroDetails = styled.div`
  padding-top: 80px;
`
const HeroImage = styled.div`
  padding-top: 80px;

  img {
    width: 350px;
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
const Blurb = styled.div`
  max-width: 700px;
  p {
    color: ${colors.blueQueen};
    font-size: 24px;
    margin: 0px;
  }
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
    &:hover {
      transition: ease-in-out 0.3s;
      background: ${colors.roseRed};
      color: ${colors.white};
    }
  }
`

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroDetails>
          <Hi>Hi, my name is</Hi>
          <Name>{config.name}</Name>
          <Subtitle>{config.iDO}</Subtitle>
          <Blurb>
            <p>{config.siteDescription}</p>
          </Blurb>
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
