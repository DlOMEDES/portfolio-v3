import React from "react"
import GlobalStyle from "../utils/GlobalStyle"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import MyEmail from "../components/my-email"
import Social from "../components/Social"

export const MainContainer = styled.main`
  padding: 70px 275px;
  line-height: 1.3;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Social />
      <MyEmail />
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  )
}

export default Layout
