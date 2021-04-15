import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"

import { getUserById, getUserDetails, updateUser } from "../actions/userActions"
import { USER_UPDATE_RESET } from "../constants/userConstants"
import AdminTable1 from "../components/AdminTable1"
import CreateTransaction from "../components/CreateTransaction"
import AdminTable2 from "../components/AdminTable2"
import { Helmet } from "react-helmet"

const UserEditScreen = ({ match, history }) => {
  const dispatch = useDispatch()

  const getUser = useSelector((state) => state.getUser)
  const { loading, error, user } = getUser

  useEffect(() => {
    let modified = false

    dispatch(getUserById(match.params.id))
    return () => (modified = true)
  }, [])

  return (
    <>
      <Helmet>
        <title>User Edit Booming coins LTD</title>
        <meta name="description" content="Edit user" />
      </Helmet>
      <Container fluid className="justify-content-center align-items-center">
        <Row>
          <Col xs={12} md={6} className="my-5">
            <h2 className="h2">USER OVERVIEW</h2>
            <AdminTable1 id={match.params.id} />
          </Col>
          <Col xs={12} md={6} className="my-5">
            <h2 className="h2">CREATE USER DEPOSIT</h2>
            <CreateTransaction user={user} />
          </Col>
          <Col xs={12} className="my-5">
            <h2 className="h2  text-center">USER TRANSACTIONS</h2>
            <AdminTable2 {...user} />
          </Col>
          {/* <Col xs={12} md={6}></Col> */}
        </Row>
      </Container>
    </>
  )
}

export default UserEditScreen
