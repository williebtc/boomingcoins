import React from "react"
import { FaPhone } from "react-icons/fa"
import { Link } from "react-router-dom"
import variables from "../data/variables"

const Social = () => {
  return (
    <ul className="col item social">
      <Link to={variables.FACEBOOK}>
        <i className="icon ion-social-facebook"></i>
      </Link>
      <Link to={variables.TWITTER}>
        <i className="icon ion-social-twitter"></i>
      </Link>
      <Link to="https://snapchat.com">
        <i className="icon ion-social-snapchat"></i>
      </Link>
      <Link to="https://instagram.com">
        <i className="icon ion-social-instagram"></i>
      </Link>
      <a href="tel:+16513337026">
        <FaPhone className="icon" />
      </a>
    </ul>
  )
}

export default Social
