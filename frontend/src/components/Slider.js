import React from "react"
import { Button, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"

import background1 from "../images/crypto-background1.jpg"
import background2 from "../images/crypto-background2.jpg"
import background3 from "../images/crypto-background3.jpg"
import background4 from "../images/crypto-background4.jpg"
import background5 from "../images/crypto-background5.jpg"
import background6 from "../images/crypto-background6.jpg"

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={background3} alt="First slide" />
        <Carousel.Caption>
          <h3>Secure and easy way to buy bitcoin</h3>
          <Button variant="warning">
            <Link to="/about">Learn More</Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={background5} alt="Second slide" />
        <Carousel.Caption>
          <h3>Easy way to invest in crypto</h3>
          <Button variant="warning">
            <Link to="/about">Learn More</Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={background6} alt="Third slide" />
        <Carousel.Caption>
          <h3>We will take care of trading for you</h3>
          <Button variant="warning">
            <Link to="/about">Learn More</Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
