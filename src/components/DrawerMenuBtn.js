import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/variables"

const { colors } = theme

const MenuBtn = styled.button`
  border: none;
  display: none;
  &:focus {
    outline: none;
  }
  @media ${device.portrait} {
    display: flex;
    flex-direction: column;
    right: 5rem;
    top: 2rem;
    cursor: pointer;
    background: transparent;
    z-index: 201;
    /* lines */
    .menuBtn-line {
      width: 3.5rem;
      height: 0.4rem;
      margin: 0 0 0.6rem 0;
      background: rgb(${colors.white});
      transition: transform 0.3s ease-in;
    }

    &.close {
      /* // rotate btn lines into X */
      transform: rotate(180deg);
      /* // animation: rotate180 1s ease-in-out; */
      .menuBtn-line {
        background: rgb(${colors.white});
        /* // rotate line 1 */
        &:nth-child(1) {
          transform: rotate(45deg) translate(0.6rem, 1rem);
          /* // animation: rotate45 0.5s ease-in; */
        }
        /* // hide line 2 */
        &:nth-child(2) {
          opacity: 0;
        }
        /* // rotate line 3 */
        &:nth-child(3) {
          transform: rotate(-45deg) translate(0.5rem, -1rem);
          /* // animation: rotateMinus45 0.5s ease-in; */
        }
      }
    }
  }

  @media ${device.phone} {
    right: 1rem;
  }
`

const DrawerMenuBtn = ({ click, show }) => {
  return (
    <MenuBtn className={show ? "close" : "none"} onClick={click}>
      <span className="menuBtn-line"></span>
      <span className="menuBtn-line"></span>
      <span className="menuBtn-line"></span>
    </MenuBtn>
  )
}

export default DrawerMenuBtn
