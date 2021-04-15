import React, { useEffect, useState } from "react"
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
import Message from "../components/Message"
import Loader from "../components/Loader"
import { getUserDetails, updateUserProfile } from "../actions/userActions"
import Sonnet from "../components/Sonnet"
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants"
import Transactions from "../components/Transactions"
import MakeDeposit from "../components/MakeDeposit"
import { Helmet } from "react-helmet"

const Dashboard = ({ history }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    let isModified = false
    if (!userInfo) {
      history.push("/login")
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails("profile"))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }

    return () => (isModified = true)
  }, [dispatch, history, userInfo, user, success])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("Passwords do not match")
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
      setMessage("Profile updated successfully")
    }
  }

  return (
    <>
      <Helmet>
        <title>Dashboard Booming coins LTD</title>
        <meta name="description" content="Dashbord" />
      </Helmet>
      <section>
        <Container className="investors dashboard" fluid>
          <h1 className="text-center pt-5 investors-thead">Dashboard</h1>
          <MakeDeposit hide />
          <Row className="my-5">
            <Col xs={12} md={8}>
              <Transactions />
            </Col>
            <Col xs={12} md={4}>
              <Form onSubmit={handleSubmit} className="mb-3">
                <h2 className="h2">User Profile</h2>
                {message && <Message variant="success">{message}</Message>}
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="NAME"
                    className="about-form"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="about-form"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="PASSWORD"
                    className="about-form"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
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
                    value={confirmPassword}
                  ></Form.Control>
                </Form.Group>

                <Button variant="outline-warning" type="submit" block>
                  UPDATE PROFILE
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Dashboard
