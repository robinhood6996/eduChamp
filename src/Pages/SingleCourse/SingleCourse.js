import React, { useEffect, useState } from 'react';
import './SingleCourse.css';
import img from '../../Images/single-course.jpg';
import { Col, Container, Image, Row, Stack } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const SingleCourse = () => {
    const params = useParams();
    console.log(params.id)
    const [course, setCourse] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/course/${params.id}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    if (course.length) {
        return <Stack sx={{ py: 5 }} alignItems="center" className='w-25 mx-auto text-center'>
            <CircularProgress />
        </Stack>
    }


    return (
        <div>
            <Navigation></Navigation>
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
                                <Image src={`data:image/*;base64,${course.thumb}`} className='img-fluid'></Image>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2 className='mt-3 fw-bold'>{course?.title}</h2>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col xs={12} md={3}>
                            <h5 className='fw-bold'>Overview</h5>
                            <div className="overview-items mt-4">
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i className="fas fa-book-reader icon"></i> Lesson</p>
                                    <p className='overview-item'>10</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i className="fas fa-clock icon"></i> Duration</p>
                                    <p className='overview-item'>30 hours</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i className="fas fa-user-graduate icon"></i> Skill Level</p>
                                    <p className='overview-item'>{course?.skill}</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i className="fas fa-language icon"></i> Language</p>
                                    <p className='overview-item'>{course?.language}</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i className="fas fa-user icon"></i> Enrolled</p>
                                    <p className='overview-item'>30</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i className="fas fa-chalkboard-teacher icon"></i> Instructor</p>
                                    <p className='overview-item fw-bold icon'>{course?.instructor}</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom p-1">
                                    <p className='overview-item'> <i className="fas fa-money-bill-alt icon"></i> Price</p>
                                    <p className='overview-item fw-bold icon'>${course?.price}</p>
                                </div>
                                <div className="lecture d-flex justify-content-between border-bottom pt-2 pb-2">
                                    <Link to={`/checkout/${course._id}`}> <button className='buy-btn p-2'>Click to Enroll Now</button></Link>
                                </div>


                            </div>
                        </Col>

                        <Col xs={12} md={9}>
                            <Container className='course-description p-4'>
                                <h4 className='fw-bold mb-2'>Course Description</h4>
                                <p>{course.details}</p>
                            </Container>
                            <Container className='course-description p-4'>
                                <h4 className='fw-bold mb-2'>Certification</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </Container>
                            {/* <Container className='course-description p-4'>
                                <h4 className='fw-bold mb-2'>Course Overview</h4>
                                <iframe
                                    width="853"
                                    height="480"
                                    src={`${course?.video}`}
                                    frameBorder='0'
                                    allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    title='video'
                                />
                            </Container> */}
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
            <Footer></Footer>
        </div >
    );
};

export default SingleCourse;