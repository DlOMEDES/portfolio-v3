import React from "react"
import { GlobalStyle } from "../utils/GlobalStyle"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import theme from "../utils/theme"
import Social from "../components/Social"
const { colors } = theme

const Main = styled.div`
  color: ${colors.ashblueManatee};
  line-height: 1.3;
  font-family: "Poppins", Helvetica Neue, sans-serif;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Header />
        <Social />
        {/* <Email /> */}
        {children}
        <Footer />
      </Main>
    </>
  )
}

export default Layout
