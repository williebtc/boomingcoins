import React from "react"
import { Helmet } from "react-helmet"
import About from "../components/About"
import Bitcoin from "../components/Bitcoin"
import Crypto from "../components/Crypto"
import Investments from "../components/Investments"
import Investors from "../components/Investors"
import KeyValues from "../components/KeyValues"
import MakeDeposit from "../components/MakeDeposit"
import Refer from "../components/Refer"
import Services from "../components/Services"
import Slider from "../components/Slider"

const HomeScreen = () => {
  return (
    <>
      <Helmet>
        <title>Home Booming coins LTD</title>
        <meta name="description" content="Home" />
      </Helmet>
      <MakeDeposit />
      <Slider />
      <Investors />
      <About />
      <Investments />
      <Services />
      <Crypto />
      <Bitcoin />
      <KeyValues />
      <Refer />
    </>
  )
}

export default HomeScreen
