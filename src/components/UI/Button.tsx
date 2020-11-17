import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

export const NavButton = ({children, onClick, active}) => (
  <Container onClick={onClick} active={active}>
    {children}
  </Container>
)

NavButton.propTypes = {
  children: PropTypes.string,
  active: PropTypes.bool,
}

NavButton.defaultProps = {
  children: 'Navigation'
}

const Container = styled.button`
  display: grid;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${props => props.active ? 700 : 400 }; 

`




