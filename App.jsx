import { useState } from 'react';
import './App.css';
import Employee from './employee';

export default function App() {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    return password.length >= 8 && hasUppercase && hasSpecialChar;
  };

  const handleSignup = () => {
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return setError('All fields are required.');
    }

    if (!validatePassword(password)) {
      return setError(
        'Password must be at least 8 characters and include one uppercase letter and one special character.'
      );
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match.');
    }

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return setError('User already exists.');
    }

    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setIsSignup(false);
    setError('');
  };

  const handleLogin = () => {
    const { email, password } = formData;

    if (!email || !password) {
      return setError('Email and password are required.');
    }

    const existingUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!existingUser) {
      return setError('Invalid credentials.');
    }

    setLoggedInUser(existingUser);
    setError('');
  };

  return (
    <div className="auth-container">
      {loggedInUser ? (
        <Employee />
      ) : (
        <div className="form-card">
          <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
          {error && <div className="error">{error}</div>}
          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {isSignup && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          )}
          <button onClick={isSignup ? handleSignup : handleLogin}>
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
          <p>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span className="toggle" onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
