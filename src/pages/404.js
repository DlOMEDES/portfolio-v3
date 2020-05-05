import React from "react"
import Layout from "../layout"
import Link from "gatsby-link"

const NotFound = () => {
  return (
    <Layout>
      <h3>Something went wrong!</h3>
      <p>
        <Link to="/">Back Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
