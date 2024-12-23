import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://assignment-server-zeta.vercel.app/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      window.location = '/dashboard';
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-5 border shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-5">Welcome back! Login Please</h2>
      <p className='mb-5 font-medium'>Enter Your Details</p>

      {/*email*/ }
      <p className='mb-2 font-medium'>Email Address</p>
      <input
        type="email"
        placeholder="Example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border font-medium rounded"
      />

      {/*password*/ }
      <p className='mb-2 font-medium'>Password</p>
      <input
        type="password"
        placeholder="Yogesh@123"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border font-medium rounded"
      />
      
      <button type="submit" className="w-full p-2 mt-2 bg-blue-500 text-white rounded font-medium">
        Login
      </button>

      <p className='flex justify-center items-center mt-5 mb-5 font-medium gap-1'>You have not account? <a href='/signup' className='text-blue-500 underline'>Register</a></p>


    </form>
  );
}

export default Login;
