'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import '@styles/Auth/ForgotPassword.css'

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`If an account is associated with ${email}, you will receive an email with instructions to reset your password. Please check your spam folder if the email does not arrive.`);
    };

    return (
        <div className="forgot-password-p">
            <div className="forgot-password-container">
                <form className="form-forgot-password" onSubmit={handleSubmit}>
                    <div className="forgot-password-heading">
                        <h1>Reset Your Password</h1>
                    </div>
                    <div className="Email-p">
                        <input
                            type="email"
                            placeholder="Enter email"
                            required
                            autoComplete="off"
                            name="email"
                            className="email-holder-p"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="reset-button">
                        <button className="reset-btn" type="submit">Reset Password</button>
                    </div>
                    {message && <div className="message" style={{fontFamily:"Inter", fontSize:"16px", lineHeight:"150%"}}>{message}</div>}
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
