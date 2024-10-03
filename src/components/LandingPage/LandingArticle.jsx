'use client'
import React, {useState, useRef, useEffect} from 'react';
import ArticleData from '@data/article/ArticleData';
import Link from 'next/link';

export const LandingArticle = () => {
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
    <div className='landing-article'>
        <div className='landing-article-whole-container'>
        <div className='landing-article-container'>
            <div className='landing-article-heading'>
                <h2>Recent Articles</h2>
            </div>
            <div className='landing-article-contents'>
            {Array.from({ length: 5 }, (_, i) => (
  ArticleData.map((item, index) => (
    <Link href={`/articles/${item.id}`} className='landing-article-box' key={`${index}-${i}`}>
      <h2>{item.title}</h2>
      <span>{item.authors}</span>
    </Link>
  ))
))}

            </div>
        </div>
        <div className='landing-sidebar'>
            <div className='landing-sidebar-container'>

                <div className='landing-sidebar-email'>
                    <h3>Sign up for email alerts  </h3>
                    <p>Enter your email to receive alerts when new articles
                    and issues are published.</p>
                    <form className='landing-sidebar-input' onSubmit={handleSubmit}>
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

                <div className='landing-sidebar-content'>
                    <p>Join our Community</p>
                    <p>Partner with us</p>
                </div>
                <div className='landing-sidebar-content'>
                    <h4>Stay Connected</h4>
                    <span>Follow us on Twitter</span>
                </div>
                <div className='landing-sidebar-content'>
                    <h4>We publish on following subject titles</h4>
                    <p>Algal Technology</p>
                    <p>Agriculture & Aquaculture</p>
                    <p>Biochemistry & Bioscience</p>
                    <p>Biomedical Science</p>
                    <p>Bioprocess & Bioseparation</p>
                    <p>Food Science & Technology</p>
                    <p>Immunology, Immunotechnology and Inflammation</p>
                    <p>Molecular Biology</p>
                    <p>Nanoscience & Nanobiotechnology</p>
                    <p>Nutraceuticals & Nutrition Science</p>
                    <p>Cancer Biology</p>
                </div>

            </div>
        </div>
        </div>
    </div>
  )
}

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
  