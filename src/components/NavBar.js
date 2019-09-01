import React from "react"
import logo from "../images/logo.png"
import styled from "styled-components"
import theme from "../utils/theme"
const { colors } = theme

export const NavContainter = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
  img {
    width: 45px;
  }
`

export const NavList = styled.ol`
  display: flex;

  li {
    margin: 0 10px;
  }

  li a {
    color: ${colors.roseRed};
  }
`

const Nav = () => {
  return (
    <NavContainter>
      <Logo>
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </Logo>

      <NavList>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </NavList>
    </NavContainter>
  )
}

export default Nav
