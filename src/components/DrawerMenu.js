import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import theme from "../utils/theme"
const { colors } = theme

const Drawer = styled.nav`
  height: 100vh;
  width: 80vw;
  background: rgb(${colors.white});
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  &.open {
    transform: translateX(0);
  }

  ul {
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

const DrawerMenu = ({ show }) => {
  let drawClass = ""

  if (show) {
    drawClass = "open"
  }

  return (
    <Drawer className={drawClass}>
      <ul>
        <li>
          <Link
            target="_blank"
            to="/#services"
            activeClassName="ServiceContainer"
          >
            Services
          </Link>
        </li>
        <li>
          <Link target="_blank" to="/#about">
            About
          </Link>
        </li>
        <li>
          <Link target="_blank" to="/#work">
            Work
          </Link>
        </li>
        <li>
          <Link target="_blank" to="/#blog">
            Blog
          </Link>
        </li>
        <li>
          <Link target="_blank" to="/#contact">
            Contact
          </Link>
        </li>
      </ul>
    </Drawer>
  )
}

export default DrawerMenu
