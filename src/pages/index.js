import * as React from "react"
import Layout from '../components/layout/layout';

import Hero from "../containers/hero/hero";
import About from "../containers/about/about";
import Contact from "../containers/contact/contact";


const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>
      <Hero/>
      <About/>
      <Contact/>
    </Layout>
  )
}

export default IndexPage
