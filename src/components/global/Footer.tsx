import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Footer = () => (
  <Container>
  © {new Date().getFullYear()}, Built with
  {` `}
  <a href="https://www.gatsbyjs.com">Gatsby</a>
  </Container>
)

Footer.propTypes = {
  // : PropTypes.string,
}

Footer.defaultProps = {
  
}

const Container = styled.div`
  display: grid;
`



export default Footer
