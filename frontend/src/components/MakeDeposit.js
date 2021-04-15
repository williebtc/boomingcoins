import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import variables from "../data/variables"
import { useDispatch, useSelector } from "react-redux"

const MakeDeposit = ({ hide }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <Container fluid className="make-container py-5 px-5 text-center">
      <Row>
        <Col xs={12}>
          {!hide && (
            <p>
              {" "}
              {variables.COMPANY_NAME} investments company limited is a
              cryptocurrency firm established in 2015. Marketplaces called
              “bitcoin exchanges” allow people to buy or sell bitcoins using
              different currencies.
            </p>
          )}
          <h2 className="make py-2">Make your deposit Now!!!</h2>
          <LinkContainer to="/package">
            <Button
              type="button"
              variant="warning"
              className="black-text"
              id="shake"
            >
              Deposit
            </Button>
          </LinkContainer>
        </Col>
        {!userInfo
          ? !hide && (
              <Col className="hidden-col py-5" xs={12}>
                <LinkContainer to="/login">
                  <Button variant="warning" className="mx-2 black-text">
                    Sign In
                  </Button>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Button variant="warning" className="black-text">
                    Register
                  </Button>
                </LinkContainer>
              </Col>
            )
          : ""}
      </Row>
    </Container>
  )
}

export default MakeDeposit
