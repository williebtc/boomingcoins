import React from "react"
import { Col, Row } from "react-bootstrap"
import Investments from "./Investments"
import InvestNow from "./InvestNow"

const Packages = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <InvestNow />
        </Col>
      </Row>
      <Investments hide />
    </>
  )
}

export default Packages
