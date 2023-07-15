import React, { useState } from 'react';
import './Signup.css';
import s_img from '../../Assets/Imags/Foodian_logo.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false)


  const handleSignup = (e) => {
    e.preventDefault();
  
    // Perform form validation here
    // Ensure all required fields are filled and passwords match
  
    // Example API call using fetch
    fetch('http://localhost:5000/api/v1/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, mobile, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
      ; // Log the response data for debugging
  
        if (data.status === "success") {
          setShowError(false);
          setShowSuccess(true)
          console.log('Signup successful');
          // Redirect to success page or perform any other actions 
        } else {
          let errorMessage = '';
          if (data.errors && data.errors.length > 0) {
            // Extract the error message from the errors array
            errorMessage = data.errors[0].message;
          } else if (data._message) {
            // Extract the error message from the _message key
            errorMessage = data._message;
          } else if (data.message) {
            // Extract the error message from the message key
            errorMessage = data.message;
          } else {
            errorMessage = 'An error occurred during signup.';
          }
          setErrorMessage(errorMessage);
          setShowError(true);
          setTimeout(() => setShowError(false), 3000);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <section>
      <div className='login-page'>
        <div className='login-main'>
          <img src={s_img} alt='logo' className='login-i' />
          <h2 className='login-h'>Create Account</h2>
          {showError && <p className='error-message'>{errorMessage}</p>}
         
          {showSuccess && <p className='success-message'>Registration successful! You can now log in.</p>}
          <form className='Form' onSubmit={handleSignup}>
            <label>Name</label>
            <input
              className='login-ip'
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Mobile no (10 digits)</label>
            <input
              className='login-ip'
              type='text'
              pattern='[0-9]{10}' // Regex pattern to enforce 10 digits
              placeholder='Enter Mobile no'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              className='login-ip'
              type='email'
              placeholder='Enter Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              className='login-ip'
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Confirm Password</label>
            <input
              className='login-ip'
              type='password'
              placeholder='Re-enter password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button className='button1' type='submit'>
              Sign Up
            </button>
          </form>

          <h5>Already have an account</h5>
          <Link to="/login"><h6>Log In</h6></Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
