import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"
import theme from "../utils/theme"
const { colors } = theme

const MainContainer = styled.main`
  padding: 15px 175px;
  font-size: 20px;
  line-height: 1.3;
  background: ${colors.blueMadison};
`

const index = () => {
  return (
    <Layout>
      <MainContainer>
        <Hero />
      </MainContainer>
    </Layout>
  )
}

export default index
