import React, { useState } from 'react';
import '../App.css';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 6) {
      setOtp(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('An OTP has been sent to your email.');
    // Add your logic to send the OTP to the email
  };

  return (
    <div className="ForgottenPassword">
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a 6-digit OTP.</p>

      <form >
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        {/* <div className="form-group">
          <label>Enter 6-digit OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            maxLength="6"
            pattern="\d{6}"
            required
          />
        </div> */}

        <button onClick={handleSubmit} type="submit">Get OTP</button>

        <div className="form-group">
          <label>Enter 6-digit OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            maxLength="6"
            pattern="\d{6}"
            required
          />
        </div>

        <button type="Submit">Verify</button>
      </form>
    </div>
    </div>
  );
};

export default Forgot;