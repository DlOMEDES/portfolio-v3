import React from "react"
import styled from "styled-components"
import config from "../config/index"
import theme from "../utils/theme"

const About = () => {
  return (
    <section>
      <h1>About</h1>
      <h4>More about me, this websites and tech stacks</h4>
      <Blurb>
        <p>{config.siteDescription}</p>
      </Blurb>
    </section>
  )
}

export default About
// styles
const { colors } = theme
const Blurb = styled.div`
  max-width: 700px;
  p {
    color: ${colors.blueQueen};
    font-size: 24px;
    margin: 0px;
  }
`
