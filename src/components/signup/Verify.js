import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Verify = () => {
  const [otp, setOtp] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://assignment-server-zeta.vercel.app/api/auth/verify-otp', { email, otp });
      alert(response.data.message);
      navigate('/'); // Redirect to login page or dashboard after successful verification
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border shadow-lg rounded">
      <h2 className='font-medium text-xl mb-2'>Verify Your Email</h2>
      <p className='font-medium'>Your email: <strong className='text-blue-500'>{email}</strong></p> {/* Display email */}
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <p className='font-medium mt-5 mb-2'>Enter Your OTP</p>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength="4"
          className="w-full p-2 mb-4 border font-medium rounded"
        />
        <button type="submit" className='bg-blue-500 font-medium text-white p-2 rounded mt-2'>Verify OTP</button>
      </form>
    </div>
  );
};

export default Verify;
