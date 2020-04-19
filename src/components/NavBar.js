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

  @media ${device.portrait} {
    /* display: none; */
    flex-direction: column;
  }
`

const Logo = styled.div`
  z-index: 1;
  a {
    img {
      width: 45px;
      height: 35px;
    }
  }

  @media ${device.portrait} {
    position: absolute;
    left: 7.5rem;
    top: 0;

    a {
      background: rgb(${colors.midnightPurple});
      padding: 2rem;
      border-radius: 1rem;
    }
  }

  @media ${device.phone} {
    left: 5rem;

    a {
      padding: 1rem;
    }
  }
`

const NavList = styled.ol`
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
    padding: 9rem 0;
    width: 85vw;
    background: white;
    border-radius: 1rem;
    flex-direction: column;
    list-style-type: none;
    align-items: center;
    position: fixed;
    top: 7%;
    height: 75vh;

    li {
      padding: 1rem 0;
    }

    li a {
      font-weight: 700;
      color: rgb(${colors.midnightPurple});
      font-size: 2.4rem;
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
