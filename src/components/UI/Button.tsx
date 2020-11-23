import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavButton = ({children, url, active}) => {
  
  return(
  <Container to={url} stripHash>
    {children}
  </Container>  
)}

NavButton.propTypes = {
  children: PropTypes.string,
  active: PropTypes.bool,
}

NavButton.defaultProps = {
  children: 'Navigation'
}

const Container = styled(AnchorLink)`
  display: grid;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${props => props.active ? 700 : 400 }; 
  font-family: ${({ theme }) => theme.font.body};

`




