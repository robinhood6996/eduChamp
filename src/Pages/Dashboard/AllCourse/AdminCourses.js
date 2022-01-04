import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './AllCourse.css';


const AdminCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/course')
            .then(res => {
                setCourses(res.data)
            })
    }, []);


    const deleteCourseHandle = (id) => {
        const confirm = window.confirm('Are you sure you want to delete ? ');
        if (confirm) {
            const url = `http://localhost:5000/course/${id}`
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount) {
                        const allCourses = courses;
                        const restCourses = allCourses.filter(course => course._id !== id);
                        setCourses(restCourses);
                        alert('Course Deleted');
                    }
                })
        }
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Instructor</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map((course, index) => <tr>
                            <td>{index}</td>
                            <td>{course.title}</td>
                            <td>{course.category}</td>
                            <td>{course.instructor}</td>
                            <td><Button variant={"warning"}>Edit</Button> || <Button variant={"danger"} onClick={() => deleteCourseHandle(course._id)}>Delete</Button></td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AdminCourses;