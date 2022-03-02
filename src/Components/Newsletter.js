import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="w-100 py-5" style={{backgroundImage: "url('https://www.keyusa.com/images/newsletter-banner.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed"}}>
        <Container className="my-5">
            <Row className="align-items-center">
                <Col md={6} className="text-light">
                    <h3 className="fw-bolder">Subscribe Our Newsletter<br />For More Update</h3>
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
                <Col md={6}>
                    <form>
                        <input type="email" placeholder="Enter Your Mail" style={{backgroundColor: "transparent", borderColor: "#fff"}} className="d-block w-75 p-3" />
                        <Button style={{ backgroundColor: "#06a9f2", borderColor: "#06a9f2" }} className="mt-4 px-4 py-2">Subscribe</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Newsletter;