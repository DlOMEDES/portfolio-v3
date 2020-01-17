import React from "react"
import { GlobalStyle } from "../utils/GlobalStyle"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"
// import theme from "../utils/theme"
import Social from "./social"
import MyEmail from "./my-email"
// const { colors } = theme

const LayoutContent = styled.div`
  line-height: 1.3;
  font-family: "Poppins", Helvetica Neue, sans-serif;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <LayoutContent>
        <Header />
        {/* <Email /> */}
        {children}
        <Social />
        <MyEmail />
        <Footer />
      </LayoutContent>
    </>
  )
}

export default Layout
