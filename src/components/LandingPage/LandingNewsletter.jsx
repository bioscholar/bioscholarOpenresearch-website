// "use client"

// import React, { useState } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, push } from 'firebase/database';

// // Firebase configuration for Realtime Database URL
// const firebaseConfig = {
//   apiKey: "AIzaSyDZRK3pQeYMQBx9yT4fPU_Lwjl8V67TtVs",
//   authDomain: "bioscholar-auth.firebaseapp.com",
//   databaseURL: "https://bioscholar-data-default-rtdb.firebaseio.com/", // Specify your database URL here
//   projectId: "bioscholar-auth",
//   storageBucket: "bioscholar-auth.appspot.com",
//   messagingSenderId: "1015150112218",
//   appId: "1:1015150112218:web:aa2751b9d78ea6ae0324e3",
//   measurementId: "G-8LR2YCHQ7F"
// };

// // Initialize Firebase app and database
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app); // Initialize Realtime Database

// export const LandingNewsletter = () => {
//   const [email, setEmail] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) {
//       setError('Please enter a valid email');
//       return;
//     }

//     try {
//       // Push the email to the Firebase Realtime Database
//       const emailRef = ref(database, 'newsletter-emails'); // Use 'newsletter-emails' node
//       await push(emailRef, {
//         email: email,
//         subscribedAt: new Date().toISOString(),
//       });
//       setSuccess(true);
//       setError('');
//       setEmail(''); // Clear the input after successful submission
//     } catch (err) {
//       setError('Error saving email. Please try again.');
//       setSuccess(false);
//     }
//   };

//   return (
//     <div className='landing-newsletter'>
//       <div className='landing-newsletter-container'>
//         <div className='landing-newsletter-heading'>
//           <p>Subscribe to our newsletter</p>
//           <h3>Stay ahead of the curve with regular updates</h3>
//         </div>
//         <form className='landing-newsletter-input' onSubmit={handleSubmit}>
//           <input
//             type='email'
//             placeholder='Enter your email ID'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button type='submit'>Submit</button>
//         </form>
//         {success && <p>Thank you for subscribing!</p>}
//         {error && <p className='error'>{error}</p>}
//       </div>
//     </div>
//   );
// };

"use client"

import React, { useState, useEffect, useRef } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

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

// Initialize Firebase app and database if not already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const database = getDatabase(app); // Initialize Realtime Database

export const LandingNewsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const popupRef = useRef(null); // To detect clicks outside of the popup

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter an email address.");
      setShowPopup(true);
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

    // Show the popup on submit
    setShowPopup(true);
  };

  // Automatically hide the popup after 8 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 8000);

      return () => clearTimeout(timer); // Cleanup timer when component unmounts or popup is dismissed
    }
  }, [showPopup]);

  // Close popup when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  // Close popup manually when clicking the close button
  const handleClosePopup = () => {
    setShowPopup(false);
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
        {showPopup && (
          <div className='popup' style={popupStyle} ref={popupRef}>
            <button style={closeButtonStyle} onClick={handleClosePopup}>✖</button>
            <p style={{fontSize:"14px",fontFamily:"var(--p-font)"}}>{message}</p>
          </div>
        )} {/* Popup notification */}
      </div>
    </div>
  );
};

// Inline styles for popup
const popupStyle = {
  position: 'fixed',
  top: '20px',
  left: '20px',
  padding: '8px 14px',
  backgroundColor: '#4c4c4c',
  color: 'white',
  borderRadius: '8px',
  zIndex: '1000',
  width: '300px',
  display: 'flex',
  justifyContent: 'space-between',
  gap:'1rem',
  alignItems: 'center',
};

// Inline styles for close button
const closeButtonStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  border: 'none',
  fontSize: '18px',
  cursor: 'pointer',
  marginLeft: '10px',
};

export default LandingNewsletter;
