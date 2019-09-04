import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import config from "../config/index"
const { colors } = theme

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`
const Hi = styled.h4`
  color: ${colors.blueJaguar};
  margin: 0 0 20px 3px;
  font-size: 24px;
`
const Name = styled.h2`
  line-height: 1.1;
  margin: 0;
  color: ${colors.blueJaguar};
  font-size: 60px;
`
const Subtitle = styled.h3`
  font-size: 60px;
  line-height: 1.1;
  color: ${colors.blueJaguar};
`
const Blurb = styled.div`
  margin-top: 10px;
  font-size: 24px;
  max-width: 700px;
  color: ${colors.blueJaguar};
`

const ContactBtn = styled.div`
  margin: 50px 0;
  a {
    border-radius: 100px;
    background: ${colors.blueJaguar};
    color: ${colors.white};
    padding: 15px 20px;
    font-size: 18px;
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <Hi>Hi, my name is</Hi>
      <Name>{config.name}</Name>
      <Subtitle>{config.iDO}</Subtitle>
      <Blurb>
        <p>{config.siteDescription}</p>
      </Blurb>
      <ContactBtn>
        <a href="/">Contact me</a>
      </ContactBtn>
    </HeroContainer>
  )
}

export default Hero
