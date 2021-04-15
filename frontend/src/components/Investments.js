import React from "react"
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap"
import { FaCoins, FaRegMoneyBillAlt } from "react-icons/fa"
import { GiTakeMyMoney, GiMoneyStack } from "react-icons/gi"

import { Link } from "react-router-dom"
import Calculate from "./Calculate"

const Investments = ({ hide }) => {
  return (
    <Container className="investment-item text-center py-5">
      <h2 className="py-5 investment-h2">Investment Plans</h2>
      <Row>
        <Col className=" investment-item">
          <h2>
            <FaCoins color="#ff6a00" size={80} />
          </h2>
          <h3>10% AFTER 1 DAY</h3>

          <ListGroup.Item className="list-container">
            MIN DEPOSIT $25
          </ListGroup.Item>
          <ListGroup.Item className="list-container">
            MAX DEPOSIT $1,000
          </ListGroup.Item>
          {!hide && (
            <Button variant="warning" className="my-2" block>
              <Link to="/package">Invest Now</Link>
            </Button>
          )}
        </Col>
        <Col className="text-center investment-item">
          <h2>
            <FaRegMoneyBillAlt color="#ff6a00" size={80} />
          </h2>
          <h3>40% AFTER 3 DAYS</h3>

          <ListGroup.Item className="list-container">
            MIN DEPOSIT $1,500
          </ListGroup.Item>
          <ListGroup.Item className="list-container">
            MAX DEPOSIT $20,000
          </ListGroup.Item>
          {!hide && (
            <Button variant="warning" className="my-2" block>
              <Link to="/package">Invest Now</Link>
            </Button>
          )}
        </Col>
        <Col className="text-center investment-item">
          <h2>
            <GiTakeMyMoney color="#ff6a00" size={80} />
          </h2>
          <h3>80% AFTER 3 DAYS</h3>

          <ListGroup.Item className="list-container">
            MIN DEPOSIT $3,500
          </ListGroup.Item>
          <ListGroup.Item className="list-container">
            MAX DEPOSIT -$100,000
          </ListGroup.Item>
          {!hide && (
            <Button variant="warning" className="my-2" block>
              <Link to="/package">Invest Now</Link>
            </Button>
          )}
        </Col>
        <Col className="text-center investment-item">
          <h2>
            <GiMoneyStack color="#ff6a00" size={80} />
          </h2>
          <h3>100% AFTER 4 DAYS</h3>

          <ListGroup.Item className="list-container">
            MIN DEPOSIT $4,500
          </ListGroup.Item>
          <ListGroup.Item className="list-container">
            MAX DEPOSIT - $1,000,000
          </ListGroup.Item>
          {!hide && (
            <Button variant="warning" className="my-2" block>
              <Link to="/package">Invest Now</Link>
            </Button>
          )}
        </Col>
      </Row>
      <Calculate />
    </Container>
  )
}

export default Investments
