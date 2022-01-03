import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Iframe from 'react-iframe'

const OurStory = () => {
    return (
        <div className='my-5'>
            <Row className='align-items-center'>
                <Col lg='7'>
                <Iframe url="https://www.youtube.com/embed/99RWZsEITx4"
                        width="100%"
                        height="350px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"/>
                </Col>
                <Col lg='5'>
                <div className="heading mb-4">
                    <h1>See Our Story</h1>
                </div>
                <div className="details">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                    <button className="btn btn-danger">Read More</button>
                </div>
                </Col>
            </Row>
        </div>
    );
};

export default OurStory;