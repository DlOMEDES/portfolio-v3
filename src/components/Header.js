import React from "react"
import { Wrapper } from "./theme/Header/styles"
import Navbar from "./NavBar"
import styled from "styled-components"

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  )
}

export default Header
