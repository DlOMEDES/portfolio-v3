import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/mixins"

const { colors } = theme

const MyEmailContainer = styled.div`
  width: 4rem;
  position: fixed;
  bottom: 2rem;
  right: 1rem;

  @media ${device.tablet} {
    display: none;
    right: 0;
    top: 25%;
  }
`
const SocialList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    font-size: 1.4rem;
    writing-mode: vertical-rl;
    color: rgb(${colors.ashblueManatee});
    margin: 2rem auto;
    padding: 1rem;
    letter-spacing: 0.2rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      font-size: 1.6rem;
      writing-mode: vertical-rl;
      color: rgb(${colors.violet});
      margin: 2rem auto;
      padding: 1rem;
      letter-spacing: 0.2rem;
    }
  }
  &:after {
    content: "";
    display: block;
    width: 0.1rem;
    height: 9rem;
    background-color: rgb(${colors.ashblueManatee});
    margin: 0 auto;
    @media ${device.tablet} {
      content: none;
    }
  }
`

const MyEmail = () => {
  return (
    <MyEmailContainer>
      <SocialList>
        <a href="diomedes.lajara@gmail.com">diomedes.lajara@gmail.com</a>
      </SocialList>
    </MyEmailContainer>
  )
}

export default MyEmail

// styling
