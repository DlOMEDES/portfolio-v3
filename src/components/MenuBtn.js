import styled from "styled-components"
import theme from "../utils/theme"
import { device } from "../utils/variables"

const { colors } = theme

const MenuBtn = styled.div`
  display: none;
  @media ${device.portrait} {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 5rem;
    top: -1rem;
    padding: 0.5rem;
    cursor: pointer;
    padding: 1.5rem;
    background: rgb(${colors.midnightPurple});
    border-radius: 1rem;
    /* lines */
    .MenuBtn-line {
      width: 3.5rem;
      height: 0.4rem;
      margin: 0 0 0.6rem 0;
      background: rgb(${colors.white});
      /* @include easeOut; */
    }

    .MenuBtn-close {
      /* // rotate btn lines into X */
      transform: rotate(180deg);
      /* // animation: rotate180 1s ease-in-out; */
      .menuBtn-line {
        background: $brand-lightGold;
        /* // rotate line 1 */
        &:nth-child(1) {
          transform: rotate(45deg) translate(0.6rem, 0.4rem);
          /* // animation: rotate45 0.5s ease-in; */
        }
        /* // hide line 2 */
        &:nth-child(2) {
          opacity: 0;
        }
        /* // rotate line 3 */
        &:nth-child(3) {
          transform: rotate(-45deg) translate(1rem, -0.8rem);
          /* // animation: rotateMinus45 0.5s ease-in; */
        }
      }
    }
  }
`

export default MenuBtn
