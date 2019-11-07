import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import estate from "../images/estate.png"
import heats from "../images/heats.png"
import lenses from "../images/lenses.png"
import travler from "../images/travler.png"

const { colors } = theme

const Work = () => {
  return (
    <WorkContainer>
      <WorkHead>
        <WorkTitle>Work</WorkTitle>
        <WorkArrow>
          <Rectangle />
          <Triangle />
        </WorkArrow>
      </WorkHead>
      <WorkGrid>
        <Card href="work/#">
          <CardOverlay>
            <h4>Real Estate App</h4>
          </CardOverlay>
        </Card>
        <Card href="work/#">
          <CardOverlay>
            <h4>Responsive Email</h4>
          </CardOverlay>
        </Card>
        <Card href="work/#">
          <CardOverlay>
            <h4>Page Template</h4>
          </CardOverlay>
        </Card>
        <Card href="work/#">
          <CardOverlay>
            <h4>Eats Landing Page</h4>
          </CardOverlay>
        </Card>
        <Card href="work/#">
          <CardOverlay>
            <h4>App</h4>
          </CardOverlay>
        </Card>
        <Card href="work/#">
          <CardOverlay>
            <h4>Real Estate App</h4>
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
  background: rgba(229, 64, 84, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: -100%;
  transition: all 0.3s ease-in-out;

  h4 {
    color: ${colors.white};
    background: ${colors.charcoalBlue};
    padding: 10px 20px;
    text-transform: uppercase;
  }
`
const Card = styled.a`
  grid-column: 1/3;
  grid-row: 1/1;
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
    background: url(${estate});
    background-size: cover;
    grid-column: 1/3;
    grid-row: 1/1;
  }
  &:nth-child(2) {
    background: url(${lenses}) center center no-repeat;
    grid-column: 3/3;
    grid-row: 1/5;
    background-size: cover;
  }
  &:nth-child(3) {
    background: url(${travler}) center center no-repeat;
    grid-column: 1/2;
    grid-row: 2/5;
    background-size: cover;
  }
  &:nth-child(4) {
    background: url(${heats}) center center no-repeat;
    grid-column: 2/3;
    grid-row: 2/3;
    background-size: cover;
  }
  &:nth-child(5) {
    background: url(${estate}) center center no-repeat;
    background-size: 100%;
    grid-column: 2/3;
    grid-row: 3/5;
    background-size: cover;
  }
`

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 250px);
  grid-gap: 20px;
`
const WorkTitle = styled.h2`
  position: absolute;
  z-index: 1;
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: -10px;
`
const WorkArrow = styled.div``
const Rectangle = styled.span`
  position: absolute;
  width: 35px;
  height: 55px;
  background: ${colors.roseRed};
  top: -20px;
  left: 24px;
`
const Triangle = styled.span`
  position: absolute;
  top: 35px;
  left: -3px;
  width: 0;
  height: 0;
  border-left: 45px solid transparent;
  border-right: 45px solid transparent;
  border-top: 45px solid ${colors.roseRed};
`

const WorkHead = styled.div`
  padding-bottom: 145px;
`
const WorkContainer = styled.section`
  position: relative;
  margin-top: 200px;
`
