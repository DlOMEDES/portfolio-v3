import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../utils/GlobalStyle"
import Header from "./Header"
import Footer from "./Footer"
import MyEmail from "../components/my-email"
import Social from "../components/Social"
import { MainContainer } from "../utils/variables"
import Head from "../components/Head"

const Layout = ({ children }) => {
  return (
    <>
      <Head />
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
