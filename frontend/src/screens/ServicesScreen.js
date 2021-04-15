import React from "react"
import { Helmet } from "react-helmet"
import Crypto from "../components/Crypto"
import Investments from "../components/Investments"
import Services from "../components/Services"

const ServicesScreen = () => {
  return (
    <>
      <Helmet>
        <title>Services Booming coins LTD</title>
        <meta name="description" content="Services" />
      </Helmet>
      <Services />
      <Crypto />
      <Investments />
    </>
  )
}

export default ServicesScreen
