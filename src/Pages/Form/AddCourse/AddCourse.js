import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const AddCourse = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [thumb, setThumb] = useState(null);
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [video, setVideo] = useState('');
    const [language, setLanguage] = useState('');
    const [skill, setSkill] = useState('');
    const [instructor, setInstructor] = useState('');



    const addCourseHandle = e => {
        e.preventDefault();
        if (!thumb || !price || !title) {
            return
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('thumb', thumb);
        formData.append('price', price);
        formData.append('details', details);
        formData.append('video', video);
        formData.append('language', language);
        formData.append('skill', skill);
        formData.append('instructor', instructor);

        axios.post('http://localhost:5000/course', formData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Course Added');
                    e.target.reset();
                }
            });

    }
    return (
        <Container className='py-5'>
            <div className="heading mb-3">
                <h1 className='fs-3'>Add New Course Here </h1>
            </div>
            <Row>
                <Col lg='6'>

                    <Form onSubmit={addCourseHandle}>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Course Title</Form.Label>
                            <Form.Control onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter Course Title" required />
                        </Form.Group>

                        <Form.Select onChange={e => setCategory(e.target.value)} aria-label="Default select example" required>
                            <option>Select Course Category</option>
                            <option value="Programming">Programming</option>
                            <option value="Math">Math</option>
                            <option value="English Spoken">English Spoken</option>
                        </Form.Select>
                        <br />
                        <Form.Select onChange={e => setLanguage(e.target.value)} aria-label="Default select example" required>
                            <option>Select Course Language</option>
                            <option value="English">English</option>
                            <option value="Bangla">Bangla</option>
                        </Form.Select>
                        <br />
                        <Form.Select onChange={e => setSkill(e.target.value)} aria-label="Default select example" required>
                            <option>Select Skill Level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                        </Form.Select>
                        <br />
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Course Thumbnail</Form.Label>
                            <Form.Control type="file" onChange={e => setThumb(e.target.files[0])} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Course Price</Form.Label>
                            <Form.Control onChange={e => setPrice(e.target.value)} type="number" placeholder="Enter Course Price" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Course Details</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={e => setDetails(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Overview Video Link</Form.Label>
                            <Form.Control onChange={e => setVideo(e.target.value)} type="text" placeholder="Drop an over video link" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Instructor Name</Form.Label>
                            <Form.Control onChange={e => setInstructor(e.target.value)} type="text" placeholder="Instructor Name" required />
                        </Form.Group>
                        <Button type='submit'>Add Course</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddCourse;
