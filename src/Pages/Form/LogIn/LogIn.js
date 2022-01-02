import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const LogIn = () => {  
    const [details, setDetails] = useState({})
    const {logOut, logInWithEmailAndPass, error,googleSignIn} = useFirebase()
    const onBlurHandle = e => {
        const name = e.target.name
        const value = e.target.value
        const userDetails = {...details}
        userDetails[name] = value
        setDetails(userDetails)
    }
    const email = details.email
    const password = details.password

    const logInHandle = e => {

        e.preventDefault()
        logInWithEmailAndPass(email, password)
        e.target.reset()
    }
    return (
        <Container className='text-center py-5'>
        <div className="heading mb-3">
            <h1>Log In </h1>
        </div>
        <form onSubmit={logInHandle} className='w-50 mx-auto'>
            <input onBlur={onBlurHandle} type="email" name='email' className='w-50 my-2 p-2' placeholder='Your Email' />
            <br />
            <input onBlur={onBlurHandle} type="password" name='password' className='w-50 my-2 p-2' placeholder='Your Password' />
            <br />
            <input value="Log In" type="submit" className='btn btn-success' />
            <button className='btn btn-danger ms-3' onClick={logOut}>Log Out </button>
        </form>
        <h5 className='text-danger my-1'>{error}</h5>
        <h6 className=' mb-2'>Create a new account <Link to='/register'>Register</Link></h6>
        <button onClick={googleSignIn} className="btn btn-warning">Google Sign In</button>
        </Container>

    );
};

export default LogIn;