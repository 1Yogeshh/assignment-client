import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ name: '', username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const Navigate =useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      setMessage(res.data.message);
      Navigate('/verify',{ state: { email: formData.email } })
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border shadow-lg rounded">

      <h1 className='font-medium mb-5'>Welocome! Signup</h1>

      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center '>

        <p className='w-full font-medium mb-2'>Name</p>
        <input name="name" onChange={handleChange} placeholder="Name" required className="w-full p-2 mb-4 border font-medium rounded" />

        <p className='w-full font-medium mb-2'>Username</p>
        <input name="username" onChange={handleChange} placeholder="Username" required className="w-full p-2 mb-4 border font-medium rounded" />

        <p className='w-full font-medium mb-2'>Email Address</p>
        <input name="email" onChange={handleChange} placeholder="Email" required className="w-full p-2 mb-4 border font-medium rounded" />

        <p className='w-full font-medium mb-2'>Password</p>
        <input type="password" name="password" onChange={handleChange} placeholder="Password" required className="w-full p-2 mb-4 border font-medium rounded" />

        <button type="submit" className='bg-blue-500 text-white font-medium w-full p-2 rounded mt-2'>Signup</button>

        <p className='flex justify-center items-center mt-5 mb-5 font-medium gap-1'>You have not account? <a href='/' className='text-blue-500 underline'>Signin</a></p>

      </form>

      <p>{message}</p>

    </div>
  );
}

export default Register;

