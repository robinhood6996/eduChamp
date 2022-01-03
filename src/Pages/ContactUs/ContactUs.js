import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../Form/ContactForm/ContactForm';

const ContactUs = () => {
    return (
        <div className='py-5'>
           <Container>
               <Row>
                   <Col lg='7'>
                        <ContactForm></ContactForm>
                   </Col>
                   <Col lg='5'>
                        <div className="contact-info ">
                            <div className="heading">
                            <h1>Contact Info</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                            </div>
                            
                        </div>
                   </Col>
               </Row>
            </Container> 
        </div>
    );
};

export default ContactUs;