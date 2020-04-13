import React from "react"
import Layout from "../layout"
import Link from "gatsby-link"
import { MainContainer } from "../utils/variables"

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
