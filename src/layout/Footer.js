import React from "react"
import styled from "styled-components"
import hill from "../images/hill.svg"
import config from "../config"

const StyledFooter = styled.footer`
  background: url(${hill}) no-repeat center;
  background-size: cover;
  padding: 0rem 0 15rem 0;
  position: relative;
`

const Copy = styled.p`
  position: absolute;
  left: 41%;
  top: 10rem;
  text-align: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Copy>Created by {config.name} © 2019</Copy>
    </StyledFooter>
  )
}

export default Footer
