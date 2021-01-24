import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/variables"

const { colors } = theme

const MyEmailContainer = styled.div`
  width: 4rem;
  position: fixed;
  bottom: 0;
  right: 5.5rem;

  @media ${device.portrait} {
    display: none;
  }
`
const SocialList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    font-size: 1.6rem;
    writing-mode: vertical-rl;
    color: rgb(${colors.ashblueManatee});
    margin: 2rem auto;
    padding: 1rem;
    letter-spacing: 0.2rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      font-size: 1.8rem;
      color: rgb(${colors.violet});
      letter-spacing: 0.2rem;
    }
  }
  &:after {
    content: "";
    display: block;
    width: 0.1rem;
    height: 20rem;
    /* background-color: rgb(${colors.ashblueManatee}); */
    border: 0.5px solid rgb(${colors.ashblueManatee});
    margin: 0 auto;
  }
`

const MyEmail = () => {
  return (
    <MyEmailContainer>
      <SocialList>
        <a href="mailto:diomedes.lajara@gmail.com">diomedes.lajara@gmail.com</a>
      </SocialList>
    </MyEmailContainer>
  )
}

export default MyEmail

// styling
