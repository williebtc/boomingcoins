import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "react-bootstrap"
import UserList from "../components/Users"

const Admin = () => {
  return (
    <>
      <Helmet>
        <title>Admin Booming coins LTD</title>
        <meta name="description" content="Admin page" />
      </Helmet>
      <Container>
        <Row>
          <Col>
            <UserList />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Admin
