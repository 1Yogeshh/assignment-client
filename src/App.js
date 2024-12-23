import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/signup/Login';
import Register from './components/signup/Register';
import Verify from './components/signup/Verify';

// Helper function to check authentication
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists, false otherwise
};

// Protected Route Component
const ProtectedRoute = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? <Component {...rest} /> : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/verify" element={<Verify />} />

        {/* Protected Route */}
        <Route path="/dashboard" element={<ProtectedRoute element={Home} />} />
      </Routes>
    </Router>
  );
}

export default App;
