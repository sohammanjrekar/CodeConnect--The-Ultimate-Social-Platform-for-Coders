"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupAsync } from '../../redux/Slices/authSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Signup = () => {
  const dispatch = useDispatch();
  const { token, userId, isAuthenticated, status, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      // Dispatch signupAsync action with form data and token in headers
      await dispatch(signupAsync({
        email,
        username,
        password,
        password2: confirmPassword,
        token: `Bearer ${token}` // Include the token in the request headers
      }));
      setMessage('Signup successful!');
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('Signup failed. An error occurred.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
        <div className="flex flex-col items-center w-full pt-2 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
              <img
                src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                alt="Signup Image"
                className="btn-"
              />
            </div>
          </div>
          <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                Sign up for an account
              </p>
              <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                    Username
                  </p>
                  <input
                    placeholder="John"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                    Email
                  </p>
                  <input
                    placeholder="123@ex.com"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                    Password
                  </p>
                  <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                    Confirm Password
                  </p>
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <button
                    className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                    type="button"
                    onClick={handleSignup}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {message && <p>{message}</p>}
      <div>
        <p>User ID: {userId}</p>
        <p>Token: {token}</p>
        <p>Is Authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
        <p>Status: {status}</p>
        {error && <p>Error: {error}</p>}
        {message && <p>{message}</p>}
      </div>
      <Footer />
    </>
  );
};

export default Signup;
