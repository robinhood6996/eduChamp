import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const AddCourse = () => {
    const [details, setDetails] = useState({})
    const onBlurHandle = e => {
        const name = e.target.name
        const value = e.target.value
        const userDetails = {...details}
        userDetails[name] = value
        setDetails(userDetails)
    }
    console.log(details);

    const courseName = details.name
    const courseImage = details.image
    const courseDetails = details.details
    const coursePrice = details.price
    const courseCategory = details.category

    const addCourseHandle = e => {
        e.preventDefault()
        console.log(coursePrice,courseDetails,courseName, courseImage,courseCategory);
        e.target.reset()
    }
    return (
        <Container className='text-center py-5'>
        <div className="heading mb-3">
            <h1>Add New Course Here </h1>
        </div>
        <form onSubmit={addCourseHandle} className='w-50 mx-auto'>
            <input onBlur={onBlurHandle} type="text" name='name' className='w-50 my-2 p-2' placeholder='Course Name' />
            <br />
            <select style={{textAlign:'left'}} onBlur={onBlurHandle} className='fs-4 ' name="category" id="cars">
            <option value="Programming">Programming</option>
            <option value="Math">Math</option>
            <option value="English Spoken">English Spoken</option>
            <option value="Nothing">Nothing</option>
            </select>
            <br />
            <input onBlur={onBlurHandle} type="text" name='image' className='w-50 my-2 p-2' placeholder='Course Image Link' />
            <br />

            <textarea onBlur={onBlurHandle} name="details" placeholder='Course Details ' id="" className='w-50' cols="10" rows="5"></textarea>
            <br />
            <input onBlur={onBlurHandle} type="number" name='price' className='w-50 my-2 p-2' placeholder='Course Price' />
            <br />
            <input value="Add" type="submit" className='btn btn-success' />
        </form>
        </Container>
    );
};

export default AddCourse;