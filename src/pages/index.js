import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Announcement from "../components/Announcement"
import Navbar from "../components/navbar"
import Slider from "../components/Home/Slider"
import Categorias from "../components/Home/Categorias"
import Productos from "../components/Home/Productos"
//import Productos from "../components/Home/Productos"

const IndexPage = () => (
  <Layout>
    <Announcement />
    <Navbar />
    <Slider />
    <Categorias />
    <Productos />
  </Layout>
)

export default IndexPage
