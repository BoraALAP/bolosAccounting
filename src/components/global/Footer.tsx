import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Footer = () => (
  <Container>
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.bolosaccounting.com">Bolos Accounting</a>
    </div>
    <div>
      Build by <a href="https://www.artticfox.com">Arttic Fox</a>
    </div>
  </Container>
)

Footer.propTypes = {
  // : PropTypes.string,
}

Footer.defaultProps = {}

const Container = styled.footer`
  display: grid;
  padding: 2rem 7.5vw;
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.white};

  font-family: ${({ theme }) => theme.font.body};
  text-align: right;
  font-size: 0.75rem;

  a {
    color: ${({ theme }) => theme.color.white};
  }
`

export default Footer
