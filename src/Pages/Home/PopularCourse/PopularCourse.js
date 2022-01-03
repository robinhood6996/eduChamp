import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/pagination"
import php from '../../../Images/courses/php.jpg';

import './PopularCourse.css';


// import Swiper core and required modules
import SwiperCore, {
    FreeMode, Pagination
} from 'swiper';
import { Button, Card, Col, Row } from "react-bootstrap";

// install Swiper modules
SwiperCore.use([FreeMode, Pagination]);

const PopularCourse = () => {
    return (
        <div className='container mb-10'>
            <h2>Our Popular Courses</h2>
            <p>It is a long established fact that a reader will be distracted by<br /> the readable content of a page</p>

            <div>
                <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    <Row xs={1} md={2} className="g-4">
                        <SwiperSlide>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={php} />
                                    <Card.Body>
                                        <p className="fw-bold" style={{ color: '#A3A2A4' }}>Programming</p>
                                        <Card.Title style={{ fontWeight: 'bold' }}>Learn PHP Programming From Scratch</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <div className="price-review d-flex justify-content-between align-items-center">
                                            <div className="price"><p className="fw-bold fs-4">$120</p></div>
                                            <div className="buy-btn"><Button variation="success" className="buy-btn">Enroll Now</Button></div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={php} />
                                    <Card.Body>
                                        <p className="fw-bold" style={{ color: '#A3A2A4' }}>Programming</p>
                                        <Card.Title style={{ fontWeight: 'bold' }}>Learn PHP Programming From Scratch</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <div className="price-review d-flex justify-content-between align-items-center">
                                            <div className="price"><p className="fw-bold fs-4">$120</p></div>
                                            <div className="buy-btn"><Button variation="success" className="buy-btn">Enroll Now</Button></div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={php} />
                                    <Card.Body>
                                        <p className="fw-bold" style={{ color: '#A3A2A4' }}>Programming</p>
                                        <Card.Title style={{ fontWeight: 'bold' }}>Learn PHP Programming From Scratch</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <div className="price-review d-flex justify-content-between align-items-center">
                                            <div className="price"><p className="fw-bold fs-4">$120</p></div>
                                            <div className="buy-btn"><Button variation="success" className="buy-btn">Enroll Now</Button></div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={php} />
                                    <Card.Body>
                                        <p className="fw-bold" style={{ color: '#A3A2A4' }}>Programming</p>
                                        <Card.Title style={{ fontWeight: 'bold' }}>Learn PHP Programming From Scratch</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <div className="price-review d-flex justify-content-between align-items-center">
                                            <div className="price"><p className="fw-bold fs-4">$120</p></div>
                                            <div className="buy-btn"><Button variation="success" className="buy-btn">Enroll Now</Button></div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </SwiperSlide>

                    </Row>
                </Swiper>
            </div>
        </div>
    );
};

export default PopularCourse;