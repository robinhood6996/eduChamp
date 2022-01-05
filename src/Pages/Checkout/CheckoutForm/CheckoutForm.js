import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useFirebase from '../../../Hooks/useFirebase';
import { CircularProgress } from '@mui/material';
import { Alert } from 'react-bootstrap';

const CheckoutForm = ({ course }) => {
  const { _id, title, price } = course;
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useFirebase();


  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const totalAmount = 500

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ price })
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
  }, [price])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }
    setProcessing(true)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      console.log(error);
      setError(error.message);
      setSuccess(true)
    }
    else {
      console.log(paymentMethod);
      setError('');
    }

    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email
          },
        },
      },
    );
    if (intentError) {
      setError(intentError.message);
    }
    else {
      console.log(paymentIntent);
      setError('');
      setProcessing(false)
      setSuccess(true)
      //   const payment = {
      //     amount: paymentIntent.amount,
      //     created: paymentIntent.created,
      //     last4: paymentMethod.card.last4,
      //     transaction: paymentIntent.client_secret.slice('_secret')[0]
      // }

    }


  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement className='mb-3'
          options={{
            style: {
              base: {
                fontSize: '20px',
                color: 'black',
                '::placeholder': {
                  color: 'black',
                },
                backgroundColor: 'white',
                padding: '15px 5px',
                lineHeight: '2'
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {processing ? <CircularProgress> </CircularProgress> : <button className='btn btn-success mb-3' type="submit" disabled={!stripe || success}>
          Pay Now
        </button>}
        {/* {
        success ? <button onClick={() => handleHome()} className='btn btn-warning ms-4'>Home</button> : <button onClick={() => handlePayLater()} className='btn btn-success ms-4'>Pay Later</button>
      } */}
        {
          success && !error ? <Alert sx={{ mt: 3 }} severity="success">Thank You For Your Payment!</Alert> : ''
        }
        {
          error && <Alert sx={{ mt: 3 }} severity="error">{error} — check it out!</Alert>
        }
      </form>
    </div>
  );
};

export default CheckoutForm;