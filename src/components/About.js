import React from "react"
import styled from "styled-components"
import config from "../config/index"
import theme from "../utils/theme"
import bgCode from "../images/bgCode.png"
import { DiHtml5 } from "react-icons/di"

const About = () => {
  return (
    <AboutContainer>
      <AboutHead>
        <h3>More about me and skills</h3>
      </AboutHead>
      <AboutDetail>
        <p>{config.siteDescription}</p>
      </AboutDetail>
      <Tools>
        <h4>Tools and Technologies</h4>
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
      </Tools>
    </AboutContainer>
  )
}

export default About
// styles
const { colors } = theme
const TechList = styled.li``
const Tech = styled.ul``
const Tools = styled.div``

const AboutDetail = styled.div`
  max-width: 700px;
  p {
    color: ${colors.blueQueen};
    font-size: 24px;
    margin: 0px;
  }
`

const AboutHead = styled.div``

const AboutContainer = styled.section`
  background: url(${bgCode}) center center no-repeat;
  background-size: cover;
`
