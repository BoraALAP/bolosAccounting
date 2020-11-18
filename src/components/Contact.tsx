import React from "react"
import styled from "styled-components"
import { MapPin, Phone, Printer, Mail } from "react-feather"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query contact {
      file(relativePath: { eq: "contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            src
          }
        }
      }
    }
  `)

  return (
    <Container imgSrc={data.file.childImageSharp.fluid.src} id="contact">
      <Top>
        <h2>Contact</h2>
        <p>
          Our dedication and experience would benefit you, your business or
          someone you know, please contact us. We would love to hear from you.
        </p>
      </Top>
      <Mid>
        <Card
          href="https://www.google.ca/maps/place/13U-951+Wilson+Ave,+North+York,+ON+M3K+2A7/@43.7281238,-79.4778505,17z/data=!3m1!4b1!4m5!3m4!1s0x882b31815dd2c561:0xbdadd268a959f21d!8m2!3d43.7281199!4d-79.4756618"
          target="_blank"
        >
          <Title>
            <MapPin size="24" color="#003444" />
            <h3>Address</h3>
          </Title>

          <p>13U – 951 Wilson Ave Toronto, ON M3K 2A7</p>
        </Card>
        <Card href="tel:4166540794" target="_blank">
          <Title>
            <Phone size="24" color="#003444" />
            <h3>Phone Number</h3>
          </Title>
          <p>(416) 654-0794</p>
        </Card>
        <Card>
          <Title>
            <Printer size="24" color="#003444" />
            <h3>Fax Number</h3>
          </Title>
          <p>(416) 654-4783</p>
        </Card>
        <Card href="mailto:info@bolosaccounting.com" target="_blank">
          <Title>
            <Mail size="24" color="#003444" />
            <h3>Email</h3>
          </Title>

          <p>info@bolosaccounting.com</p>
        </Card>
      </Mid>
    </Container>
  )
}

Contact.propTypes = {
  // : PropTypes.string,
}

Contact.defaultProps = {}

const Container = styled.section`
  display: grid;
  background-image: url(${props => props.imgSrc});
  padding: 10rem 7.5vw;
  background-position: left top;
  background-repeat: no-repeat;
  grid-gap: 3rem;
`

const Top = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  grid-gap: 2rem;
`

const Mid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: start;
  grid-gap: 2rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.a`
  display: grid;
  justify-items: center;
  text-align: center;
  grid-gap: 0.5rem;
  @media screen and (min-width: 768px) {
    &:last-child:nth-child(3n - 2) {
      grid-column: span 3;
    }
  }
`

const Title = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-auto-flow: column;
  justify-content: start;
  align-items: baseline;
`

export default Contact
