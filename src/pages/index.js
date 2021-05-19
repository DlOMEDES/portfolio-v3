import React from "react"
import Layout from "../layout"
import Hero from "../layout/Hero"
import Work from "../layout/Work"
import Services from "../layout/Services"
import Head from "components/Head"
import Form from "src/components/form"
const index = () => {
  return (
    <Layout>
      <Head title="Diomedes Lajara" />
      <Hero />
      <Services />
      <Work />
      {/* testimonials go here */}
      <Form />
    </Layout>
  )
}

export default index
