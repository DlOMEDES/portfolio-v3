import React from "react"
import styled from "styled-components"
import config from "../config/index"
import theme from "../utils/theme"

const About = () => {
  return (
    <section>
      <h4>More about me and skills</h4>
      <Blurb>
        <p>{config.siteDescription}</p>
      </Blurb>

      <p>Tools and Technologies</p>
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
