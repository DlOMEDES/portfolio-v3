import React from "react"
import Link from "gatsby-link"
import logo from "../images/logo-ash.png"
import styled from "styled-components"
import theme from "../utils/theme"
// import { fadeIn } from "../utils/animations"

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
  color: rgb(${colors.ashblueManatee});
  font-size: 16px;
  display: flex;
  transition: all 0.3s ease-out;
  /* &:hover {
    color: ${colors.roseRed};
  } */
  li {
    margin: 0 30px;
  }

  li a {
    color: rgb(${colors.white});
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease-out;
    &:hover {
      color: rgb(${colors.violet});
    }
  }
`

const Nav = () => {
  return (
    <NavContainter>
      <Logo>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Logo>

      <NavList>
        <li>
          <Link to="/#services" activeClassName="ServiceContainer">
            Services
          </Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#work">Work</Link>
        </li>
        <li>
          <Link to="/#blog">Blog</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </NavList>
    </NavContainter>
  )
}

export default Nav
