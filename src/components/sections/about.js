import React from "react"
import styled from "styled-components"
// import Layout from '../components/layout'
import config from "../../config/index"
import theme from "../../utils/theme"
import bgCode from "../../images/bgCode.png"
import { DiHtml5 } from "react-icons/di"

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutHead>
        <h3>About me</h3>
        <AboutShape>
          <span></span>
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
const { colors } = theme
const TechList = styled.li``
const Tech = styled.ul``
const Tools = styled.div``
const AboutShape = styled.div`
   position: relative;
      width: 100px;
      height: 90px;
    }
    &:before,
    &:after {
      position: absolute;
      content: "";
      left: 50px;
      top: 0;
      width: 50px;
      height: 80px;
      background: red;
      border-radius: 50px 50px 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }
    &after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
`

const AboutDetail = styled.div`
  background: url(${bgCode}) center center no-repeat;
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
