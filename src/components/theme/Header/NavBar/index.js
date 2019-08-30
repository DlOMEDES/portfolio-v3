import React from "react"
import logo from "images/logo.png"
import { NavContainter, NavList, Logo } from "./styles"

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
