import React from "react"
import { Modal, Button, Image } from "react-bootstrap"

import variables from "../data/variables"
import certificate from "../images/certificate.jpg"

const Cetification = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {variables.COMPANY_NAME}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={certificate} fluid />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Cetification
