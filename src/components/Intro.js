import React from "react"
// import AnchorLink from "react-anchor-link-smooth-scroll"
import { Header } from "../../theme/Header/index"
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles"
import logo from "../../../images/logo.png"

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper>
      <Details>
        <h1>Hi There!</h1>
        <h4>I’m John and I’m a Backend & Devops engineer!</h4>
      </Details>
      <Thumbnail>
        <img src={logo} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
)
