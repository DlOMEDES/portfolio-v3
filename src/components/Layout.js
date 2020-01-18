import React from "react"
import { GlobalStyle } from "../utils/GlobalStyle"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"
import theme from "../utils/theme"
import Social from "./social"
import MyEmail from "./my-email"
const { colors } = theme

export const MainContainer = styled.main`
  padding: 70px 275px;
  font-size: 20px;
  line-height: 1.3;
  background: ${colors.blueExpress};
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
