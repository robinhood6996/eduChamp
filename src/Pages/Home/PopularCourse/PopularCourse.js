import React, { useEffect, useRef, useState } from "react";
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
import axios from "axios";
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([FreeMode, Pagination]);

const PopularCourse = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/course')
            .then(res => {
                setCourses(res.data)
            })
    }, []);

    return (
        <div className='popular-course-section pt-5 pb-5'>
            <div className='container mb-4 popular-course-section'>
                <h2 className="fw-bold">Our Popular Courses</h2>
                <p style={{ fontSize: '20px' }}>It is a long established fact that a reader will be distracted by<br /> the readable content of a page</p>

                <div>
                    <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{
                        "clickable": true
                    }} breakpoints={{
                        "375": {
                            "slidesPerView": 1,
                            "spaceBetween": 20,
                        },
                        "425": {
                            "slidesPerView": 1,
                            "spaceBetween": 20,
                        },
                        "640": {
                            "slidesPerView": 1,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 3,
                            "spaceBetween": 50
                        }
                    }} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} className="mySwiper">
                        <Row xs={1} md={2} className="g-4">

                            {
                                courses.map(course => (<SwiperSlide key={course._id}>
                                    <Col>
                                        <Card>
                                            <Card.Img variant="top" src={`data:image/*;base64,${course.thumb}`} />
                                            <Card.Body>
                                                <p className="fw-bold" style={{ color: '#A3A2A4' }}>{course.category}</p>
                                                <Card.Title style={{ fontWeight: 'bold' }}>{course.title}</Card.Title>
                                                <Card.Text>
                                                    {course.details.slice(0, 80)}
                                                </Card.Text>
                                                <div className="price-review d-flex justify-content-between align-items-center">
                                                    <div className="price"><p className="fw-bold fs-4">${course.price}</p></div>
                                                    <div className="buy-btn"><button className="buy-btn"><Link to={`/course/${course._id}`}>Enroll Now</Link></button></div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </SwiperSlide>))
                            }
                        </Row>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;