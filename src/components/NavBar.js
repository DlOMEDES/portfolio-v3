import React from "react"
import Link from "gatsby-link"
import logo from "../images/gatsby-icon.png"
import styled from "styled-components"
import { device } from "../utils/variables"
import DrawerMenuBtn from "./DrawerMenuBtn"
import NavLinks from "../config/NavLinks"

const NavContainter = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media ${device.portrait} {
    flex-direction: row;
  }
`

const Logo = styled.div`
  a {
    img {
      width: 5rem;
      height: 5rem;
    }
  }

  @media ${device.portrait} {
    left: 5rem;
    top: -1rem;
  }

  @media ${device.phone} {
    left: 1rem;
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
      <NavLinks styleClass="nav-links" />

      <DrawerMenuBtn click={toggle} show={show} />
    </NavContainter>
  )
}

export default NavBar
