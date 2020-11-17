import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { NavButton } from "../UI/Button"
import { Menu, X } from "react-feather"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const [active, setActive] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const data = useStaticQuery(graphql`
    query logoPull {
      file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const menuList = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Links", id: "links" },
    { name: "About Us", id: "aboutus" },
    { name: "Contact Us", id: "contactus" },
  ]

  return (
    <HeaderS>
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
      </Link>

      <MenuContainer onClick={() => setOpenMenu(!openMenu)}>
        { openMenu ? <X size="24px" color="black" /> : <Menu size="24px" color="black" />}
      </MenuContainer>
      <Nav openMenu={openMenu}>
        {menuList.map((item, index) => (
          <NavButton key={item.id}
            onClick={() => scrollTo(item.id)}
            active={active === index}
          >
            {item.name}
          </NavButton>
        ))}
      </Nav>
    </HeaderS>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderS = styled.header`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  z-index: 1000;
  h1 {
    margin: 0;
    padding: 0;
  }
`

const MenuContainer = styled.button`
  display: grid;
  padding: 2rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Nav = styled.div`
z-index: -1;
  position: absolute;
  transform: ${props => props.openMenu ? `translateY(0vh)` : `translateY(-100vh)` } ;
  transition: all 0.65s ease;
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: row;
  top: 0;
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100vh;
  align-content: center;

  @media screen and (min-width: 768px) {
    background-color: transparent;
    grid-auto-flow: column;
    position: initial;
    transform: translateY(0);
    padding-right: 3rem;
    height: inherit;
  }
`

export default Header
