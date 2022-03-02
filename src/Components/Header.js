import React from "react";
import { Col, Container, Row, Image, Navbar, Nav } from "react-bootstrap";
import { BsFillAlarmFill, BsFillEnvelopeFill, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div style={{ backgroundColor: "#06a9f2" }}>
        <Container>
          <Row className="text-light py-2">
            <Col sm={8} className="d-flex time">
              <p>
                <BsFillAlarmFill /> We are open 24/7 | 
              </p>
              <p>
                &nbsp;<BsFillEnvelopeFill /> mail.email.com
              </p>
            </Col>
            <Col sm={4} className="text-end social">
              <BsTwitter className="mx-1" />
              <FaLinkedinIn className="mx-1" />
              <FaFacebookF className="mx-1" />
              <FaPinterestP className="mx-1" />
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Image
              style={{ width: "140px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZg7ot-J_pAYc_V4EmAImn5KwHfnYRRqFVFveOxBJmCOxEhANMwbFM1hRByHOgVZCzFw&usqp=CAU"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-center justify-content-end">
            <Nav>
              <Nav.Link className="fs-5 text-primary">Home</Nav.Link>
              <Nav.Link className="fs-5">About</Nav.Link>
              <Nav.Link className="fs-5">Project</Nav.Link>
              <Nav.Link className="fs-5">Blog</Nav.Link>
              <Nav.Link className="fs-5">Services</Nav.Link>
              <Nav.Link className="fs-5">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
