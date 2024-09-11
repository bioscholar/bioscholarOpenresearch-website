'use client'; // Ensure this is a client-side component

import React, { useState } from 'react';

export const LandingNewsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter an email address.");
      return;
    }

    try {
      // Send the email to Firebase Realtime Database
      const response = await fetch('https://bioscholar-data-default-rtdb.firebaseio.com/newsletterSubscriptions.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing to our newsletter!");
        setEmail(''); // Clear the input field
      } else {
        setMessage("Error subscribing. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setMessage("Error submitting the form. Please try again later.");
    }
  };

  return (
    <div className='landing-newsletter'>
      <div className='landing-newsletter-container'>
        <div className='landing-newsletter-heading'>
          <p>Subscribe to our newsletter</p>
          <h3>Stay ahead of the curve with regular updates</h3>
        </div>
        <form className='landing-newsletter-input' onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder='Enter your email ID'
            value={email}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>} {/* Display success/error message */}
      </div>
    </div>
  );
};

export default LandingNewsletter;
