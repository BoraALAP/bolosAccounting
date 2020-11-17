import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const arrow = () => (
  <Container width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 3L0 6C0 6 2 4.65685 2 3C2 1.34315 0 0 0 0L7 3Z" fill="#0050C0"/>


  </Container>
)

arrow.propTypes = {
  // : PropTypes.string,
}

arrow.defaultProps = {
  
}

const Container = styled.svg`
  display: grid;
`



export default arrow
