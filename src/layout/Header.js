import React from "react"
import Navbar from "../components/NavBar"
import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/variables"

const { colors, shadows } = theme

const HeaderContainer = styled.header`
  padding: 0 4rem;
  height: 7rem;
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
