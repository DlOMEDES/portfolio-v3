import React from "react"
import Navbar from "../components/NavBar"
import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/variables"

const { colors, shadows } = theme

const HeaderContainer = styled.header`
  margin-top: 3rem;
  padding: 0 4rem;
  height: 7rem;
  display: flex;
  align-items: center;
  background: ${colors.midnightPurple};
  box-shadow: ${shadows.black};
  z-index: 1;
  position: relative;

  @media ${device.portrait} {
    justify-content: center;
    width: 100vw;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
    </HeaderContainer>
  )
}

export default Header
