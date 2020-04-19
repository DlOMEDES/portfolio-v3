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

const HyperLink = styled.a`
  padding: 1rem;
`

const IconGithub = styled(AiFillGithub)`
  font-size: 2.5rem;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 3.5rem;
    color: rgb(${colors.violet});
  }
`

const IconLinkedin = styled(TiSocialLinkedinCircular)`
  font-size: 2.5rem;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 3.5rem;
    color: rgb(${colors.violet});
  }
`
const IconTwitter = styled(AiOutlineTwitter)`
  font-size: 2.5rem;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 3.5rem;
    color: rgb(${colors.violet});
  }
`
const IconCodepen = styled(AiFillCodepenCircle)`
  font-size: 2.5rem;
  color: rgb(${colors.ashblueManatee});

  transition: all 0.3s ease-out;

  &:hover {
    font-size: 3.5rem;
    color: rgb(${colors.violet});
  }
`

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
