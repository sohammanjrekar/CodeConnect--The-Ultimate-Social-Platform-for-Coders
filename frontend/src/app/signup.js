import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './authSlice';

const Page = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');

  const Signup = () => {
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
      {!isAuthenticated ?
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="password1">Password:</label>
          <input type="password" id="password1" value={password1} onChange={(e) => setPassword1(e.target.value)} required />

          <label htmlFor="password2">Confirm Password:</label>
          <input type="password" id="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} required />

          <button className='btn' type="button" onClick={handleSignup}>
            Signup
          </button>
        </form>
        : <div>Thanks for signing up!</div>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Page;

