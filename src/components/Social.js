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
            <IconGithub />
          </HyperLink>
        </ListItem>
        <ListItem>
          <HyperLink href="https://www.linkedin.com/in/diomedeslajara/">
            <IconLinkedin />
          </HyperLink>
        </ListItem>
        <ListItem>
          <HyperLink href="https://twitter.com/dl_ajara">
            <IconTwitter />
          </HyperLink>
        </ListItem>
        <ListItem>
          <HyperLink href="https://codepen.io/DlOMEDES">
            <IconCodepen />
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
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    background-color: rgb(${colors.ashblueManatee});
    margin: 0px auto;
  }
`

const ListItem = styled.li`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 20px;
  }
`

const HyperLink = styled.a`
  padding: 10px;
`

const IconGithub = styled(AiFillGithub)`
  font-size: 30px;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 35px;
    color: rgb(${colors.violet});
  }
`

const IconLinkedin = styled(TiSocialLinkedinCircular)`
  font-size: 30px;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 35px;
    color: rgb(${colors.violet});
  }
`
const IconTwitter = styled(AiOutlineTwitter)`
  font-size: 30px;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 35px;
    color: rgb(${colors.violet});
  }
`
const IconCodepen = styled(AiFillCodepenCircle)`
  font-size: 30px;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 35px;
    color: rgb(${colors.violet});
  }
`
