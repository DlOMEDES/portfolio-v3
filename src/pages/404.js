import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"
import { MainContainer } from "./index"

const NotFound = () => {
  return (
    <Layout>
      <MainContainer>
        <h3>Something went wrong!</h3>
        <p>
          <Link to="/">Back Home</Link>
        </p>
      </MainContainer>
    </Layout>
  )
}

export default NotFound
