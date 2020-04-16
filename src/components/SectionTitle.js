import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"

const { colors } = theme
const Title = styled.h2`
  z-index: 1;
  color: rgb(${colors.white});
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 3.5rem;
  position: absolute;
`

const SectionTitle = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  )
}

export default SectionTitle
