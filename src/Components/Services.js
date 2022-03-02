import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Services.css";
import { HiSpeakerphone } from "react-icons/hi";
import { FaPiggyBank } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";

function Services() {
  const [blue, setBlue] = useState("second");
  return (
    <div className="text-center pt-5">
      <h3 className="fw-bolder heading">Our Services</h3>
      <p style={{ marginTop: "2rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br /> tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Container>
        <Row className="box-container" style={{ marginTop: "5rem" }}>
          <Col
            className={`px-5 d-flex flex-column align-items-center box ${
              blue === "first" ? "blue" : ""
            }`}
            style={{
              position: "relative",
              paddingTop: "5rem",
              cursor: "pointer",
            }}
            onClick={() => setBlue("first")}
            lg={4}
          >
            <span
              style={{
                position: "absolute",
                top: 0,
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
              }}
              className="py-3 px-4 fs-2 rounded-circle shadow border"
            >
              <GiFlowerPot style={{ color: "#06a9f2" }} />
            </span>
            <h5 className="fw-bolder">Financial Consulting</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col
            className={`px-5 d-flex flex-column align-items-center box ${
              blue === "second" ? "blue" : ""
            }`}
            style={{
              position: "relative",
              paddingTop: "5rem",
              cursor: "pointer",
            }}
            onClick={() => setBlue("second")}
            lg={4}
          >
            <span
              style={{
                position: "absolute",
                top: 0,
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
              }}
              className="py-3 px-4 fs-2 rounded-circle shadow border"
            >
              <HiSpeakerphone style={{ color: "#06a9f2" }} />
            </span>
            <h5 className="fw-bolder">Content Marketing</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col
            className={`px-5 d-flex flex-column align-items-center box ${
              blue === "third" ? "blue" : ""
            }`}
            style={{
              position: "relative",
              paddingTop: "5rem",
              cursor: "pointer",
            }}
            onClick={() => setBlue("third")}
            lg={4}
          >
            <span
              style={{
                position: "absolute",
                top: 0,
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
              }}
              className="py-3 px-4 fs-2 rounded-circle shadow border"
            >
              <FaPiggyBank style={{ color: "#06a9f2" }} />
            </span>
            <h5 className="fw-bolder">Financial Advice</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
        <Button
          style={{ backgroundColor: "#06a9f2", borderColor: "#06a9f2", marginBottom: "7rem" }}
          className="mt-5 px-4 py-2"
        >
          All Services
        </Button>
      </Container>
    </div>
  );
}

export default Services;
