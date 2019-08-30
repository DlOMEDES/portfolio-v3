import React from "react"
import { GlobalStyle } from "./styles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
