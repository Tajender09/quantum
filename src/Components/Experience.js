import React from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { IoSettingsSharp, IoCloudSharp,  IoConstruct } from 'react-icons/io5';
import { IoMdGlasses } from 'react-icons/io';
import "./Experience.css";

function Experience() {
  return (
    <div className="experience" style={{margin: "7rem 10rem"}}>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6}>
                    <h2 className='fw-bolder'>We Have Many Experience In<br />Consultent Business</h2>
                    <p className='my-4 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                    <Button style={{ backgroundColor: "#06a9f2", borderColor: "#06a9f2" }} className='py-2 px-4'>Know More</Button>
                </Col>
                <Col lg={1} />
                <Col lg={5} className="exp-img">
                    <Image fluid className="w-100" src="https://digitalnomadgirls.com/wp-content/uploads/2018/10/girl-on-laptop-website-digital-nomad-girls.jpg" />
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg={3} className="text-center">
                    <p className='fs-1'><IoSettingsSharp /></p>
                    <h3>Construction</h3>
                </Col>
                <Col lg={3} className="text-center">
                    <p className='fs-1'><IoCloudSharp /></p>
                    <h3>Dummy Logo</h3>
                </Col>
                <Col lg={3} className="text-center">
                    <p className='fs-1'><IoMdGlasses /></p>
                    <h3>Random Logo</h3>
                </Col>
                <Col lg={3} className="text-center">
                    <p className='fs-1'><IoConstruct /></p>
                    <h3>Random Brand</h3>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Experience;