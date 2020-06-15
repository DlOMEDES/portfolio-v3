import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          url
          twitterUsername
        }
      }
    }
  `)
  return <Helmet title={data.site.siteMetadata.title} />
}

export default Head
