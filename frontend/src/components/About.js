import React, { useState } from "react"
import {
  Accordion,
  Button,
  Card,
  Col,
  Collapse,
  Container,
  Row,
} from "react-bootstrap"

import about from "../images/about-us.png"
import variables from "../data/variables"

const About = () => {
  return (
    <Container className="about text-center" fluid>
      <Row>
        <Col>
          <h2>ABOUT US</h2>
          <p className="about-p">
            {variables.COMPANY_NAME} investments company limited is a
            cryptocurrency firm established in 2015. Marketplaces called
            “bitcoin exchanges” allow people to buy or sell bitcoins using
            different currencies.
          </p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            className="d-block"
            src={about}
            alt="Second slide"
            width="80%"
            height="auto"
          />
        </Col>
        <Col xs={12} md={6} className="my-4 ">
          <h3>WE ARE {variables.COMPANY_NAME}</h3>
          <p className="about-p">
            A place for everyone who wants to simply buy and sell Bitcoins.
            Deposit funds using your Visa/MasterCard or bank transfer. Instant
            buy/sell of Bitcoins at fair price is guaranteed. Nothing extra.
            Join over 10,000 users from all over the world satisfied with our
            services.
          </p>

          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  OUR MISSION
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Our mission as an official partner of Bitcoin Foundation is to
                  help you enter and better understand the world of #1
                  cryptocurrency and avoid any issues you may encounter.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  OUR ADVANTAGE
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Absolutely, you can become rich with bitcoin whatever it rises
                  or falls. Many people get rich by investing in Bitcoin from
                  2009–til date. Our company will give you the best service you
                  need.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  OUR GUARANTEE
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Bitcoin is a safe network as users are in control of their
                  transactions. It is not possible for traders to charge the
                  consumer extra fees and have it go unnoticed. Any extra fees
                  need to be discussed with the consumer first. It is not
                  necessary to supply personal information when making payments
                  in Bitcoin. <br />
                  <br />
                  Can you lose more money than you invest in Bitcoin?
                  <br />
                  Assuming that you're not using any leverage - NO, you will
                  never lose more money than you invest in Bitcoin. In an
                  exchange with Business Insider in May 2017, Liew said that the
                  Bitcoin price can <q>realistically</q> reach $500,000 by 2030.{" "}
                  <br />
                  <br />
                  CRYPTOCURRENCY ALSO HELPS IN THE: <br />
                  <ol>
                    <li> Elimination of Banking Fees.</li>
                    <li>
                      Very Low Transaction Fees for International Payments.
                    </li>
                    <li>Mobile Payments Accessibility</li>
                  </ol>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default About
