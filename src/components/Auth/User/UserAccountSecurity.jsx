'use client'
import React, { useState, useEffect } from 'react';
// import { sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';
// import { auth } from '@/firebase';
import '@styles/common/auth/user/UserAccountSetting.css';

const UserAccountSecurity = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setEmail(user.email);
    //         }
    //         setLoading(false);
    //     });

    //     return () => unsubscribe();
    // }, []);

    // const handlePasswordReset = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await sendPasswordResetEmail(auth, email);
    //         setPopupMessage('Password reset email sent!');
    //         setShowPopup(true);
    //         setTimeout(() => setShowPopup(false), 5000); // Hide the popup after 3 seconds
    //     } catch (error) {
    //         console.error('Error sending password reset email:', error);
    //         setPopupMessage('Failed to send password reset email. Please try again.');
    //         setShowPopup(true);
    //         setTimeout(() => setShowPopup(false), 5000); // Hide the popup after 3 seconds
    //     }
    // };

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="security-contents">
            {showPopup && (
                <div className="popup">
                    <span>{popupMessage}</span>
                    <button className="close-popup"
                    //  onClick={() => setShowPopup(false)}
                     >&#x1F5D9;</button>
                </div>
            )}
            <form className="security-form" 
            // onSubmit={handlePasswordReset}
            >
                <h2>Reset Password</h2>
                <p>A verification email will be sent to <strong>{email}</strong>. The update will be completed once you follow the instructions in that email. If you are unable to access your email, please contact support for help.</p>
                <div className="save-button">
                    <button className="change-password" type="submit">Reset Password</button>
                </div>
            </form>
        </div>
    );
};

export default UserAccountSecurity;
