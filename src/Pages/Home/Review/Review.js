import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/pagination"
import avatar from '../../../Images/avatar.png';



import './Review.css';

// import Swiper core and required modules
import SwiperCore, {
    FreeMode, Pagination
} from 'swiper';
import { Button, Card, Col, Image, Row } from "react-bootstrap";

// install Swiper modules
SwiperCore.use([FreeMode, Pagination]);





const Review = () => {
    return (
        <div className='review-section'>
            <div className="container content-review">
                <div id="overlay"></div>
                <div className="review-heading text-center ">
                    <h1>What People Say</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                </div>

                <div>
                    <Swiper slidesPerView={2} spaceBetween={30} freeMode={true} pagination={{
                        "clickable": true
                    }} breakpoints={{
                        "320": {
                            "slidesPerView": 1,
                            "spaceBetween": 20,
                        },
                        "375": {
                            "slidesPerView": 1,
                            "spaceBetween": 20,
                        },
                        "425": {
                            "slidesPerView": 1,
                            "spaceBetween": 20,
                        },
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 2,
                            "spaceBetween": 50
                        }
                    }} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} className="mySwiper">
                        <Row xs={1} md={2} className="g-3">
                            <SwiperSlide>
                                <Col>
                                    <Card className="p-4">

                                        <Card.Body>
                                            <div className="heading d-flex align-items-center ">
                                                <Image src={avatar} style={{ width: '60px' }}></Image>
                                                <Card.Title>- Fakrul Islam Robin</Card.Title>
                                            </div>
                                            <Card.Text style={{ marginTop: '20px', fontStyle: 'italic' }}>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet facere repudiandae sequi maiores, consequatur dicta eius aliquam distinctio alias suscipit ratione sed repellat provident saepe atque odit ea officia id!
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Col>
                                    <Card className="p-4">

                                        <Card.Body>
                                            <div className="heading d-flex align-items-center ">
                                                <Image src={avatar} style={{ width: '60px' }}></Image>
                                                <Card.Title>- Fakrul Islam Robin</Card.Title>
                                            </div>
                                            <Card.Text style={{ marginTop: '20px', fontStyle: 'italic' }}>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet facere repudiandae sequi maiores, consequatur dicta eius aliquam distinctio alias suscipit ratione sed repellat provident saepe atque odit ea officia id!
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Col>
                                    <Card className="p-4">

                                        <Card.Body>
                                            <div className="heading d-flex align-items-center ">
                                                <Image src={avatar} style={{ width: '60px' }}></Image>
                                                <Card.Title>- Fakrul Islam Robin</Card.Title>
                                            </div>
                                            <Card.Text style={{ marginTop: '20px', fontStyle: 'italic' }}>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet facere repudiandae sequi maiores, consequatur dicta eius aliquam distinctio alias suscipit ratione sed repellat provident saepe atque odit ea officia id!
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </SwiperSlide>

                        </Row>
                    </Swiper>
                </div>
            </div>
        </div >
    );
};

export default Review;