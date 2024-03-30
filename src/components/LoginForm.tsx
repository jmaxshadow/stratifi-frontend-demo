import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext'; // Adjust the path as needed

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginButtonTest, setLoginButtonTest] = useState('Log In');
    const auth = useAuth();
    const navigate = useNavigate();
  
    const handleSubmit = (e: React.FormEvent) => {
      console.log('handleSubmit Clicked');
      setLoginButtonTest('Logging In...');
      e.preventDefault();
      auth.login(email, password);
      navigate('/clients'); // Navigate to the protected route after login
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" aria-label='Log In'>{loginButtonTest}</button>
      </form>
    );
  };
  
  export default LoginForm;