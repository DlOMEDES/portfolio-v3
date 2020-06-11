import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/variables"

const { colors } = theme
const Title = styled.h2`
  z-index: 0;
  color: rgb(${colors.white});
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 3.5rem;
  position: absolute;

  @media ${device.tablet} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const SectionTitle = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  )
}

export default SectionTitle
