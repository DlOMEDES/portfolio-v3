import React from "react"
import styled from "styled-components"
// import config from "../../config/index"
import theme from "../utils/theme"
// import bgCode from "../../images/bgCode.png"
// import { DiHtml5 } from "react-icons/di"
import terminal from "../../content/terminal"

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutHead>
        <AboutTitle>About me</AboutTitle>
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
          {terminal.map((statement, index) => (
            <Statement key="index">
              <Input>{statement.input}</Input>
              <Output>{statement.output}</Output>
            </Statement>
          ))}
        </TerminalWindow>
      </Terminal>
    </AboutContainer>
  )
}

export default About

const { colors, shadows } = theme
const Input = styled.p`
  color: rgb(${colors.ashblueManatee});

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
  color: rgb(${colors.violet});
`
const Statement = styled.div`
  &:first-child {
    padding: 5rem 0 0 0;
  }
  margin: 0 0 3.5rem 5rem;
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

const AboutTitle = styled.h2`
  position: absolute;
  z-index: 1;
  color: rgb(${colors.white});
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  top: 12rem;
  font-size: 3.5rem;
`
const ShapeContainer = styled.div`
  span {
    position: absolute;
    font-size: 18rem;
    color: rgb(${colors.midnightPurple});
    text-shadow: ${shadows.shapes} rgba(${colors.violet}, 0.3);
    left: -5rem;
  }
`

const AboutHead = styled.div`
  padding-bottom: 30rem;
  position: relative;
`

const AboutContainer = styled.section`
  background-size: cover;
  margin-bottom: 35rem;
`
