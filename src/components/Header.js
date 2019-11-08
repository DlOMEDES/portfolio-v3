import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import theme from "../utils/theme"
const { colors } = theme

export const HeaderContainer = styled.header`
  padding: 0 40px;
  height: 70px;
  display: flex;
  align-items: center;
  background: ${colors.blueMadison};
  box-shadow: rgba(2, 12, 27, 0.7) 0px 0px 30px -20px;
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
