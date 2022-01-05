import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AddCourse from '../AddCourse/AddCourse';
import './Register.css';

const Register = () => {
    const [details, setDetails] = useState({})
    const { registerWithGoogleAndPass, logOut, error, setError } = useFirebase()
    const location = useLocation()
    const pathname = location.state?.from?.pathname

    const onBlurHandle = e => {
        const name = e.target.name
        const value = e.target.value
        const userDetails = { ...details }
        userDetails[name] = value
        setDetails(userDetails)
    }
    const name = details.name
    const email = details.email
    const password = details.password
    const confirmPassword = details.confirm_password
    const image = details.image
    const registerHandle = e => {
        e.preventDefault()
        if (password === confirmPassword) {
            registerWithGoogleAndPass(email, password, name, image,pathname)
            setError('')
        }
        else {
            setError('Password Did Not Matched')
            return
        }
        e.target.reset()
    }
    return (
       <>
        <Navigation></Navigation>
        <div className='register-form'>
            <Container className='text-center py-5'>
                <div className="heading mb-3">
                    <h1>Register Here </h1>
                </div>
                <form onSubmit={registerHandle} className='mx-auto'>
                    <input onBlur={onBlurHandle} type="text" name='name' className='w-50 my-2 p-2' placeholder='Your Name' />
                    <br />
                    <input onBlur={onBlurHandle} type="email" name='email' className='w-50 my-2 p-2' placeholder='Your Email' />
                    <br />
                    <input onBlur={onBlurHandle} type="text" name='image' className='w-50 my-2 p-2' placeholder='Your Image Link' />
                    <br />
                    <input onBlur={onBlurHandle} type="password" name='password' className='w-50 my-2 p-2' placeholder='Your Password' />
                    <br />
                    <input onBlur={onBlurHandle} type="password" name='confirm_password' className='w-50 my-2 p-2' placeholder='Confirm  Password' />
                    <br />
                    <input value="Register" type="submit" className='btn btn-success' />
                </form>
                <h5 className='text-danger my-1'>{error}</h5>
                <h6 className=' mb-2'>Already have an account ? <Link to='/login'>Login</Link></h6>

            </Container>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Register;