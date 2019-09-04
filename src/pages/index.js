import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"

const MainContainer = styled.main`
  padding: 115px 150px;
  font-size: 20px;
  line-height: 1.3;
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
