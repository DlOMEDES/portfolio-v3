import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import NavLinks from "../config/NavLinks"

const { colors } = theme

const Drawer = styled.nav`
  height: 100vh;
  width: 70vw;
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
`

const DrawerMenu = ({ show }) => {
  let drawClass = ""

  if (show) {
    drawClass = "open"
  }

  return (
    <Drawer className={drawClass}>
      <NavLinks styleClass="side-links" />
    </Drawer>
  )
}

export default DrawerMenu
