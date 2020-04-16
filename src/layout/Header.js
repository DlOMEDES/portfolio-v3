import React from "react"
import Navbar from "../components/NavBar"
import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/mixins"

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

  @media ${device.tablet} {
    padding: 0 2rem;
    height: 0;
    margin-top: 1rem;
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
