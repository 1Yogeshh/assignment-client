import React from 'react';

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    window.location.href = '/'; // Redirect to login
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border shadow-lg rounded bg-white">
      <h1 className="text-xl font-bold mb-4 text-center">Welcome to Your Dashboard!</h1>
      <p className="text-gray-700 mb-5 text-center">
        You have successfully logged in. Here you can explore features, manage your account, and access exclusive content tailored for you. 
      </p>
      <p className="text-gray-700 mb-5 text-center">
        Stay updated with the latest news, track your activities, and enjoy a seamless experience on our platform. If you need any assistance, feel free to reach out to our support team.
      </p>
      <p className="text-gray-700 mb-5 text-center">
        We are excited to have you on board and look forward to helping you achieve your goals.
      </p>
      <div className="text-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded w-full transition-colors"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
