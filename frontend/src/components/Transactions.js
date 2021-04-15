import React, { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  TabContainer,
  Nav,
  Tab,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "./Message"
import Loader from "./Loader"
import { getUserTransactionbyId } from "../actions/userActions"

import Sonnet from "./Sonnet"
import AppTable from "./AppTable"
import AppTable2 from "./AppTable2"
import AppTable3 from "./AppTable3"
import AppTable4 from "./AppTable4"

const Transactions = () => {
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()

  // const userTransactions = useSelector((state) => state.userTransactionById)
  // const { loading, error, userTransById } = userTransactions

  // useEffect(() => {
  //   let isModified = false
  //   // if (!userTransById) {
  //   //   dispatch(getUserTransactionbyId())
  //   // }

  //   return () => (isModified = true)
  // }, [dispatch])

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col xs={12} sm={3}>
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Deposit</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Withdrawal </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Referral</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs={12} sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AppTable />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <AppTable2 />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <AppTable3 />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <AppTable4 />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}

export default Transactions
