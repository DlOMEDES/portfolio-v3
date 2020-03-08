import React from "react"
import Layout from "../layout"
import Hero from "../layout/Hero"
import Work from "../layout/Work"
import About from "../layout/About"
import Services from "../layout/Services"

const index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Work />
//       <About />
    </Layout>
  )
}

export default index
