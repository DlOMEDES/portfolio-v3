import React from "react"
import Layout from "../layout"
import Hero from "../layout/Hero"
import Work from "../layout/Work"
import Skills from "../layout/Skills"
import Services from "../layout/Services"
import Head from "components/Head"

const index = () => {
  return (
    <Layout>
      <Head title="Diomedes Lajara" />
      <Hero />
      <Services />
      <Work />
      <Skills />
    </Layout>
  )
}

export default index
