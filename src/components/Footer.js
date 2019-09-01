import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { StyledFooter } from "./theme/Footer/styles"
import styled from "styled-components"

export const StyledFooter = styled.footer`
  background: black;
  color: white;
  padding: 2rem;
`

const Footer = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           author
  //         }
  //       }
  //     }
  //   `)
  //   const { author } = data.site.siteMetadata

  return (
    <StyledFooter>
      <p>Created by author © 2019</p>
    </StyledFooter>
  )
}

export default Footer
