import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import SingleCourse from './SingleCourse';
const UserCourses = () => {
    const [courses, setCourses] = useState([]);
    const { user } = useFirebase();
    const email = user.email;

    useEffect(() => {
        axios.get(`http://localhost:5000/enroll?email=${email}`)
            .then(res => {
                setCourses(res.data);
            })
    }, [email])

    return (
        <div>

            <div className="heading mb-5">
                <h1>All Enrolled Courses </h1>
            </div>
            <div className="container">
                {
                    courses.map(course => <SingleCourse course={course} />)
                }

            </div>
        </div>
    );
};

export default UserCourses;