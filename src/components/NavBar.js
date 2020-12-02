import React from "react"
import Link from "gatsby-link"
import logo from "../images/dl-logo.png"
import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/variables"
import DrawerMenuBtn from "./DrawerMenuBtn"

const { colors } = theme

const NavContainter = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media ${device.portrait} {
    flex-direction: column;
  }
`

const Logo = styled.div`
  z-index: 201;
  a {
    img {
      width: 5rem;
      height: 5rem;
    }
  }

  @media ${device.portrait} {
    position: absolute;
    left: 5rem;
    top: -1rem;
  }

  @media ${device.phone} {
    left: 1rem;
  }
`

const NavList = styled.ol`
  display: none;
  list-style-type: decimal-leading-zero;
  color: rgb(${colors.ashblueManatee});
  display: flex;
  transition: all 0.3s ease-out;

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

  @media ${device.portrait} {
    display: none;
  }
`

const NavBar = ({ toggle, show }) => {
  return (
    <NavContainter>
      <Logo>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Logo>
      <NavList>
        <li>
          <Link to="/" activeClassName="ServiceContainer">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </NavList>

      <DrawerMenuBtn click={toggle} show={show} />
    </NavContainter>
  )
}

export default NavBar
