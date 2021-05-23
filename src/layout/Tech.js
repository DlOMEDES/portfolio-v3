import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import terminal from "../config/terminal"
import SkillIcons from "../config/skills"

import { device } from "../utils/variables"
// import { Link } from "gatsby"

// STYLES
const { colors } = theme

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
    background-color: rgb(${colors.midnight});
    border: 1px solid rgb(${colors.midnight});
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

const TechHead = styled.div`
  position: relative;
`

const TechContainer = styled.section`
  background-size: cover;
  @media ${device.tablet} {
    margin-bottom: 5rem;
  }
`
// const TechBtn = styled(Button)`
//   text-align: center;
// `

const ToolList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 6rem;
  margin: 5rem 0;
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
      font-size: 1.8rem;
    }
  }
`
const Icon = styled.span`
  font-size: 3.5rem;
  margin: 0.5rem;
`

const Title = styled.h2`
  z-index: 2;
  color: rgb(${colors.white});
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 3.5rem;
  text-align: center;
  @media ${device.tablet} {
    top: 50%;
    left: 50%;
  }
`

const Tech = () => {
  return (
    <TechContainer id="tech" className="secMargin">
      <TechHead>
        <Title>my tools</Title>
      </TechHead>
      <ToolList>
        {SkillIcons.map((icon, index) => (
          <div className="logos" key={index}>
            <h5>{icon.text}</h5>
            <Icon>{icon.logo}</Icon>
          </div>
        ))}
      </ToolList>
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
    </TechContainer>
  )
}

export default Tech
