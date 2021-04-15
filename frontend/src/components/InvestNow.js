import axios from "axios"
import React, { useEffect, useState } from "react"
import { Alert, Button, Col, Container, Form } from "react-bootstrap"
import { FaWindows } from "react-icons/fa"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import useClipboard from "react-use-clipboard"
import Loader from "./Loader"
import Message from "./Message"

const InvestNow = () => {
  const [wallet, setWallet] = useState("")
  const [plan, setPlan] = useState(0)
  const [currency, setCurrency] = useState("")
  const [amount, setAmount] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [bitcoin, setBitcoin] = useState(
    "bc1qp86zjkavzzajh4jdc6kknvdz27qjsz4hdfdnu7"
  )
  const [isCopied, setIsCopied] = useClipboard(
    "bc1qp86zjkavzzajh4jdc6kknvdz27qjsz4hdfdnu7"
  )

  //   Complete this tomorrow

  const history = useHistory()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (userInfo) {
      //   run code here
      const { email, name } = userInfo

      if (window.confirm("Are you sure your input is correct?")) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: ` Bearer ${userInfo.token}`,
          },
        }
        setLoading(true)
        await axios
          .post(
            `/api/users/alert`,
            { email, name, plan, wallet, currency, amount },
            config
          )
          .then(function (response) {
            setSuccess(true)
            setLoading(false)
          })
          .catch(function (error) {
            setError(true)
          })
      }
    } else {
      history.push("/login")
    }
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login")
    }
  }, [])
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Container fluid className="py-4 about-form overflow-hidden">
      <p className="text-center">
        {" "}
        Dear {userInfo && userInfo.name}, copy our Bitcoin address, use your
        favourite app to credit us and create your transaction to start earning.
      </p>

      <p>Massive Coins bitcoin wallet:</p>
      <p className="mx-1 bitcoin-address">{bitcoin}</p>
      <Button type="button" onClick={setIsCopied}>
        Copy to clipboard?
      </Button>
      <Alert
        show={isCopied}
        variant="success"
        onClose={() => setIsCopied(false)}
        dismissible
      >
        Address has been copied!
      </Alert>

      <Form onSubmit={handleSubmit} className="text-center py-5">
        <Form.Row>
          <Form.Group as={Col} xs={12} md={6} controlId="formGridInvestmentt">
            <Form.Label>Your wallet address:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter wallet address (Bitcoin wallet)"
              onChange={(e) => setWallet(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="fformGridPlan" xs={12} md={6}>
            <Form.Label>Plan: </Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={(e) => setPlan(e.target.value)}
              required
            >
              <option>Choose...</option>
              <option value="0.1">10% - primary - 24 hours</option>
              <option value="0.40">40% - Secondary - 3 days</option>
              <option value="0.80">80% - Third - 3 days</option>
              <option value="1.00">100% - Fourth - 4 days</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId="formGridInvestmentttt">
            <Form.Label>Your wallet currency:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter wallet Currency"
              onChange={(e) => setCurrency(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId="formGridInvestmentx">
            <Form.Label>Your wallet currency:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Amount"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </Form.Group>
        </Form.Row>
        <Button type="submit" variant="warning" className="mx-auto" block>
          Create Deposit
        </Button>
      </Form>
    </Container>
  )
}

export default InvestNow
