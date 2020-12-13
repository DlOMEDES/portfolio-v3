import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import SectionTitle from "../components/SectionTitle"
import terminal from "../../content/terminal"
import { device } from "../utils/variables"
import { Link } from "gatsby"
// STYLES

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
const AboutBtn = styled.div`
  margin: 6rem 0;
  text-align: center;
  a {
    border-radius: 0.5rem;
    background: transparent;
    color: rgb(${colors.white});
    padding: 1rem 10rem;
    font-size: 1.8rem;
    letter-spacing: 0.3rem;

    border: 0.1rem solid rgb(${colors.violet});
    transition: all 0.4s ease-in-out;
    &:hover {
      background: rgba(${colors.violet}, 0.5);
      color: rgb(${colors.white});
      border: 0.1rem solid transparent;
    }
  }
`

const About = () => {
  return (
    <AboutContainer id="about" className="sectionPad">
      <AboutHead>
        <SectionTitle title="About" />
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
        <AboutBtn>
          <Link to="/about">MORE ABOUT ME</Link>
        </AboutBtn>
      </Terminal>
    </AboutContainer>
  )
}

export default About
