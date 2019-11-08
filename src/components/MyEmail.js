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
    font-size: 12px;
    writing-mode: vertical-rl;
    color: ${colors.ashblueManatee};
    margin: 20px auto;
    padding: 10px;
    letter-spacing: 2px;
  }
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    background-color: ${colors.ashblueManatee};
    margin: 0px auto;
  }
`
