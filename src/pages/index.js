import React from "react"
import Layout from "../layout"
import Hero from "../layout/Hero"
import Work from "../layout/Work"
import Skills from "../layout/Skills"
import About from "../layout/About"
import Head from "components/Head"
import Form from "src/components/form"
const index = () => {
  return (
    <Layout>
      <Head title="Diomedes Lajara" />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Form />
    </Layout>
  )
}

export default index
