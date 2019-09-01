import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
// import theme from "../utils/theme"
// const { colors } = theme

export const HeaderContainer = styled.header`
  padding: 0 50px;
  height: 100px;
  display: flex;
  align-items: center;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
    </HeaderContainer>
  )
}

export default Header
