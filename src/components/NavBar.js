import React from "react"
import logo from "images/logo.png"
import { NavContainter, NavList, Logo } from "./styles"
import styled from "styled-components"

export const NavContainter = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: black;
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
  li:before {
    content: "0" counter(item) ".";
    color: white;
    font-size: 12px;
  }
  a {
    padding: 12px 10px;
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
          <a href="#abut">About</a>
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
