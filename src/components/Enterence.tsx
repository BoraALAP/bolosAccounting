import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Enterence = () => {
  const data = useStaticQuery(graphql`
    query taxImage {
      file(relativePath: { eq: "taxImage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container id="home">
      <Top>
        <Left>
          <h1>
            Accounting is
            <br />
            not just numbers
          </h1>
          <h4>We do it Right.</h4>
        </Left>
        <Right>
          <ImgS fluid={data.file.childImageSharp.fluid} />
        </Right>
      </Top>
      <Bottom>
        <Text>
          <p>
            Bolos Accounting was established in 2007 and provides Bookkeeping
            services to small and medium size companies in Ontario and Alberta.
            We are a fast growing Company.
          </p>
          <p>
            Our policy is to ensure that we take care of our clients’
            accounting, bookkeeping and other financial works such as, financial
            reports, financial planning etc. We are happy when you are happy.
          </p>
        </Text>
      </Bottom>
    </Container>
  )
}

Enterence.propTypes = {
  // : PropTypes.string,
}

Enterence.defaultProps = {}

const Container = styled.section`
  display: grid;
`
const Top = styled.div`
  display: grid;
  background: ${({ theme }) =>
    `linear-gradient(106.48deg,  ${theme.color.blue1} 36.08%, ${theme.color.blue2} 85.57%)`};
  grid-gap: 32px;

  padding: 10rem 7.5vw 3rem;
  @media screen and (min-width: 991px) {
    grid-template-columns: 5fr 7fr;
  }
`

const Left = styled.div`
  display: grid;
  justify-items: end;
  align-items: end;
  align-content: end;
  grid-gap: 1rem;
  h1 {
    text-align: right;
  }
`

const Right = styled.div`
  display: grid;
  justify-items: end;
`

const ImgS = styled(Img)`
  display: grid;
  width: 90%;
  /* box-shadow: 1px 2px 16px rgba(3, 62, 80, 0.15), 2px 4px 4px rgba(0, 0, 0, 0.1); */

  bottom: calc(-2.5vw - 3rem);
`

const Bottom = styled.div`
  display: grid;

  text-align: right;
  padding: 3rem 7.5vw;
  justify-items: end;
  grid-gap: 32px;
  @media screen and (min-width: 991px) {
    grid-template-columns: 5fr 7fr;
  }
`

const Text = styled.div`
  display: grid;
  width: 80%;
`

export default Enterence
