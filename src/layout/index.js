import React from "react"
import GlobalStyle from "../utils/GlobalStyle"
import Header from "./Header"
import Footer from "./Footer"
import MyEmail from "../components/my-email"
import Social from "../components/Social"
import { MainContainer } from "../utils/variables"

const Layout = ({ children }) => {
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
