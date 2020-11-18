import React from "react"
import styled from "styled-components"
import { Target, Clock } from "react-feather"

const About = () => (
  <Container id="about">
    <Left>
      <h2>
        About
        <br />
        Bolos
        <br />
        Accounting
      </h2>
    </Left>
    <Right>
      <Section>
        <Title>
          <Clock size="24" color="white" />
          <h3>History</h3>
        </Title>
        <p>
          Bolos Accounting was established in 2007, and provides Bookkeeping
          services to small and medium size companies in Ontario, Saskatchewan
          and Alberta. Bolos Accounting has been growing steadily ever since.
        </p>
      </Section>
      <Section>
        <Title>
          <Target size="24" color="white" />
          <h3>Mission Statement</h3>
        </Title>
        <p>
          Our policy is to take care of clients’ all accounting, bookkeeping,
          and other financial works such as financial reports, financial
          planning etc. and will never be happy until our clients are.
        </p>
      </Section>
    </Right>
  </Container>
)

About.propTypes = {
  // : PropTypes.string,
}

About.defaultProps = {}

const Container = styled.section`
  display: grid;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 7.5rem 7.5vw;
  grid-gap: 5rem;
  margin-top: 7.5rem;
  @media screen and (min-width: 991px) {
    grid-template-columns: 5fr 7fr;
  }
`

const Left = styled.div`
  display: grid;
  h2 {
    color: ${({ theme }) => theme.color.white};
  }

  @media screen and (min-width: 991px) {
    justify-content: end;
    text-align: end;
  }
`

const Right = styled.div`
  display: grid;
`

const Section = styled.div`
  display: grid;

  p {
    color: ${({ theme }) => theme.color.white};
  }
`

const Title = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  h3 {
    color: ${({ theme }) => theme.color.white};
  }
`

export default About
