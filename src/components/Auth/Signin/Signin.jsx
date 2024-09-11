'use client';
import React, { useState } from "react";
import '@styles/Auth/Signin/Signin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesome for icons
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importing the eye and eye slash icons
import Link from "next/link"; // Importing Link from Next.js for navigation
import { useRouter } from 'next/navigation'; // Importing useRouter for navigation
import Box from '@mui/material/Box'; // Importing Box component from Material UI
import TextField from '@mui/material/TextField'; // Importing TextField component from Material UI

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');
    
    const router = useRouter();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(''); // Clear email error on change
        setGeneralError(''); // Clear general error on change
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(''); // Clear password error on change
        setGeneralError(''); // Clear general error on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setGeneralError('');
        setEmailError('');
        setPasswordError('');
        let valid = true;

        if (!email || !validateEmail(email)) {
            setEmailError('Invalid email address');
            valid = false;
        }

        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        }

        if (!valid) {
            return;
        }

        // You can handle further form submission logic here
        console.log("Form submitted:", { email, password });

        // Example navigation after form submission
        router.push('/');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="Signin">
            <div className="Signin-container">
                <div className="Signin-heading">
                    <h1>Signin</h1>
                    {generalError && <div className="error-message" style={{ paddingTop: "6px" }}>{generalError}</div>}
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <Box component="div" noValidate autoComplete="off" className="email">
                        <TextField
                            id="outlined-email"
                            label="Email"
                            variant="outlined"
                            className="custom-text-field"
                            error={!!emailError}
                            helperText={emailError}
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Box>

                    <Box component="div" noValidate autoComplete="off" className="password">
                        <TextField
                            id="outlined-password"
                            label="Password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            className="custom-text-field"
                            error={!!passwordError}
                            helperText={passwordError}
                            value={password}
                            onChange={handlePasswordChange}
                            InputProps={{
                                endAdornment: (
                                    <span className="eye" onClick={togglePasswordVisibility}>
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </span>
                                ),
                            }}
                        />
                        <div className="forgot-password">
                            <Link href="/forgot-password">Forgot Password?</Link>
                        </div>
                    </Box>

                    <div className="Signin-button">
                        <button className="Signin-btn" type="submit">Signin</button>
                    </div>

                    <div className="google-signin">
                        <button type="button" className="Signin-with-google-btn">Signin with Google</button>
                        <p >Don't have an account? <Link href="/signup">Sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;
