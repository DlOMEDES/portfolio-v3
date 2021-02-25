import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import SectionTitle from "../components/SectionTitle"
import AboutBox from "../config/about-box"
import { device } from "../utils/variables"

const { colors, shadows } = theme

const Article = styled.article`
  transition: all 0.4s ease-in-out;
  padding: 4.5rem 3rem;
  margin: 0 3rem 0 0;

  &:hover {
    transform: scale(1.1);
  }

  &:last-child {
    margin: 0;
  }

  h4 {
    color: rgb(${colors.white});
    padding-bottom: 1rem 0;
  }

  h5 {
    color: rgb(${colors.violet});
    font-size: 2rem;
    padding: 1rem 0;
  }

  &:hover {
    background-color: rgb(${colors.midnightPurple});
    /* box-shadow: rgba(2, 12, 27, 0.8) 0px 0px 30px -10px; */
    box-shadow: ${shadows.boxes} rgba(${colors.violet}, 0.3);
    border-bottom: 0.3rem solid rgb(${colors.white});
  }

  @media ${device.tablet} {
    margin: 0;
  }
`
const AboutContent = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  letter-spacing: 0.1rem;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 22rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    max-width: 80%;
    margin: 0 auto;
  }

  @media ${device.phone} {
    max-width: 100%;
    padding-top: 15rem;
  }
`
const AboutHead = styled.div`
  position: relative;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`

const ShapeContainer = styled.div`
  box-shadow: ${shadows.sections} rgba(${colors.violet}, 0.3);
  width: 15rem;
  height: 15rem;
  position: absolute;
  top: -5rem;
  left: -2rem;

  @media ${device.tablet} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const AboutContainer = styled.section`
  position: relative;
`

const About = () => {
  return (
    <AboutContainer id="Abouts" className="sectionPad">
      <AboutHead>
        <SectionTitle title="What I do" />
        <ShapeContainer />
      </AboutHead>
      <AboutContent>
        {AboutBox.map((box, index) => (
          <Article key={index}>
            <h4>{box.title}</h4>
            <h5>{box.subtitle}</h5>
            <p>{box.text}</p>
            <br />
            <p>{box.extraText}</p>
          </Article>
        ))}
      </AboutContent>
    </AboutContainer>
  )
}

export default About
