import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCodepenCircle,
} from "react-icons/ai"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { device } from "../utils/variables"
// styling
const { colors } = theme

const SocialContainer = styled.div`
  width: 4rem;
  position: fixed;
  bottom: 0;
  left: 4rem;

  @media ${device.portrait} {
    display: none;
  }
`
const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:after {
    content: "";
    display: block;
    width: 0.1rem;
    height: 20rem;
    border: 0.5px solid rgb(${colors.ashblueManatee});
    margin: 0 auto;
  }
`

const ListItem = styled.li`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`

const IconGithub = styled(AiFillGithub)`
  font-size: 3rem;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 4rem;
    color: rgb(${colors.violet});
  }
`

const IconLinkedin = styled(TiSocialLinkedinCircular)`
  font-size: 3rem;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 4rem;
    color: rgb(${colors.violet});
  }
`
const IconTwitter = styled(AiOutlineTwitter)`
  font-size: 3rem;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 4rem;
    color: rgb(${colors.violet});
  }
`
const IconCodepen = styled(AiFillCodepenCircle)`
  font-size: 3rem;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 4rem;
    color: rgb(${colors.violet});
  }
`

const Social = () => {
  return (
    <SocialContainer>
      <SocialList>
        <ListItem>
          <a href="https://github.com/DlOMEDES">
            <IconGithub />
          </a>
        </ListItem>
        <ListItem>
          <a href="https://www.linkedin.com/in/diomedeslajara/">
            <IconLinkedin />
          </a>
        </ListItem>
        <ListItem>
          <a href="https://twitter.com/dl_ajara">
            <IconTwitter />
          </a>
        </ListItem>
        <ListItem>
          <a href="https://codepen.io/DlOMEDES">
            <IconCodepen />
          </a>
        </ListItem>
      </SocialList>
    </SocialContainer>
  )
}

export default Social
