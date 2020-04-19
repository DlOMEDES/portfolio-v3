import React from "react"
import styled from "styled-components"
import hill from "../images/hill.svg"
import config from "../config"

const StyledFooter = styled.footer`
  background: url(${hill}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 20rem;
  position: relative;
`

const Copy = styled.p`
  position: absolute;
  top: 10rem;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Copy>Created by {config.name} © 2019</Copy>
    </StyledFooter>
  )
}

export default Footer
