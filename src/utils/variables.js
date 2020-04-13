import styled from "styled-components"
import { device } from "../utils/mixins"

export const Main = styled.main`
  @media ${device.tablet} {
    display: grid;
  }
`

export const MainContainer = styled.section`
  padding: 7rem 15rem;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 80vw;
    margin: 0 auto;
  }
`
