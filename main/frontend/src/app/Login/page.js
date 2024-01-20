// pages/Login.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../redux/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await dispatch(loginAsync({ email, password }));

      if (response.payload.token) {
        setMessage('Login successful!');
      } else {
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setMessage('Login failed. An error occurred.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {!isAuthenticated && (
        <form>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
