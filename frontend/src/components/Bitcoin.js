import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import variables from "../data/variables"

import bitcoin from "../images/bitcoin1.png"

const Bitcoin = () => {
  return (
    <Container className="keyvalues-container" fluid>
      <h2 className="text-center about">{variables.COMPANY_NAME}</h2>
      <Row>
        <Col xs={12} md={6} lg={4} className="my-2">
          {" "}
          <img
            className="d-block mx-auto my-1"
            src={bitcoin}
            alt="PAYMENT OPTIONS"
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="my-2">
          <p>
            The appearance of cryptocurrency in the world financial market made
            a real sensation. And although some skeptics predict a quick fail of
            this system, the leading financiers of the world deny this point of
            view, forecasting a gradual transition of settlement transactions
            over the Internet into the electronic money. Bitcoin has been the
            most stable and popular cryptocurrency, shows astonishing course
            growth, making many people look for opportunities to earn money on
            trading transactions associated with the purchase and sale of
            digital money. Other types of cryptocurrencies such as LiteCoin,
            Ether, and BCH, although they cannot compete with the price of
            Bitcoin, they are still characterized by sufficiently strong
            volatility, which allows profiting from trading transactions to
            experienced traders.
          </p>
        </Col>
        <Col xs={12} md={6} lg={4} className="my-2">
          <iframe
            width="100%"
            height="100%"
            style={{ maxHeight: "350px", height: "350px" }}
            src="https://www.youtube.com/embed/Um63OQz3bjo"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
        </Col>
      </Row>
    </Container>
  )
}

export default Bitcoin
