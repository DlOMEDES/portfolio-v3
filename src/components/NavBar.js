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
    width: 50px;
    height: 40px;
  }
`

export const NavList = styled.ol`
  list-style-type: decimal-leading-zero;
  color: ${colors.white};
  display: flex;
  &:hover {
    color: ${colors.roseRed};
  }
  li {
    margin: 0 30px;
  }

  li a {
    color: ${colors.roseRed};
    font-size: 20px;
    font-weight: 600;
    &:hover {
      color: ${colors.white};
    }
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
