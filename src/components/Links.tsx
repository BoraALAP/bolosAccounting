import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import arrow from "./assets/arrow2.png"
const Links = () => {
  const links = [
    {
      name: "Business Development Bank of Canada",
      link: "https://www.bdc.ca/en",
    },
    { name: "Canada Business Service Centres", link: "http://www.cbsc.org/" },
    {
      name: "Canada Customs and Revenue Agency",
      link:
        "https://www.canada.ca/en/revenue-agency/cra-canada.html?utm_campaign=not-applicable&utm_medium=redirect&utm_source=cra-arc.gc.ca_redirect",
    },
    {
      name: "Canadian Business - Ontario Service Centres",
      link: "http://www.cbsc.org/eng/",
    },
    {
      name: "Ontario Ministry of Finance",
      link: "https://www.ontario.ca/page/ministry-finance",
    },
    {
      name: "Income Tax Act ",
      link: "https://laws.justice.gc.ca/en/i-3.3/64941.html",
    },
    {
      name: "Workplace Safety & Insurance Board ",
      link: "https://www.wsib.ca/en",
    },
    {
      name: "Canada Revenue Agency ",
      link:
        "https://www.canada.ca/en/revenue-agency/cra-canada.html?utm_campaign=not-applicable&utm_medium=redirect&utm_source=cra-arc.gc.ca_redirect",
    },
    {
      name: "Alberta Tax Information ",
      link: "https://www.alberta.ca/treasury-board-and-finance.aspx",
    },
    { name: "Ontario Government ", link: "https://www.ontario.ca/" },
    { name: "Ontario Tax Information ", link: "https://www.fin.gov.on.ca/" },
    { name: "Industry Canada ", link: "http://www.ic.gc.ca/Intro.html" },
    {
      name: "Citizenship and Immigration Canada ",
      link: "https://www.cic.gc.ca/",
    },
    {
      name: "Corporations Canada ",
      link: "http://corporationscanada.ic.gc.ca/eic/site/cd-dgc.nsf/Intro",
    },
    { name: "Bank of Canada ", link: "https://www.bankofcanada.ca/" },
    { name: "Turkish Embassy", link: "http://www.turkishembassy.com/" },
    {
      name: "Government of Canada - Turkish Embassy",
      link:
        "http://www.canadainternational.gc.ca/turkey-turquie/offices-bureaux/embassy-ambassade.aspx?lang=eng",
    },
  ]
  return (
    <Container>
      <h2>Links</h2>
      <p>Here is some support links for you.</p>
      <List>
        {links.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </List>
    </Container>
  )
}

Links.propTypes = {
  // : PropTypes.string,
}

Links.defaultProps = {}

const Container = styled.div`
  display: grid;
  padding: 0 7.5vw;
  grid-gap: 1.5rem;
  margin-top: 5rem;
`

const List = styled.ul`
  display: grid;
  list-style-image: url(${arrow});
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(2,1fr);
  }

  @media screen and (min-width: 991px){
  grid-template-columns: repeat(3,1fr);
    grid-gap: 1.5rem;
  }
`

export default Links
