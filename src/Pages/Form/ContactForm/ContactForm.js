import React from 'react';
import { Container } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <Container className='py-5 text-center'>
            <div className="heading mb-3">
                <h1>Contact With Us</h1>
            </div>
            <form className='w-50 mx-auto' action="">
            <input type="text" name='name' className='w-100 my-2 p-2' placeholder='Your Name' />
            <br />
            <input type="email" name='email' className='w-100 my-2 p-2' placeholder='Your Email' />
            <br />
            <textarea name="message" placeholder='Your Message' id="" className='w-100' cols="30" rows="10"></textarea>
            <br />
            <input value="Send" type="submit" className='btn btn-success' />
            </form>
        </Container>
    );
};

export default ContactForm;