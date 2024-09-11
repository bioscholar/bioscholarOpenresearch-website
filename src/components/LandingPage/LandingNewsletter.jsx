"use client"

import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

// Firebase configuration for Realtime Database URL
const firebaseConfig = {
  apiKey: "AIzaSyDZRK3pQeYMQBx9yT4fPU_Lwjl8V67TtVs",
  authDomain: "bioscholar-auth.firebaseapp.com",
  databaseURL: "https://bioscholar-data-default-rtdb.firebaseio.com/", // Specify your database URL here
  projectId: "bioscholar-auth",
  storageBucket: "bioscholar-auth.appspot.com",
  messagingSenderId: "1015150112218",
  appId: "1:1015150112218:web:aa2751b9d78ea6ae0324e3",
  measurementId: "G-8LR2YCHQ7F"
};

// Initialize Firebase app and database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialize Realtime Database

export const LandingNewsletter = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email');
      return;
    }

    try {
      // Push the email to the Firebase Realtime Database
      const emailRef = ref(database, 'newsletter-emails'); // Use 'newsletter-emails' node
      await push(emailRef, {
        email: email,
        subscribedAt: new Date().toISOString(),
      });
      setSuccess(true);
      setError('');
      setEmail(''); // Clear the input after successful submission
    } catch (err) {
      setError('Error saving email. Please try again.');
      setSuccess(false);
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
            type='email'
            placeholder='Enter your email ID'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
        {success && <p>Thank you for subscribing!</p>}
        {error && <p className='error'>{error}</p>}
      </div>
    </div>
  );
};
