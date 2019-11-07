import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCodepenCircle,
} from "react-icons/ai"
import { TiSocialLinkedinCircular } from "react-icons/ti"

const Social = () => {
  return (
    <SocialContainer>
      <SocialList>
        <ListItem>
          <HyperLink href="https://github.com/DlOMEDES">
            <AiFillGithub size="30px" color={colors.roseRed} />
          </HyperLink>
        </ListItem>
        <ListItem>
          <HyperLink href="https://www.linkedin.com/in/diomedeslajara/">
            <TiSocialLinkedinCircular size="30px" color={colors.roseRed} />
          </HyperLink>
        </ListItem>
        <ListItem>
          <HyperLink href="https://twitter.com/dl_ajara">
            <AiOutlineTwitter size="30px" color={colors.roseRed} />
          </HyperLink>
        </ListItem>
        <ListItem>
          <HyperLink href="https://codepen.io/DlOMEDES">
            <AiFillCodepenCircle size="30px" color={colors.roseRed} />
          </HyperLink>
        </ListItem>
      </SocialList>
    </SocialContainer>
  )
}

export default Social

// styling
const { colors } = theme

const SocialContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 20px;
  left: 40px;
`
const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    
  } */
`

const ListItem = styled.li`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 20px;
  }
`

const HyperLink = styled.a`
  padding: 10px;
  img {
    width: 30px;
    height: 30px;
    margin: 10px;
    /* border: 2px solid ${colors.white};
    border-radius: 50px; */
  }
`
