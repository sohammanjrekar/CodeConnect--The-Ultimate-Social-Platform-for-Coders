"use client"
// pages/signup.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupAsync } from '../../redux/Slices/authSlice';

const Signup = () => {
  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      const signupResult = await dispatch(signupAsync({ email, name, password1, password2 }));
      setMessage(signupResult.error || 'Signup successful!');
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('Signup failed. An error occurred.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {!isAuthenticated ? <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} required />

        <label>Confirm Password:</label>
        <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} required />

        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form> : <div>Thanks</div>
      }
      {message && <p>{message}</p>}
      <div>
      <p>Token: {token}</p>
      <p>Is Authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
      <p>Status: {status}</p>
      {error && <p>Error: {error}</p>}
      {/* Render other parts of your component */}
    </div>
    </div>
  );
};

export default Signup;
