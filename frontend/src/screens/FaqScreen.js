import React from "react"
import { Accordion, Card, Col, Container, Row, Button } from "react-bootstrap"
import { Helmet } from "react-helmet"
import Crypto from "../components/Crypto"
import affiliateInfo from "../data/affiliateInfo"
import finance from "../data/finaceInfo"
import legal from "../data/legal"
import safety from "../data/safety"
import variables from "../data/variables"

const FaqScreen = () => {
  return (
    <>
      <Helmet>
        <title>FAQ Booming coins LTD</title>
        <meta name="description" content="FAQ" />
      </Helmet>
      <section>
        <Container fluid className="text-center investors-thead">
          <h2 className="h2">Frequently Ask Question (FAQ)</h2>
          <h4>General information</h4>
          <p>
            This section has been prepared by the technical support specialists
            with the purpose of helping the investors to get the answers to the
            most frequent questions.
          </p>
          <Row>
            <Col>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      I am a beginner investor. How do I start my activity?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body id="accordion-faq">
                      Before you start investing, you should go through the
                      registration procedure. It is not difficult to do and it
                      should take just a few minutes of your time. Before the
                      beginning of registration, we suggest that you familiarize
                      yourself with the rules of cooperation between the{" "}
                      {variables.COMPANY_NAME} and the investor.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      How do I successfully register?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body id="accordion-faq">
                      To start the registration, click on the “Registration”
                      button on the website. Then, fill out all the required
                      fields as directed. It is forbidden to use fake
                      information because it might lead to various
                      misunderstandings in the future.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Can I create several accounts from one IP address?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body id="accordion-faq">
                      No, you cannot. Each user is allowed to register only one
                      account. In case of violation of this paragraph of the
                      rules, all of the profiles will be frozen without the
                      return of the funds that are on the balance.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                      What should I do to get the status of the company's
                      investors? What are the ways of getting the profit?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body id="accordion-faq">
                      After the completion of the registration on the website,
                      the user must make a deposit. 24 hours after the deposit,
                      the first profit will be placed on the investor’s account.
                      This sum will be available for withdrawal from the system
                      immediately.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                      What are the working hours of {variables.COMPANY_NAME}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body id="accordion-faq">
                      The company works in a 24/7 regime, without breaks or days
                      off.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Information about Finance</h4>
              <Accordion>
                {finance.map((item, index) => {
                  const { question, answer } = item
                  return (
                    <Card key={index}>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey={index + 1}
                        >
                          {question}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={index + 1}>
                        <Card.Body id="accordion-faq">{answer}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  )
                })}
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>A partnership program (Affiliate)</h4>
              <Accordion>
                {affiliateInfo.map((item, index) => {
                  const { question, answer } = item
                  return (
                    <Card key={index}>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey={index + 1}
                        >
                          {question}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={index + 1}>
                        <Card.Body id="accordion-faq">{answer}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  )
                })}
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Guarantees and safety</h4>
              <Accordion>
                {safety.map((item, index) => {
                  const { question, answer } = item
                  return (
                    <Card key={index}>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey={index + 1}
                        >
                          {question}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={index + 1}>
                        <Card.Body id="accordion-faq">{answer}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  )
                })}
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Legal information</h4>
              <Accordion>
                {legal.map((item, index) => {
                  const { question, answer } = item
                  return (
                    <Card key={index}>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey={index + 1}
                        >
                          {question}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={index + 1}>
                        <Card.Body id="accordion-faq">{answer}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  )
                })}
              </Accordion>
            </Col>
          </Row>
        </Container>
        <Crypto />
      </section>
    </>
  )
}

export default FaqScreen
