import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Announcement from "../components/Announcement"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Announcement />
  </Layout>
)

export default IndexPage
