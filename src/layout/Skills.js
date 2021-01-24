import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import SectionTitle from "../components/SectionTitle"
import terminal from "../config/terminal"
import { device } from "../utils/variables"
// import { Link } from "gatsby"
import SkillIcons from "../config/skills"

// STYLES
const { colors, shadows } = theme

const Input = styled.p`
  color: rgb(${colors.white});

  &:before {
    content: "> ";
    font-size: 2.5rem;
    font-weight: 900;
  }
  &:last-child {
    content: "&nbsp;";
    animation: caret 1s steps(1) infinite;
    background: #f7f7f7a6;
  }
`
const Output = styled.p`
  color: rgb(${colors.ashblueManatee});
`
const Statement = styled.div`
  p {
    text-transform: initial;
  }
  &:first-child {
    padding: 5rem 0 0 0;
  }
  margin: 0 0 3.5rem 5rem;

  &:nth-child(2) {
  }
  @media ${device.tablet} {
    margin: 0px 1rem 3.5rem 3rem;
  }
`

const ColoredDot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-left: 9px;

  &.ash {
    background-color: rgb(${colors.ashblueManatee});
    border: 1px solid rgb(${colors.ashblueManatee});
  }

  &.violet {
    background-color: rgb(${colors.violet});
    border: 1px solid rgb(${colors.violet});
  }
  &.midnight {
    background-color: rgb(${colors.midnightPurple});
    border: 1px solid rgb(${colors.midnightPurple});
  }
`

const Terminal = styled.div`
  text-transform: capitalize;
  padding-top: 21rem;
`
const TerminalHeader = styled.div`
  height: 28px;
  background-color: #e4e3e5;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgb(${colors.white});
`
const TerminalWindow = styled.div`
  background-color: rgb(${colors.black});
  border-radius: 0 0 0.4rem 0.4rem;
  font-family: Consolas, Lucida Console, monospace;
  padding: 0 0 3rem 0;
`

const ShapeContainer = styled.div`
  position: absolute;
  font-size: 26rem;
  color: rgb(${colors.midnightPurple});
  text-shadow: ${shadows.shapes} rgba(${colors.violet}, 0.3);
  left: -7rem;
  top: -23rem;

  @media ${device.tablet} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
  }
`

const AboutHead = styled.div`
  position: relative;
`

const AboutContainer = styled.section`
  background-size: cover;
`
// const AboutBtn = styled(Button)`
//   text-align: center;
// `

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 6rem;

  h4 {
    grid-column: 1/-1;
    color: rgb(${colors.white});
    text-transform: uppercase;
    margin-left: 3rem;
  }

  .logos {
    text-align: center;
    h5 {
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
  }
`
const Icon = styled.span`
  font-size: 5rem;
  margin: 0.5rem;
`

const About = () => {
  return (
    <AboutContainer id="about" className="sectionPad">
      <AboutHead>
        <SectionTitle title="My Skills" />
        <ShapeContainer>
          <span>▲</span>
        </ShapeContainer>
      </AboutHead>
      <Terminal>
        <TerminalHeader>
          <ColoredDot className="ash" />
          <ColoredDot className="violet" />
          <ColoredDot className="midnight" />
        </TerminalHeader>

        <TerminalWindow>
          {terminal.map((statement, index, last) => {
            return (
              <Statement key={index}>
                <Input>{statement.input}</Input>
                <Output>{statement.output}</Output>
              </Statement>
            )
          })}
        </TerminalWindow>
      </Terminal>
      <Skills className="mSec10">
        <h4>My tools</h4>
        {SkillIcons.map((icon, index) => (
          <div className="logos" key={index}>
            <h5>{icon.text}</h5>
            <Icon>{icon.logo}</Icon>
          </div>
        ))}
      </Skills>
    </AboutContainer>
  )
}

export default About
