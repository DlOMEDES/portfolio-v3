import React from "react"
import Navbar from "./navbar"
import styled from "styled-components"
import theme from "../utils/theme"
const { colors, shadows } = theme

const HeaderContainer = styled.header`
  padding: 0 40px;
  height: 70px;
  display: flex;
  align-items: center;
  background: ${colors.midnightPurple};
  box-shadow: ${shadows.black};
  z-index: 1;
  position: relative;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
    </HeaderContainer>
  )
}

export default Header
