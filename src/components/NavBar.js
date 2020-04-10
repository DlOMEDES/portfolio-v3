import React from "react"
import Link from "gatsby-link"
import logo from "../images/dl-logo.png"
import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/mixins"
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
    width: 50px;
    height: 40px;
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
    @media ${device.tablet} {
      margin: 2rem auto;
     
      &::marker {
        font-size: 5rem;
      }
    }
  }

  li a {
    color: rgb(${colors.white});
    font-weight: 600;
    transition: all 0.3s ease-out;
    &:hover {
      color: rgb(${colors.violet});
    }
    @media ${device.tablet} {
      font-size: 1.8rem;
    }
  }
  
  @media ${device.tablet} {
    display: none;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: black;
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
