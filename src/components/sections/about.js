import React from "react"
import styled from "styled-components"
import config from "../../config/index"
import theme from "../../utils/theme"
import bgCode from "../../images/bgCode.png"
import { DiHtml5 } from "react-icons/di"

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutHead>
        <AboutTitle>About me</AboutTitle>
        <AboutShape>
          <span>▲</span>
        </AboutShape>
      </AboutHead>
      <AboutDetail>
        <p>{config.siteDescription}</p>
        <Tech>
          <TechList>
            <DiHtml5 size="100px" color={colors.ashblueManatee} />
          </TechList>
          <TechList></TechList>
          <TechList></TechList>
          <TechList></TechList>
          <TechList></TechList>
          <TechList></TechList>
        </Tech>

        <Tools>
          <h4>Tools and Technologies</h4>
        </Tools>
      </AboutDetail>
    </AboutContainer>
  )
}

export default About
// styles
const { colors, shadows } = theme
const TechList = styled.li``
const Tech = styled.ul``
const Tools = styled.div``
const AboutTitle = styled.h2`
  position: absolute;
  z-index: 1;
  color: rgb(${colors.white});
  text-transform: uppercase;
  letter-spacing: 2px;
  top: 120px;
`
const AboutShape = styled.div`
  span {
    position: absolute;
    font-size: 180px;
    color: rgb(${colors.midnightPurple});
    text-shadow: ${shadows.shapes} rgba(${colors.violet}, 0.7);
    left: -50px;
  }
`

const AboutDetail = styled.div`
  background: url(${bgCode}) center center no-repeat;
  margin-top: 59px;
  p {
    font-size: 24px;
    margin: 0px;
  }
`

const AboutHead = styled.div`
  padding-bottom: 200px;
  position: relative;
`

const AboutContainer = styled.section`
  background-size: cover;
  margin-bottom: 350px;
`
