import React from 'react'
import {useState,useEffect} from 'react'
import {Button, Modal} from "react-bootstrap";


function Shit(props) {


  console.log(props.show);
  
  return (
    <div>
      <Modal show={props.show} hidemodal={props.handleClose}>
              <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="dark" clickformodal={props.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
  )
}

export default Shit;