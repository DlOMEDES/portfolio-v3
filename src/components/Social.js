import React from "react"
import styled from "styled-components"
import codepenIcon from "../utils/icons/codepen-icon.png"
import linkedinIcon from "../utils/icons/linkedin-icon.png"
import twitterIcon from "../utils/icons/twitter-icon.png"
import theme from "../utils/theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"

const Social = () => {
  return (
    <SocialContainer>
      <SocialList>
        <ListItem>
          <HyperLink href="http://github.com">
            <FontAwesomeIcon icon={faCheckSquare} color="red" />
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
