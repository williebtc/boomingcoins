import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import About from "../components/About"

const AboutScreen = () => {
  // <!--Start of Tawk.to Script-->
  // useEffect(() => {
  //   var Tawk_API = Tawk_API || {},
  //     Tawk_LoadStart = new Date()(function () {
  //       var s1 = document.createElement("script"),
  //         s0 = document.getElementsByTagName("script")[0]
  //       s1.async = true
  //       s1.src = "https://embed.tawk.to/6077fa44067c2605c0c29fa6/1f3aaj7tj"
  //       // s1.charset='UTF-8';
  //       s1.setAttribute("crossorigin", "*")
  //       s0.parentNode.insertBefore(s1, s0)
  //     })()
  // }, [])
  // end of tawk.to script
  return (
    <>
      <Helmet>
        <title>About Booming coins LTD</title>
        <meta name="description" content="Invest your bicoins with us" />
      </Helmet>
      <main>
        <About />
      </main>
    </>
  )
}

export default AboutScreen
