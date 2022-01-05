import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './EnrolledAllCourse.css'
const EnrolledAllCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/enroll')
      .then(res => {
        setCourses(res.data)
      })
  }, []);



  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Payment Status</th>

          </tr>
        </thead>
        <tbody>
          {
            courses.map((course, index) => <tr>
              <td>{index}</td>
              <td>{course.title}</td>
              <td>{course.owner}</td>
              <td>${course.price}</td>
              <td><Button variant={"success"} disabled>Paid</Button></td>
            </tr>)
          }

        </tbody>
      </Table>
    </div>
  );
};

export default EnrolledAllCourse;


