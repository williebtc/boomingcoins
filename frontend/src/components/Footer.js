import React from "react"
import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaPhone } from "react-icons/fa"
import variables from "../data/variables"
import Cetification from "./Cetification"
import Social from "./Social"

const Footer = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link to="/package">INVESTMENTS</Link>
                </li>
                <li>
                  <Link to="/guidance">GUIDIANCE</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>USEFUL LINKS</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/terms">TERMS</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT US</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h2>{variables.COMPANY_NAME}</h2>
              <p>
                {variables.COMPANY_NAME} investments company limited is a
                cryptocurrency firm established in 2015. Marketplaces called
                “bitcoin exchanges” allow people to buy or sell bitcoins using
                different currencies.
              </p>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                View Our Certificate
              </Button>

              <Cetification
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>

            <Social />
          </div>
          <p className="copyright">{variables.COMPANY_NAME} © 2015 - 2021</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
