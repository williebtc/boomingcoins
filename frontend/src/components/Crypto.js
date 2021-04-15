import React from "react"
import { Container, Col, Row } from "react-bootstrap"

import bitcoin from "../images/bitcoin.gif"
import bitcoinn from "../images/bitcoin.png"
import bitcoincash from "../images/bitcoincash.png"
import dogecoin from "../images/dogecoin.png"
import ethereum from "../images/ethereum.png"
import litecoin from "../images/litecoin.png"
import payeer from "../images/payeer.png"
import perfect from "../images/perfect-money.png"

const Crypto = () => {
  return (
    <section className="cryptos">
      <Container className="cryptos-container py-5" fluid>
        <h2 className="text-center py-5 ">Specialization</h2>
        <Row className="align-items-center justify-content-center">
          <Col
            xs={6}
            sm={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <figure>
              <figcaption className="my-2 text-center">Perfectmoney</figcaption>
              <img src={perfect} alt="perfect money" className="crypto-image" />
            </figure>
          </Col>

          <Col
            xs={6}
            sm={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <figure>
              <figcaption className="my-2 text-center">Payeer</figcaption>
              <img src={payeer} alt="payeer" />
            </figure>
          </Col>
          <Col
            xs={6}
            sm={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <figure>
              <figcaption className="my-2 text-center">Bitcoin</figcaption>
              <img src={bitcoinn} alt="Bitcoin" />
            </figure>
          </Col>
          <Col
            xs={6}
            sm={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <figure>
              <figcaption className="my-2 text-center">Ethereum</figcaption>
              <img src={ethereum} alt="Ethereum" />
            </figure>
          </Col>
          <Col
            xs={6}
            sm={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <figure>
              <figcaption className="my-2 text-center">Litecoin</figcaption>
              <img src={litecoin} alt="Litecoin" />
            </figure>
          </Col>
          <Col
            xs={6}
            sm={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <figure>
              <figcaption className="my-2 text-center">Dogecoin</figcaption>
              <img src={dogecoin} alt="Dogecoin" />
            </figure>
          </Col>
          <Col
            xs={6}
            sm={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <figure>
              <figcaption className="my-2 text-center">Bitcoincash</figcaption>
              <img src={bitcoincash} alt="Bitcoincash" />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Crypto
