import React from "react"
import Layout from "../layout"
import Hero from "../layout/Hero"
import Work from "../layout/Work"
import Skills from "../layout/Skills"
import About from "../layout/About"
import Head from "components/Head"

const index = () => {
  return (
    <Layout>
      <Head title="Diomedes Lajara" />
      <Hero />
      <About />
      <Work />
      <Skills />
    </Layout>
  )
}

export default index
