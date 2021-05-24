import React, { Component } from "react"
import Navbar from "../components/NavBar"
import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/variables"
import DrawerMenu from "../components/DrawerMenu"
const { colors, shadows } = theme

const HeaderContainer = styled.header`
  padding: 0 4rem;
  height: 10rem;
  display: flex;
  align-items: center;
  background: ${colors.midnight};
  box-shadow: ${shadows.black};
  z-index: 1;
  position: relative;

  @media ${device.portrait} {
    justify-content: center;
    width: 100vw;
    padding: 0 1rem;
  }
`

class Header extends Component {
  state = {
    drawerOpen: false,
  }

  handleToggle = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen }
    })
  }

  render() {
    // let drawer

    // if (this.state.drawerOpen) {
    //   drawer = <DrawerMenu />
    // }

    return (
      <HeaderContainer>
        <Navbar toggle={this.handleToggle} show={this.state.drawerOpen} />
        {/* {drawer} */}
        <DrawerMenu show={this.state.drawerOpen} />
      </HeaderContainer>
    )
  }
}

export default Header
