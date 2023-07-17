import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import l_img from '../../Assets/Imags/Foodian_logo.png';
import { UserContext } from '../../Hooks/userContext';
import { Link } from 'react-router-dom';
import { backendUrl } from '../../utils1/Url';
import { BallTriangle, Oval } from 'react-loader-spinner';
const Login = () => {
  const { loginUser } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Calling the backend
    // Pass the 'email' and 'password' values to your backend API
     setLoading(true)
    // Example API call using fetch
    fetch(`${backendUrl}/api/v1/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        loginUser(data.email);
        
        if (data.status === 'success') {
          setShowError(false);
          console.log('Login successful');
          // Navigate to the user page or perform any other actions
          setLoading(false)
          if (data.role === 'user') {
            navigate('/login/user');
          } else if (data.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/delivery');
          }
          // Replace '/user' with the actual URL of your user page
        } else {
          setErrorMessage(data.message);
          setShowError(true);
          // Hide the error message after 3 seconds
          setTimeout(() => setShowError(false), 3000);
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error('Error:', error);
      });
  };

  return (
    <section>
      <div className='login-page'>
        <div className='login-main'>
          <img src={l_img} alt='logo' className='login-i' />
          <h2 className='login-h'>Welcome Back</h2>
          {showError && <p className='error-message'>{errorMessage}</p>}
          {loading ? <BallTriangle height={80} width={80} color="blue" />: ''}
          <form className='Form' onSubmit={handleLogin}>
            <label>Email</label>
            <input
              required
              className='login-ip'
              type='email'
              placeholder='Enter Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
            required
              className='login-ip'
              type='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='button1' type='submit'>
              Log In
            </button>
           
          </form>
          <h5>Don't have an account</h5>
          <Link to="/signup"><h6>Sign Up</h6> </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
