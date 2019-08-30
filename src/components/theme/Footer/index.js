import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { StyledFooter } from "./styles"

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
