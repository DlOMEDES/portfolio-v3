import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"
import theme from "../utils/theme"
import Work from "../components/Work"
import About from "../components/About"
import Blog from "../components/Blog"
import Services from "../components/Services"

const index = () => {
  return (
    <Layout>
      <MainContainer>
        <Hero />
        <Services />
        <Work />
        <Blog />
        <About />
      </MainContainer>
    </Layout>
  )
}

export default index

// styled components
const { colors } = theme

export const MainContainer = styled.main`
  padding: 70px 275px;
  font-size: 20px;
  line-height: 1.3;
  background: ${colors.blueExpress};
`
