import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import styled from "styled-components"
import theme from "../utils/theme"
import Work from "../components/work"
import About from "../components/about"
import Blog from "../components/blog"
import Services from "../components/services"

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
