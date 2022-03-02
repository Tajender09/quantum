import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./Banner.css";

function Banner() {
  return (
    <div style={{ backgroundColor: "#e8f5fc" }}>
    <Container>
      <Row
        className="align-items-center banner"
        style={{ padding: "4rem 10rem 0" }}
      >
        <Col md={6}>
          <h5>Ki Name Dhake Bolbo Tomake</h5>
          <h1 className="fw-bolder">
            We Are Consulting For Your
            <br />
            Business Finances
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            style={{ backgroundColor: "#06a9f2", borderColor: "#06a9f2" }}
            className="mt-2 py-2 px-4"
          >
            Start Now
          </Button>
        </Col>
        <Col md={6} className="banner-img">
          <Image src="https://freepikpsd.com/file/2019/10/business-man-and-woman-png-4-Transparent-Images.png" fluid />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Banner;
