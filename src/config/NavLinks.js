import React from "react"
import { Link } from "gatsby"
import { device } from "../utils/variables"
import styled from "styled-components"
import theme from "../utils/theme"
const { colors } = theme

const NavList = styled.ol`
  &.nav-links {
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
  }

  &.side-links {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin: 1rem 0;

      a {
        font-size: 2.5rem;
        font-weight: 600;
        color: rgb(${colors.midnightPurple});
      }
    }
  }
`

export default function NavLinks({ styleClass }) {
  return (
    <NavList className={styleClass}>
      <li>
        <Link to="/" activeClassName="ServiceContainer">
          Home
        </Link>
      </li>
      {/* <li>
        <Link to="/about">About</Link>
      </li> */}
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      {/* <li>
        <Link to="/blogs">Blogs</Link>
      </li> */}
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </NavList>
  )
}
