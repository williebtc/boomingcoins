import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import buy from "../images/buy-sell-bitcoins.png"
import add from "../images/add-bitcoins.png"
import invest from "../images/download-bitcoin.png"

const Services = () => {
  return (
    <Container className="services-container">
      <h2 className="text-center">Services</h2>
      <Row>
        <Col>
          <img className="d-block mx-auto my-1" src={buy} alt="Second slide" />
          <div className="text-center padding">
            <h3>Buy/Sell with us</h3>
            <p>We buy from you and credit your wallet within 2 hours</p>
          </div>
        </Col>
        <Col>
          <img className="d-block mx-auto" src={add} alt="Second slide" />
          <div className="text-center padding">
            <h3>Add coins to your Wallet</h3>
            <p>We update your wallet and keep it safe</p>
          </div>
        </Col>
        <Col>
          <img className="d-block mx-auto" src={invest} alt="Second slide" />
          <div className="text-center padding">
            <h3>Invest with us</h3>
            <p>We trade and make profits for you.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Services
