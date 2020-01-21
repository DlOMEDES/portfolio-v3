import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"

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
const { colors } = theme

const MyEmailContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 20px;
  right: 40px;
`
const SocialList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    font-size: 14px;
    writing-mode: vertical-rl;
    color: rgb(${colors.ashblueManatee});
    margin: 20px auto;
    padding: 10px;
    letter-spacing: 2px;
    transition: all 0.3s ease-in-out;
    &:hover {
      font-size: 16px;
      writing-mode: vertical-rl;
      color: rgb(${colors.violet});
      margin: 20px auto;
      padding: 10px;
      letter-spacing: 2px;
    }
  }
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    background-color: rgb(${colors.ashblueManatee});
    margin: 0px auto;
  }
`
