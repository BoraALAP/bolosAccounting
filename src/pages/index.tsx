import React from "react"
import { Link } from "gatsby"

import Layout from "../components/global/Layout"
import Image from "../components/image"
import SEO from "../components/global/Seo"
import Services from "../components/Services"
import Enterence from "../components/Enterence"
import Links from "../components/Links"
import About from "../components/About"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Enterence />
    <Services />
    <Links />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
