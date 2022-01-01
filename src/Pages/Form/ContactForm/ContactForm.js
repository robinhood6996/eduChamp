import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <div className="heading">
                <h1>Contact With Us</h1>
            </div>
            <form action="">
            <input type="text" name='name' className='w-50 my-2 p-2' placeholder='Your Name' />
            <br />
            <input type="email" name='email' className='w-50 my-2 p-2' placeholder='Your Email' />
            <br />
            <textarea name="message" placeholder='Your Message' id="" className='w-50' cols="30" rows="10"></textarea>
            <br />
            <input value="Send" type="submit" className='btn btn-success' />
            </form>
        </div>
    );
};

export default ContactForm;