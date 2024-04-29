"use client"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, loginAsync } from '@/redux/Slices/authSlice'; // Import setUser action creator

import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function () {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize useRouter inside the component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const loginStatus = useSelector((state) => state.auth.status);

  const handleLogin = async () => {
    try {
      setMessage('');
      console.log('Email:', email); // Log email
      console.log('Password:', password); // Log password
  
      const resultAction = await dispatch(loginAsync({ email, password }));
  
      if (loginAsync.rejected.match(resultAction)) {
        setMessage('Login failed. An error occurred.');
        return;
      }
  
      const { payload } = resultAction;
  
      const userResponse = await fetch(`http://127.0.0.1:8000/account/users/${payload.userId}`);
      const userData = await userResponse.json();
      console.log('User Data:', userData);
  
      // Dispatch setUser action to save user data in the store
      dispatch(setUser({ user: userData }));
      console.log('User data stored in the Redux store.');
  
      router.push('/'); // Redirect to '/' after successful login
      console.log('Redirected to the home page.');
    } catch (error) {
      setMessage('Login failed. An error occurred.');
      console.error('Error in handleLogin:', error);
    }
  };
  

  return (
    <>
      <Navbar />
      <div className='py-36 my-36'>
        <div className="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full mx-auto xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8">
          <div className="text-center w-full font-bold text-3xl text-gray-600 p-4">
            LOGIN
          </div>
          <div className="w-full bg-gray-200 my-3" style={{ height: '1px' }}></div>
          <form>
            <div className="flex flex-col gap-4 px-0 py-4">
              <div>
                <label className="text-gray-700">Email address</label>
                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  placeholder="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-700">Password</label>
                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-row gap-2">
                <button
                  className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-0 flex flex-row justify-center items-center gap-1"
                  type="button"
                  onClick={handleLogin}
                  disabled={loginStatus === 'loading'}
                >
                  Login
                </button>
                <button className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-2 flex flex-row justify-center items-center gap-1">
                  Sign-up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {message && <p>{message}</p>}
      <Footer />
    </>
  );
};
