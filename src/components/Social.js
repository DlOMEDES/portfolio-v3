import React from "react"
import styled from "styled-components"
import codepenIcon from "../utils/icons/codepen-icon.png"
import linkedinIcon from "../utils/icons/linkedin-icon.png"
import githubIcon from "../utils/icons/github-icon.png"
import twitterIcon from "../utils/icons/twitter-icon.png"
const SocialContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 20px;
  left: 50px;
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
  &:last-of-type {
    margin-bottom: 20px;
  }
`

const HyperLink = styled.a`
  padding: 10px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  img {
    width: 30px;
    height: 30px;
  }
`

const Social = () => {
  return (
    <SocialContainer>
      <SocialList>
        <ListItem>
          <HyperLink href="http://github.com">
            <img src={githubIcon} alt="" />
          </HyperLink>
        </ListItem>
        <ListItem>
          <HyperLink href="http://linkedin.com">
            <img src={linkedinIcon} alt="" />
          </HyperLink>
        </ListItem>
        <ListItem>
          <HyperLink href="http://twitter.com">
            <img src={twitterIcon} alt="" />
          </HyperLink>
        </ListItem>
        <ListItem>
          <HyperLink href="http://codepen.io">
            <img src={codepenIcon} alt="" />
          </HyperLink>
        </ListItem>
      </SocialList>
    </SocialContainer>
  )
}

export default Social
