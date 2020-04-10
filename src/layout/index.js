import React from "react"
import GlobalStyle from "../utils/GlobalStyle"
import Header from "./Header"
import Footer from "./Footer"
import MyEmail from "../components/my-email"
import Social from "../components/Social"
import { Main, MainContainer } from "../utils/variables"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Social />
        <MyEmail />
        <Header />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </Main>
    </>
  )
}

export default Layout
