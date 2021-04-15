import React, { useState } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"

import { FaEquals } from "react-icons/fa"

const Calculate = () => {
  const [invest, setInvest] = useState(0)
  const [percent, setPercent] = useState(0)
  const [returned, setReturned] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()

    if (invest !== 0 && percent !== 0) {
      const answer = (
        Number(invest) * Number(percent) +
        Number(invest)
      ).toFixed(2)
      setReturned(answer)
    } else {
      alert("Enter a valid Investment amount and plan.")
    }
  }

  return (
    <Row className="calculate my-5 justify-content-center">
      <Col md={8}>
        <h2 className="my-2 py-2">Calculate Investment Return</h2>
        <Form onSubmit={submitHandler}>
          <Form.Row>
            <Form.Group as={Col} xs={5} controlId="formGridInvestment">
              <Form.Label>($) Investment</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Amount"
                onChange={(e) => setInvest(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPlan">
              <Form.Label>Plan</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={(e) => setPercent(e.target.value)}
              >
                <option>Choose...</option>
                <option value="0.1">10% - primary</option>
                <option value="0.40">40% - Secondary</option>
                <option value="0.80">80% - Third</option>
                <option value="1.00">100% - Fourth</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} xs={4} controlId="formGridReturn">
              <Form.Label>($) Return</Form.Label>
              <Form.Control
                type="number"
                placeholder="Return amount"
                readOnly
                value={returned}
              />
            </Form.Group>
          </Form.Row>
          <Button type="submit" variant="warning">
            Calculate
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Calculate
