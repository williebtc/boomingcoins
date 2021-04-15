import axios from "axios"
import { Helmet } from "react-helmet"
import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaShareAlt,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa"
import Loader from "../components/Loader"
import Message from "../components/Message"
import Social from "../components/Social"

import variables from "../data/variables"

const ContactScreen = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (window.confirm("Are you sure your input is correct?")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      setLoading(true)
      await axios
        .post(
          `/api/users/contact`,
          { firstName, lastName, email, subject, message },
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
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Helmet>
        <title>Admin Booming coins LTD</title>
        <meta name="description" content="Admin page" />
      </Helmet>
      <main className="terms">
        <Container>
          <h1>GET IN TOUCH</h1>
          <Row>
            <Col md={8} className="about-p">
              <h4>FEEL FREE TO DROP US A MESSAGE</h4>
              <p>
                Need to speak to us? Do you have any queries or suggestions?
                Please contact us about all enquiries including membership and
                volunteer work using the form below.
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="FIRST NAME"
                    className="about-form"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="LAST NAME"
                    className="about-form"
                    onChange={(e) => setLastName(e.target.value)}
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
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="SUBJECT"
                    className="about-form"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="MESSAGE"
                    as="textarea"
                    className="about-form"
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={800}
                    required
                  />
                </Form.Group>

                <Button variant="outline-warning" type="submit" block>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col xs={9} md={4} className="my-2 address">
              <Row>
                <Col xs={4} md={2}>
                  <FaHome color="#ff6a00" size={40} />{" "}
                </Col>
                <Col xs={8} md={8}>
                  <h5>ADDRESS</h5>
                  <p>{variables.ADDRESS}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={4} md={2}>
                  <FaPhone color="#ff6a00" size={40} />{" "}
                </Col>
                <Col xs={8} md={8}>
                  <h5>PHONE NUMBERS</h5>
                  <p>{variables.PHONE_NUMBER}</p>
                  <p>{variables.PHONE_NUMBER}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={4} md={2}>
                  {" "}
                  <FaEnvelope color="#ff6a00" size={40} />
                </Col>
                <Col xs={8} md={8}>
                  <h5>EMAIL ADDRESSES</h5>
                  <p>{variables.EMAIL_ADDRESS}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={4} md={2}>
                  {" "}
                  <FaShareAlt color="#ff6a00" size={40} />
                </Col>
                {/* <Col xs={8} md={8}>
                  <h5>SOCIAL ADDRESS</h5>
                  <p>
                    <FaTwitter color="#0000dd" size={25} className="mr-2" />
                    <FaFacebook color="#0000dd" size={25} />
                  </p>
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default ContactScreen
