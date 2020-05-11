import React from "react"
import styled from "styled-components"
// import { Link as CardLink } from "gatsby"
import theme from "../utils/theme"
import SectionTitle from "../components/SectionTitle"
import restate from "../images/restate.png"
import lenses from "../images/lenses.png"
import spartan from "../images/spartan-fitness.png"
import { device } from "../utils/variables"
const { colors, shadows } = theme

const Work = () => {
  return (
    <WorkContainer id="work" className="sectionPad">
      <WorkHead>
        <SectionTitle title="Work" />
        <ShapeContainer />
      </WorkHead>
      <WorkGrid>
        <Card href="https://dlomedes.github.io/spartan-fitness/">
          <CardOverlay>
            <h4>WordPress Custom Fitness Theme </h4>
          </CardOverlay>
        </Card>
        <Card href="http://nice-things.surge.sh/">
          <CardOverlay>
            <h4>Travel Landing Page</h4>
          </CardOverlay>
        </Card>
        <Card href="https://dlomedes.github.io/lr-html-email/">
          <CardOverlay>
            <h4>Responsive Html Email Template</h4>
          </CardOverlay>
        </Card>
        <Card href="/">
          <CardOverlay>
            <h4>Comsing Soon</h4>
          </CardOverlay>
        </Card>
        <Card href="https://r-estate.netlify.app/">
          <CardOverlay>
            <h4>Real Estate Web App</h4>
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
  transition: all 0.4s ease-in-out;
  border: 1px solid rgb(${colors.violet});

  h4 {
    color: rgb(${colors.white});
    padding: 1rem 2rem;
    text-transform: uppercase;
    font-size: 2rem;

    &:hover {
      color: rgb(${colors.violet});
    }
  }
`

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 14rem);
  grid-gap: 3rem;
  padding-top: 25rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 32rem);
    grid-gap: 8rem;
  }
`

const ShapeContainer = styled.div`
  width: 16rem;
  height: 16rem;
  position: absolute;
  top: -5rem;
  left: -2rem;
  border-radius: 50%;
  display: inline-block;
  box-shadow: ${shadows.sections} rgb(${colors.violet}, 0.3);

  @media ${device.tablet} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const WorkHead = styled.div`
  position: relative;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`
const WorkContainer = styled.section`
  position: relative;
`

const Card = styled.a`
  position: relative;
  padding: 4rem;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    ${CardOverlay} {
      left: 0;
    }
  }
  &:nth-child(1) {
    background: url(${spartan});
    background-size: cover;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  &:nth-child(2) {
    background: rgb(29, 160, 137) center center no-repeat;
    grid-column: 3/4;
    grid-row: 1/3;
    background-size: cover;
  }
  &:nth-child(3) {
    background: url(${lenses}) center center no-repeat;
    grid-column: 4/5;
    grid-row: 1/-1;
    background-size: cover;
  }
  &:nth-child(4) {
    background: rgb(36, 162, 170) top center no-repeat;
    grid-column: 1/2;
    grid-row: 3/5;
    background-size: cover;
  }
  &:nth-child(5) {
    background: url(${restate}) center center no-repeat;
    background-size: 100%;
    grid-column: 2/4;
    grid-row: 3/5;
    background-size: cover;
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    @media ${device.tablet} {
      grid-column: auto;
      grid-row: auto;
    }
  }
`
