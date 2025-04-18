// Payment.js
import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import PaystackPop from '@paystack/inline-js';
import axios from "axios";
const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /* const handlePayment = async () => {
    setLoading(true);
    setError('');

    try {
      // Call your backend to initialize the transaction
      const response = await fetch('/initialize-transaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'customer@example.com',
          amount: '500000' // amount in kobo (e.g., 5000 NGN)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Transaction initialization failed');
      }

      // Extract the access_code from the response
      const { access_code } = data;

      // Use Paystack Popup to resume the transaction
      const paystack = new PaystackPop();
      paystack.resumeTransaction(access_code);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }; */

  const navigate = useNavigate();

  const handlePayment = async () => {
    console.log('💰 Payment started');
    setLoading(true);
    setError('');
  
    try {
      console.log('📡 Sending request to backend...');
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/initialize-transaction`, {
        email: 'customer@example.com',
        amount: '500000',
      });
  
      console.log('✅ Backend response:', response);
      const { access_code } = response.data;
      console.log('🔑 Access Code:', access_code);
  
      const paystack = new PaystackPop();
  
      // Show the payment modal and redirect after success
      paystack.newTransaction({
        key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY, // Your public key
        email: 'customer@example.com',
        amount: 500000,
        reference: access_code,
        onSuccess: (reference) => {
          console.log('🎉 Payment success:', reference);
          navigate('/payment-success'); // 👈 navigate to success page
        },
        onCancel: () => {
          console.log('❌ Payment canceled');
        },
      });
  
    } catch (err) {
      console.error('❌ Error occurred:', err);
      setError(err.response?.data?.message || 'Transaction initialization failed');
    } finally {
      setLoading(false);
      console.log('🛑 Payment finished');
    }
  };
  
  

  return (
    <div className='mt-[240px]'>
      <h2>Pay with Paystack</h2>
      {error && <p className='text-red-500'>Error: {error}</p>}
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default Payment;
