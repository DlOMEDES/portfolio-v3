import React from "react"
import { GlobalStyle } from "./styles"
import Header from "theme/Header"
import Footer from "theme/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
