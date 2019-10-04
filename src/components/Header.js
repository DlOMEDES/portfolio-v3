import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import theme from "../utils/theme"
const { colors } = theme

export const HeaderContainer = styled.header`
  padding: 10px 40px;
  height: 100px;
  display: flex;
  align-items: center;
  background: ${colors.blueMadison};
`

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
    </HeaderContainer>
  )
}

export default Header
