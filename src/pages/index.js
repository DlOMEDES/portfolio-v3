import React from "react"
import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import Work from "../components/sections/work"
import About from "../components/sections/about"

import Services from "../components/sections/services"

const index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Work />
      <About />
    </Layout>
  )
}

export default index
