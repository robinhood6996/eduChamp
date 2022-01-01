import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import AddCourse from '../AddCourse/AddCourse';

const Register = () => {
    const [details, setDetails] = useState({})
    const {registerWithGoogleAndPass, logOut, error, setError} = useFirebase()
    const onBlurHandle = e => {
        const name = e.target.name
        const value = e.target.value
        const userDetails = {...details}
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
            registerWithGoogleAndPass(email, password, name , image)
            setError('')
        }
        else {
            setError('Password Did Not Matched')
            return
        }
        e.target.reset()
    }
    return (
        <Container className='text-center py-5'>
        <div className="heading mb-3">
            <h1>Register Here </h1>
        </div>
        <form onSubmit={registerHandle} className='w-50 mx-auto'>
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
            <button className='btn btn-danger ms-3' onClick={logOut}>Log Out </button>
        </form>
        <h5 className='text-danger my-1'>{error}</h5>
            <h6 className=' mb-2'>Already have an account ? <Link to='/login'>Login</Link></h6>

            <AddCourse></AddCourse>
        </Container>
    );
};

export default Register;