import React from 'react';
import './SingleCourse.css';
import img from '../../Images/single-course.jpg';
import { Col, Container, Image, Row } from 'react-bootstrap';


const SingleCourse = () => {
    return (
        <div>
            <div className="course-brand">
                <div className="container">
                    <div className="course-page-heading">
                        <h2 className='heading-course'>Course Details</h2>
                    </div>
                </div>
            </div>



            <section className="course-area">
                <Container>
                    <Row>
                        <Col>
                            <div className="course-img">
                                <Image src={img} className='img-fluid'></Image>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2 className='mt-3 fw-bold'>Nvidia and UE4 Technologies Practice</h2>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col xs={12} md={3}>
                            <h5 className='fw-bold'>Overview</h5>
                            <div className="overview-items mt-4">
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i class="fas fa-book-reader icon"></i> Lesson</p>
                                    <p className='overview-item'>10</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i class="fas fa-clock icon"></i> Duration</p>
                                    <p className='overview-item'>30 hours</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i class="fas fa-user-graduate icon"></i> Skill Level</p>
                                    <p className='overview-item'>Beginner</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i class="fas fa-language icon"></i> Language</p>
                                    <p className='overview-item'>English</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i class="fas fa-user icon"></i> Enrolled</p>
                                    <p className='overview-item'>30</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i class="fas fa-chalkboard-teacher icon"></i> Instructor</p>
                                    <p className='overview-item fw-bold icon'>David Guatta</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i class="fas fa-money-bill-alt icon"></i> Price</p>
                                    <p className='overview-item fw-bold icon'>$120</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom pt-2 pb-2">
                                    <button className='buy-btn'>Click to Enroll Now</button>
                                </div>


                            </div>
                        </Col>

                        <Col xs={12} md={9}>
                            <Container className='course-description p-4'>
                                <h4 className='fw-bold mb-2'>Course Description</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </Container>
                            <Container className='course-description p-4'>
                                <h4 className='fw-bold mb-2'>Certification</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </Container>
                            <Container className='lessons p-4'>
                                <h4 className='fw-bold mb-2'>Curriculumn</h4>
                                <div className=" border-bottom p-1">
                                    <p className='overview-item'>Lesson 1. Introduction to PHP</p>
                                </div>
                                <div className=" border-bottom p-1">
                                    <p className='overview-item'>Lesson 2. Introduction to UI Design</p>
                                </div>
                                <div className=" border-bottom p-1">
                                    <p className='overview-item'>Lesson 3. User Research and Design</p>
                                </div>
                                <div className=" border-bottom p-1">
                                    <p className='overview-item'>Lesson 4.  Evaluating User Interfaces Part 1</p>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div >
    );
};

export default SingleCourse;