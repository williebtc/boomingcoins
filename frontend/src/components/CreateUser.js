import axios from "axios"
import React, { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import Loader from "./Loader"
import Message from "./Message"

const CreateUser = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const history = useHistory()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (userInfo && userInfo.isAdmin) {
      if (window.confirm("Are you sure you want to create a new user?")) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: ` Bearer ${userInfo.token}`,
          },
        }
        setLoading(true)
        await axios
          .post(`/api/users/create`, { email, name, password }, config)
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
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Container fluid className="createUser py-5 mb-5">
      <Row>
        <Col>
          <h2>Create a new user</h2>
          <Form onSubmit={handleSubmit}>
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
                type="text"
                placeholder="PASSWORD"
                className="about-form"
                onChange={(e) => setPassword(e.target.value)}
                // required
              />
            </Form.Group>

            <Button variant="outline-warning" type="submit" block>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateUser
