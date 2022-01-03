import React from 'react';
import { Container } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <div className=''>
            <div className="heading mb-3">
                <h1>Get In Touch</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
            </div>
            <form className=' mx-auto' action="">
            <input type="text" name='name' className='w-100 my-2 p-2' placeholder='Your Name' />
            <br />
            <input type="email" name='email' className='w-100 my-2 p-2' placeholder='Your Email' />
            <br />
            <input type="phone" name='phone' className='w-100 my-2 p-2' placeholder='Your Phone' />
            <br />
            <textarea name="message" placeholder='Your Message' id="" className='w-100 p-2' cols="30" rows="10" ></textarea>
            <br />
            <input value="Send Message" type="submit" className='btn btn-success' />
            </form>
        </div>
    );
};

export default ContactForm;