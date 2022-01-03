import React from 'react';
import './Footer.css'
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {

    const handleNewsLatter = (e) => {
        e.preventDefault()
    }


    return (
        <div className='footer_container pt-5'>
            <Container >
            <div className="ms-2 p-3">
                <Row xs={1} md={4} className="g-2">

                    <Col>
                        <div className='mb-3'>
                            <h4>Sign Up For A Newsletter</h4>
                            <hr className="footer_line" />
                        </div>
                        <div>
                            <p className="mb-4">Weekly Breaking News Analysis And Cutting Edge Advices On Job Searching.</p>
                            <form onSubmit={handleNewsLatter}>
                                <input className='footer_form_input' type="email" placeholder='Enter Email Address' />
                                <button className='footer_form_submit_btn' type="submit">
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <h4>Courses</h4>
                            <hr className="footer_line" />
                        </div>
                        <div className='footer_list_items'>
                            <li><a target="_blank" href="!#">Home</a></li>
                            <li><a target="_blank" href="!#">Course</a></li>
                            <li><a target="_blank" href="!#">Details</a></li>
                            <li><a target="_blank" href="!#">Membership</a></li>
                        </div>
                    </Col>

                    <Col>

                        <div>
                            <h4>Get In Touch</h4>
                            <hr className="footer_line" />
                        </div>
                        <div className="footer_contact-items">
                            <li><a target="_blank" href="www.educamp004@gmail.com">
                                <i className="far fa-envelope"></i>

                            </a></li>
                            <li><a target="_blank" href="!#">
                                <i className="fab fa-facebook-square"></i>
                            </a></li>
                            <li><a target="_blank" href="!#">
                                <i className="fab fa-instagram-square"></i>
                            </a></li>
                            <li><a target="_blank" href="!#">
                                <i className="fab fa-linkedin"></i>
                            </a></li>
                        </div>

                    </Col>

                    <Col>
                        <div>
                            <h4>Our Gallery</h4>
                            <hr className="footer_line" />
                        </div>

                        <div className="footer_gallery">
                            <Row>
                                <Col sm={3} xs={3} className='p-0 footer-gallery-image'>

                                    <img src="http://educhamp.themetrades.com/react/static/media/pic2.5759cd1f.jpg" alt="" />

                                </Col>
                                <Col sm={3} xs={3} className='p-0 footer-gallery-image'>

                                    <img src="http://educhamp.themetrades.com/react/static/media/pic1.a7317c67.jpg" alt="" />

                                </Col>
                                <Col sm={3} xs={3} className='p-0 footer-gallery-image'>

                                    <img src="http://educhamp.themetrades.com/react/static/media/pic3.40c87ff8.jpg" alt="" />

                                </Col>
                                <Col sm={3} xs={3} className='p-0 footer-gallery-image'>

                                    <img src="http://educhamp.themetrades.com/react/static/media/pic4.08221262.jpg" alt="" />

                                </Col>
                                <Col sm={3} xs={3} className='p-0 footer-gallery-image'>

                                    <img src="http://educhamp.themetrades.com/react/static/media/pic8.024cc28c.jpg" alt="" />

                                </Col>
                                <Col sm={3} xs={3} className='p-0 footer-gallery-image'>

                                    <img src="http://educhamp.themetrades.com/react/static/media/pic5.a46bcc2b.jpg" alt="" />

                                </Col>
                                <Col sm={3} xs={3} className='p-0 footer-gallery-image'>

                                    <img src="http://educhamp.themetrades.com/react/static/media/pic6.a06bd7c3.jpg" alt="" />

                                </Col>
                                <Col sm={3} xs={3} className='p-0 footer-gallery-image'>

                                    <img src="http://educhamp.themetrades.com/react/static/media/pic7.1daa6fef.jpg" alt="" />

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <p>
                    <strong className="text-secondary">
                        Copy right By &copy;  EDUCamp 2022
                    </strong>
                </p>
            </div>
        </Container>
        </div>
    );
};

export default Footer;