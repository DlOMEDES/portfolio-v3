import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../utils/GlobalStyle"
import Header from "./Header"
import Footer from "./Footer"
import MyEmail from "../components/my-email"
import Social from "../components/Social"
import { MainContainer } from "../utils/variables"

const getData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        twitterUsername
        url
      }
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(getData)
  console.log(data.site.siteMetadata)

  return (
    <>
      <GlobalStyle />
      <main>
        <Social />
        <MyEmail />
        <Header />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </main>
    </>
  )
}

export default Layout
