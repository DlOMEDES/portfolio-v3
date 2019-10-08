import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"
import theme from "../utils/theme"
// font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
// icon library
library.add(fab, faCheckSquare, faCoffee)

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

// styled components
const { colors } = theme

const MainContainer = styled.main`
  padding: 15px 175px;
  font-size: 20px;
  line-height: 1.3;
  background: ${colors.blueMadison};
`
