import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import strong from "../images/strong-security.png"
import world from "../images/world-coverage.png"
import payment from "../images/payment-options.png"

import cost from "../images/cost-efficiency.png"
import high from "../images/high-liquidity.png"

const KeyValues = () => {
  return (
    <Container className="keyvalues-container py-5" fluid>
      <h2 className="text-center">Key Values</h2>
      <Row>
        <Col>
          <Row className="align-items-center justify-content-center">
            <Col sm={12} md={6} lg={3} className="text-center ">
              <img
                className="d-block mx-auto my-1"
                src={strong}
                alt="STRONG SECURITY"
              />
              <h3>STRONG SECURITY</h3>
              <p className="about-p">
                Protection against DDoS attacks, full data encryption
              </p>
            </Col>
            <Col sm={12} md={6} lg={3} className="text-center ">
              <img
                className="d-block mx-auto my-1"
                src={world}
                alt="WORLD COVERAGE"
              />
              <h3>WORLD COVERAGE</h3>
              <p className="about-p">
                Providing services in 99% countries around all the globe
              </p>
            </Col>
            <Col sm={12} md={6} lg={3} className="text-center ">
              <img
                className="d-block mx-auto my-1"
                src={payment}
                alt="PAYMENT OPTIONS"
              />
              <h3>PAYMENT OPTIONS</h3>
              <p className="about-p">
                Popular methods: Visa, MasterCard, bank transfer, cryptocurrency
              </p>
            </Col>
            <Col sm={12} md={6} lg={3} className="text-center ">
              <img
                className="d-block mx-auto my-1"
                src={cost}
                alt="COST EFFICIENCY"
              />
              <h3>COST EFFICIENCY</h3>
              <p className="about-p">
                Reasonable trading fees for takers and all market makers
              </p>
            </Col>
            <Col sm={12} md={6} lg={3} className="text-center ">
              <img
                className="d-block mx-auto my-1"
                src={high}
                alt="HIGH LIQUIDITY"
              />
              <h3>HIGH LIQUIDITY</h3>
              <p className="about-p">
                Fast access to high liquidity orderbook for top currency pairs
              </p>
            </Col>
          </Row>
        </Col>
        {/* <Col className="my-auto mx-auto">
          <iframe
            max-width="555"
            max-height="260"
            src="https://www.youtube.com/embed/Um63OQz3bjo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col> */}
      </Row>
    </Container>
  )
}

export default KeyValues
