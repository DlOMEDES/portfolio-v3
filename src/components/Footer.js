import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

export const StyledFooter = styled.footer`
  background: black;
  color: white;
  padding: 2rem;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>Created by author © 2019</p>
    </StyledFooter>
  )
}

export default Footer
