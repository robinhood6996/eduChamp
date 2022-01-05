import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../Form/ContactForm/ContactForm';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const ContactUs = () => {
    return (
        <> 
        <Navigation></Navigation>
        <div className='py-5'>
        <Container>
            <Row className='gy-3'>
                <Col lg='7'>
                     <ContactForm></ContactForm>
                </Col>
                <Col lg='5'>
                     <div className="contact-info ">
                         <div className="heading mb-3">
                         <h1>Contact Info</h1>
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page 100</p>
                         </div>
                         <div className='d-flex align-items-center mb-1'>
                         <div className="icon me-3">
                         <i className="fas fa-home fs-3 text-success"></i>
                         </div>
                         <div className="details">
                         <h5>Binghamton, New York</h5>
                         <p>4343 Hinkle Deegan Lake Road</p>
                         </div>
                     </div>
                     <div className='d-flex align-items-center mb-1'>
                         <div className="icon me-3">
                         <i class="fas fa-phone-alt fs-3 text-success"></i>
                         </div>
                         <div className="details">
                         <h5>00 (958) 9865 562</h5>
                         <p>24 Hours</p>
                         </div>
                     </div>
                     <div className='d-flex align-items-center mb-1'>
                         <div className="icon me-3 ">
                         <i class="far fa-envelope fs-3 text-success"></i>
                         </div>
                         <div className="details">
                         <h5>educhamp@gmail.com</h5>
                         <p>Send us your query anytime!</p>
                         </div>
                     </div>
                     </div>
                     <div className="icons">
                         <h3>Follow Us</h3>
                         <a target='blank' href='https://github.com/Fahad98723' className="social"><i className=" me-2 fs-1 text-success fab fa-github-square"></i></a>
                         <a target='blank' href='https://www.linkedin.com/in/kazi-fahad-221a91211/' className="social"><i className=" me-2 fs-1 text-success fab fa-linkedin"></i></a>
                         <a target='blank' href='https://twitter.com/Mdravi88' className="social"><i className=" me-2 fs-1 text-success fab fa-twitter-square"></i></a>
                         <a target='blank' href='https://www.facebook.com/profile.php?id=100007037043156' className="social"><i className=" me-2 fs-1 text-success fab fa-facebook-square"></i></a>
                     </div>
                </Col>
            </Row>
         </Container> 
     </div>
     <Footer></Footer>
     </>
        
    );
};

export default ContactUs;
