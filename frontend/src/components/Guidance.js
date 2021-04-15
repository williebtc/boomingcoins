import React from "react"
import { Col, Row } from "react-bootstrap"
import Investments from "./Investments"

const Guidance = () => {
  return (
    <Row className="px-5 py-2 guidance">
      <Col className="login" xs={12}>
        <h2 className="text-center">
          HOW TO START TRADING CRYPTO(BITCOIN) WITH US
        </h2>
        <p className="py-2 text-center">
          As a beginner you will need to "REGISTER" and "LOGIN" to our website
          then follow these simple steps to invest:
        </p>

        <ol className="fineList">
          <li>
            Go to playstore or appstore and download a Bitcoin wallet of your
            choice. Example: "BLOCKCHAIN"
          </li>
          <li>Register with your email and create a strong password.</li>
          <li>
            Fund your wallet with crypto (BITCOIN) as recommended by the wallet.
          </li>
          <li>
            choose the investment plan you wish to prefer(first,second,third or
            fourth).
          </li>
          <li>
            Make deposit with us by clicking "INVEST NOW" and wait for your
            withdrawal in the next 24hrs.
          </li>
        </ol>
      </Col>
      <Col xs={12}>
        <Investments />
      </Col>
    </Row>
  )
}

export default Guidance
