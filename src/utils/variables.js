import styled from "styled-components"
import { device } from "../utils/mixins"

export const MainContainer = styled.section`
  padding: 7rem 15rem;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`

export const Main = styled.main`
  @media ${device.tablet} {
    display: grid;
  }
`
