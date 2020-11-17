/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */


import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

import { primaryTheme, secondaryTheme } from "../../styles/theme"
import GlobalStyle from "../../styles/global"

const Layout = ({ children }) => {
  const [mode, setMode] = useState(true)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={mode ? primaryTheme : secondaryTheme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
        <main>{children}</main>
        <Footer />
      
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
