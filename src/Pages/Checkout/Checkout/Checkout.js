import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Container } from 'react-bootstrap';
const CheckOut = () => {
    const stripePromise = loadStripe('pk_test_51JvulXJvV51rbiXLiT7KqyFzzGbKHpTris3hucBrpyZHwAkwc6igpO0DQJV5W0jMhZDZT8D8Ty9Y3QLwpJVgj4GA00sqHaRd0p');
    return (
        <div>
            <Container>
                <Elements stripe={stripePromise}>
                    <CheckoutForm ></CheckoutForm>
                </Elements>
            </Container>
        </div>
    );
};

export default CheckOut;