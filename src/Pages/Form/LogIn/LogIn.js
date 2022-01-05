import React, { useState } from 'react';
import { Button, Form, Row, Col, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import loginimg from '../../../Images/blogs/2.jpg'
import './Login.css';
const LogIn = () => {
    const [details, setDetails] = useState({})
    const location = useLocation()
    const pathname = location.state?.from?.pathname

    const { logInWithEmailAndPass, error, googleSignIn } = useFirebase();

    const onBlurHandle = e => {
        const name = e.target.name
        const value = e.target.value
        const userDetails = { ...details }
        userDetails[name] = value
        setDetails(userDetails)
    }
    const email = details.email
    const password = details.password

    const logInHandle = e => {

        e.preventDefault()
        logInWithEmailAndPass(email, password, pathname )
        e.target.reset()
    }
    const googleSign = () => {
        googleSignIn(pathname)
        
    }
    // Container className = 'login-area py-5'
    return (
        <div >

            <Row className='py-5'>
                <Col sm={4} >
                    <Image className='img-fluid' src={loginimg} style={{ width: '100%', verticalAlign: 'middle' }}></Image>
                </Col>
                <Col sm={8} >
                    {/* Login Heading */}
                    <div className="heading mb-5">
                        <h1 className=''>Login to your Account </h1>
                        <h6 className=' mb-2'>New to EduChamp? Please <Link to='/register'>Register</Link></h6>
                    </div>

                    {/* Form */}
                    <div className="form">
                        <Form onSubmit={logInHandle}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={onBlurHandle} type="email" name='email' placeholder="Enter Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={onBlurHandle} type="password" name='password' placeholder="Enter Password" />
                            </Form.Group>
                            <Button className='buy-btn' type='submit'>Sign In</Button>
                        </Form>
                        <h5 className='text-danger my-1'>{error}</h5>
                        <div className="google-btn mt-5">
                            <h5>Login With Social Media</h5>
                            <button onClick={() => googleSign} className=" google-login">Google Sign In</button>
                        </div>
                    </div>
                </Col>
            </Row>


        </div>

    );
};

export default LogIn;