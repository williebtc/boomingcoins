import React, { useEffect } from "react"
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  NavDropdown,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"
import variables from "../data/variables"
import { logout } from "../actions/userActions"

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  // Google Translate
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
      },
      "google_translate_element"
    )
  }

  // google translate
  useEffect(() => {
    var addScript = document.createElement("script")
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    )
    document.body.appendChild(addScript)
    window.googleTranslateElementInit = googleTranslateElementInit
  }, [])
  // end of google translate

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <>
      <Container>
        <div id="google_translate_element"></div>
      </Container>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        className="mt-1"
      >
        <LinkContainer to="/">
          <Navbar.Brand className="white">
            {variables.COMPANY_NAME}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="pr-5">
            <LinkContainer to="/about">
              <Nav.Link>ABOUT US</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/package">
              <Nav.Link>INVEST NOW</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faq">
              <Nav.Link>FAQ</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/terms">
              <Nav.Link>TERMS & CONDITIONS</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>CONTACT US</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link>SERVICES</Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="/dashboard">
                  <NavDropdown.Item>Dashboard</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>
                    <Button variant="outline-warning">Sign In</Button>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>
                    <Button variant="outline-warning">Register</Button>
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin Control" id="username">
                <LinkContainer to="/admin">
                  <NavDropdown.Item>Admin</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
