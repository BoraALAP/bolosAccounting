import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Services = () => {
  return (
    <Container>
      <Top>
        <h2>Services</h2>
      </Top>
      <Bottom>
        <Card>
          <h3>Bookkeeping</h3>
          <Body>
            <p>
              We are bookkeeping experts in Ontario, and Alberta for small and
              medium size businesses. That offers bookkeeping services as
              needed.
            </p>
            <p>
              We visit our clients that are based in Toronto regularly. For our
              out of town cliental we request that you send your documents to
              our office via mail.
            </p>
          </Body>
        </Card>
        <Card>
          <h3>Tax Returns</h3>
          <Split>
            <Left>
              <h4>Personal tax returns (T1):</h4>
              <p>
                For individuals, self-employed, commissioned salespersons, sole
                proprietors or business partnership.
              </p>
              <h4>Corporate tax returns (T2):</h4>
              <p>
                For small and medium size businesses, family business,
                professionals and other corporations.
              </p>
            </Left>
            <Right>
              <div>
                <h4>WSIB</h4>
                <List>
                  <li>WSIB registration for Employer and self employed</li>
                  <li>Calculation of the quarterly WSIB premiums</li>
                </List>
              </div>
              <div>
                <h4>GST, PAYROLL</h4>
                <List>
                  <li>Calculation</li>
                  <li>Prepare the forms</li>
                  <li>Payment</li>
                </List>
              </div>

              <h4>FILING NOTICE OF OBJECTION</h4>
              <List>
                <li>GST, PERSONAL, BUSINESS TAX</li>
              </List>
            </Right>
          </Split>
        </Card>
      </Bottom>
    </Container>
  )
}

Services.propTypes = {
  // : PropTypes.string,
}

Services.defaultProps = {}

const Container = styled.div`
  display: grid;
  grid-gap: 3rem;
`

const Top = styled.div`
  display: grid;
  padding: 0 7.5vw;
  justify-content: end;
`

const Card = styled.div`
  display: grid;
  padding: 1.5rem 2rem;
  box-shadow: 0px 0px 4px 2px #f9f9f9, 1px 2px 40px 2px #ffffff,
    1px 2px 40px rgba(0, 52, 68, 0.05);
  border-radius: 6px;
  grid-gap: 1rem;
  align-content: start;
`

const Body = styled.div`
  display: grid;
`

const Bottom = styled.div`
  display: grid;
  padding: 0 7.5vw;
  grid-gap: 2rem;
  @media screen and (min-width: 991px) {
    grid-template-columns: 1fr 2fr;
  }
`
const Left = styled.div`
  display: grid;
`

const Right = styled.div`
  display: grid;
  grid-gap: 1rem;
`

const Split = styled.div`
  display: grid;
  grid-gap: 2rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
    display: grid;
  }
`

const List = styled.ul`
  display: grid;
`

export default Services
