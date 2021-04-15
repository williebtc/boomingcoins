import React, { useEffect, useState } from "react"
import { Col, Container, Row, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { login } from "../actions/userActions"

import bitcoin from "../images/bitcoinLogin.jpg"
import { Helmet } from "react-helmet"

const Login = ({ history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push("/")
    }
  }, [history, userInfo])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <Helmet>
        <title>Login Booming coins LTD</title>
        <meta name="description" content="Login" />
      </Helmet>
      <Container fluid className="justify-content-center align-items-center">
        <Row className="justify-content-center login-container">
          <Col className="py-5 my-5" md={6}>
            <h2 className="login text-center">LOGIN</h2>
            <Form onSubmit={handleSubmit}>
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
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
                  // pattern=".{8,}"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="outline-warning" type="submit" block>
                Submit
              </Button>
              <p className="about-p  text-center my-2">
                DON'T HAVE AN ACCOUNT?{" "}
                <Link to="/register" className="register-btn">
                  REGISTER
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
