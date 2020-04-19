import React from "react"
import Link from "gatsby-link"
import logo from "../images/dl-logo.png"
import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/variables"
// import { fadeIn } from "../utils/animations"

const { colors } = theme

const NavContainter = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  img {
    width: 45px;
    height: 35px;
  }
`

const NavList = styled.ol`
  list-style-type: decimal-leading-zero;
  color: rgb(${colors.ashblueManatee});
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
    font-weight: 400;
    font-size: 1.4rem;
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
