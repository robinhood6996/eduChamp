import React, { useEffect, useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { id } = useParams();
    const [course, setCourse] = useState({});
    const stripePromise = loadStripe('pk_test_51JvulXJvV51rbiXLiT7KqyFzzGbKHpTris3hucBrpyZHwAkwc6igpO0DQJV5W0jMhZDZT8D8Ty9Y3QLwpJVgj4GA00sqHaRd0p');

    useEffect(() => {
        fetch(`http://localhost:5000/course/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [id]);
    return (

        <div>
            <Container>
                <h2>Please Pay For: {course.title}</h2>
                <h4>pay: ${course.price}</h4>
                {
                    course?.price && <Elements stripe={stripePromise}>
                        <CheckoutForm course={course}></CheckoutForm>
                    </Elements>
                }
            </Container>
        </div>
    );
};

export default CheckOut;