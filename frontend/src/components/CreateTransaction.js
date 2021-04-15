import React, { useState } from "react"
import { Form, Col, Button } from "react-bootstrap"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { createTransaction } from "../actions/userActions"
import { useDispatch, useSelector } from "react-redux"

const CreateTransaction = ({ user, match }) => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState(null)
  const [percent, setPercent] = useState()
  const [amount, setAmount] = useState()
  const [returned, setReturned] = useState("")

  const createTransactionn = useSelector((state) => state.createTransaction)
  const { loading, error, success, transaction } = createTransactionn

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createTransaction(user._id, user.email, amount, percent))

    // console.log(email)
  }
  const handleCalculate = () => {
    if (amount !== 0 && percent !== 0) {
      const answer = (
        Number(amount) * Number(percent) +
        Number(amount)
      ).toFixed(2)
      setReturned(answer)
    } else {
      alert("Enter a valid Investment amount and plan.")
    }
  }
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Form onSubmit={handleSubmit}>
        {success && (
          <Message variant="success">Transaction created successfully.</Message>
        )}
        <Form.Row>
          <Form.Group as={Col} xs={5} controlId="formGridInvestment">
            <Form.Label className="white">($) Investment Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPlan">
            <Form.Label className="white">Plan</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={(e) => {
                setPercent(e.target.value)
              }}
            >
              <option>Choose...</option>
              <option value="0.1">10% - primary</option>
              <option value="0.40">40% - Secondary</option>
              <option value="0.80">80% - Third</option>
              <option value="1.00">100% - Fourth</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridReturn">
            <Form.Label className="white">($) Return</Form.Label>
            <Form.Control
              type="number"
              placeholder="Return amount"
              readOnly
              value={returned}
            />
          </Form.Group>
        </Form.Row>

        <Button
          type="button"
          variant="info"
          className="mr-2"
          onClick={() => handleCalculate()}
        >
          calculate deposit
        </Button>
        <Button type="submit" variant="warning">
          Create deposit
        </Button>
      </Form>
    </>
  )
}

export default CreateTransaction
