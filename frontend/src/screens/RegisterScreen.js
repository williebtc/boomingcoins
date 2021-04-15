import React, { useEffect, useState } from "react"
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { register } from "../actions/userActions"
import queryString from "query-string"
import { Helmet } from "react-helmet"

const Register = ({ history, location }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState(null)
  const [referralEmail, setReferralEmail] = useState("")
  const { search } = location
  const { ref } = queryString.parse(search)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo, success } = userRegister

  useEffect(() => {
    let isModified = false

    let userInfoFromStorage = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : null
    if (userInfoFromStorage) {
      history.push("/")
    } else {
      if (location.search) {
        setReferralEmail(ref)
      } else {
        setReferralEmail("")
      }
    }

    return () => (isModified = true)
  }, [history, userInfo])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("Passwords do not match")
    } else {
      dispatch(register(name, email, password, referralEmail))
    }
  }

  return success ? (
    <Container className="my-5 py-5">
      <Message variant="success">
        Check your {userInfo.email} mail inbox to verify your account in order
        to login. Check spam folder if you are unable to see it in the inbox
        folder.
      </Message>
    </Container>
  ) : (
    <>
      <Helmet>
        <title>Register Booming coins LTD</title>
        <meta name="description" content="Register" />
      </Helmet>
      <Container fluid className="justify-content-center align-items-center">
        <Row className="justify-content-center login-container">
          <Col className="py-5 my-5" md={6}>
            <h2 className="login text-center">
              OPEN AN ACCOUNT FOR FREE AND START INVESTING IN BITCOINS NOW!
            </h2>
            <Form onSubmit={handleSubmit}>
              {message && <Message variant="danger">{message}</Message>}
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <Form.Group controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="NAME"
                  className="about-form"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="about-form"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="PASSWORD"
                  className="about-form"
                  onChange={(e) => setPassword(e.target.value)}
                  // required
                />
              </Form.Group>

              <Form.Group controlId="confirmPassword">
                <Form.Control
                  type="password"
                  placeholder="CONFIRM PASSWORD"
                  value={confirmPassword}
                  className="about-form"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button variant="outline-warning" type="submit" block>
                Submit
              </Button>
              <p className="about-p  text-center my-2">
                ALREADY HAVE AN ACCOUNT?{" "}
                <Link to="login" className="register-btn">
                  LOGIN
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register
