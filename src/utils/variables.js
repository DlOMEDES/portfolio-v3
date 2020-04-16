import styled from "styled-components"
import { device } from "../utils/mixins"

export const Main = styled.main`
  @media ${device.tablet} {
    display: grid;
  }
`

export const MainContainer = styled.div`
  padding: 0 150px;
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  counter-reset: section 0;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 80vw;
    margin: 0 auto;
  }
`
