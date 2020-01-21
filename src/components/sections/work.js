import React from "react"
import styled from "styled-components"
import { Link as CardLink } from "gatsby"
import theme from "../../utils/theme"
import restate from "../../images/restate.png"
import heats from "../../images/heats.png"
import lenses from "../../images/lenses.png"
import travler from "../../images/travler.png"
import spartan from "../../images/spartan-fitness.png"

const { colors, shadows } = theme

const Work = () => {
  return (
    <WorkContainer id="work">
      <WorkHead>
        <WorkTitle>Work</WorkTitle>
        <WorkCircle>
          <Circle />
        </WorkCircle>
      </WorkHead>
      <WorkGrid>
        <Card to="/realestate-app">
          <CardOverlay>
            <h4>Real Estate App</h4>
          </CardOverlay>
        </Card>
        <Card to="/lenses-email">
          <CardOverlay>
            <h4>Promotional Email</h4>
          </CardOverlay>
        </Card>
        <Card to="/">
          <CardOverlay>
            <h4>Travler Template</h4>
          </CardOverlay>
        </Card>
        <Card to="/">
          <CardOverlay>
            <h4>Eats Landing Page</h4>
          </CardOverlay>
        </Card>
        <Card to="/spartan-fitness">
          <CardOverlay>
            <h4>gym landing page</h4>
          </CardOverlay>
        </Card>
        <Card to="/">
          <CardOverlay>
            <h4>Empty App</h4>
          </CardOverlay>
        </Card>
      </WorkGrid>
    </WorkContainer>
  )
}

export default Work

// styles
const CardOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(${colors.midnightPurple}, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: -100%;
  transition: all 0.3s ease-in-out;

  h4 {
    color: rgb(${colors.white});
    background: rgb(${colors.violet});
    padding: 10px 20px;
    text-transform: uppercase;
  }
`
const Card = styled(CardLink)`
  position: relative;
  padding: 40px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    ${CardOverlay} {
      left: 0;
    }
  }
  &:nth-child(1) {
    background: url(${restate});
    background-size: cover;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  &:nth-child(2) {
    background: url(${lenses}) center center no-repeat;
    grid-column: 4/4;
    grid-row: 1/5;
    background-size: cover;
  }
  &:nth-child(3) {
    background: url(${travler}) center center no-repeat;
    grid-column: 1/2;
    grid-row: 3/5;
    background-size: cover;
  }
  &:nth-child(4) {
    background: url(${heats}) center center no-repeat;
    grid-column: 2/4;
    grid-row: 3/3;
    background-size: cover;
  }
  &:nth-child(5) {
    background: url(${spartan}) center center no-repeat;
    background-size: 100%;
    grid-column: 2/4;
    grid-row: 4/5;
    background-size: cover;
  }
  &:nth-child(6) {
    background: url(${spartan}) bottom no-repeat;
    /* background-size: 100%; */
    grid-column: 3/4;
    grid-row: 1/3;
    background-size: cover;
  }
`

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 150px);
  grid-gap: 30px;
`
const WorkTitle = styled.h2`
  position: absolute;
  z-index: 1;
  color: rgb(${colors.white});
  text-transform: uppercase;
  letter-spacing: 2px;
  top: 40px;
`
const WorkCircle = styled.div``

const Circle = styled.span`
  position: absolute;
  top: 0;
  left: -18px;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: ${shadows.small} rgb(${colors.violet});
`

const WorkHead = styled.div`
  padding-bottom: 200px;
  position: relative;
`
const WorkContainer = styled.section`
  position: relative;
  margin-bottom: 350px;
`
