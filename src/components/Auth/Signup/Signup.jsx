// 'use client';
// import React, { useState } from "react";
// import '@styles/Auth/Signup/Signup.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import Link from "next/link";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import validator from 'email-validator';
// import { useRouter } from 'next/navigation';

// const Signup = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [generalError, setGeneralError] = useState('');

//     const router = useRouter();

//     const validateEmail = (value) => {
//         if (!validator.validate(value)) {
//             return "Please enter a valid email address.";
//         }

//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailRegex.test(value)) {
//             return "Please enter a proper email address.";
//         }

//         return '';
//     };

//     const validatePassword = (value) => {
//         if (value.length < 8) {
//             return "Password should be at least 8 characters long.";
//         }
//         return '';
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setGeneralError('');
//         setEmailError('');
//         setPasswordError('');

//         let emailErrorMessage = validateEmail(email);
//         let passwordErrorMessage = validatePassword(password);

//         if (emailErrorMessage || passwordErrorMessage) {
//             setEmailError(emailErrorMessage);
//             setPasswordError(passwordErrorMessage);
//             return;
//         }

//         // Here you can handle the actual sign-up logic (e.g., API call)
//         console.log("Form submitted:", { email, password });
//         router.back(); // Redirecting after form submission
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div className="signup">
//             <div className="signup-container">
//                 <div className="signup-heading">
//                     <h1>Create Your Account</h1>
//                     {generalError && <p style={{ color: "red", paddingBottom: "6px", textAlign: "center", fontSize: "13px", fontFamily: "Inter" }}>{generalError}</p>}
//                 </div>
//                 <form className="form" onSubmit={handleSubmit}>
//                     <Box component="div" className="email" noValidate autoComplete="off">
//                         <TextField
//                             id="outlined-email"
//                             label="Email"
//                             variant="outlined"
//                             className="custom-text-field"
//                             error={!!emailError}
//                             helperText={emailError}
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </Box>
//                     <Box component="div" className="password" noValidate autoComplete="off">
//                         <TextField
//                             id="outlined-password"
//                             label="Password"
//                             variant="outlined"
//                             type={showPassword ? "text" : "password"}
//                             className="custom-text-field"
//                             error={!!passwordError}
//                             helperText={passwordError}
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             InputProps={{
//                                 endAdornment: (
//                                     <span className="eye" onClick={togglePasswordVisibility}>
//                                         <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                                     </span>
//                                 ),
//                             }}
//                         />
//                     </Box>
//                     <div className="signup-button">
//                         <button className="signup-btn" type="submit">Sign Up</button>
//                     </div>
//                     <div className="google-signin">
//                         <button type="button" className="Signin-with-google-btn">Signin with Google</button>
//                     </div>
//                     <div className="signup-terms-content">
//                         <p className="signup-terms">
//                             By signing up, you agree to our <Link href="/terms-of-service" className="underline">Terms of Services</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
//                         </p>
//                         <p className="signup-account">
//                             Already have an account? <Link href="/signin" className="underline">Signin</Link>
//                         </p>
//                     </div>

//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signup;

'use client';
import React, { useState } from "react";
import '@styles/Auth/Signup/Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import validator from 'email-validator';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [institution, setInstitution] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const router = useRouter();

    const validateEmail = (value) => {
        if (!validator.validate(value)) {
            return "Please enter a valid email address.";
        }
        return '';
    };

    const validatePassword = (value) => {
        if (value.length < 8) {
            return "Password should be at least 8 characters long.";
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setGeneralError('');
        setEmailError('');
        setPasswordError('');

        let emailErrorMessage = validateEmail(email);
        let passwordErrorMessage = validatePassword(password);

        if (emailErrorMessage || passwordErrorMessage) {
            setEmailError(emailErrorMessage);
            setPasswordError(passwordErrorMessage);
            return;
        }

        console.log("Form submitted:", { firstName, lastName, institution, city, state, country, email, password });
        router.back();
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <div className="signup-heading">
                    <h1>Create Your Account</h1>
                    {generalError && <p style={{ color: "red", paddingBottom: "6px", textAlign: "center", fontSize: "13px", fontFamily: "Inter" }}>{generalError}</p>}
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <Box component="div" className="firstname" noValidate autoComplete="off">
                        <TextField
                            id="outlined-firstname"
                            label="First Name"
                            variant="outlined"
                            className="custom-text-field"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Box>
                    <Box component="div" className="lastname" noValidate autoComplete="off">
                        <TextField
                            id="outlined-lastname"
                            label="Last Name"
                            variant="outlined"
                            className="custom-text-field"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Box>
                    <Box component="div" className="institution" noValidate autoComplete="off">
                        <TextField
                            id="outlined-institution"
                            label="Institution"
                            variant="outlined"
                            className="custom-text-field"
                            value={institution}
                            onChange={(e) => setInstitution(e.target.value)}
                        />
                    </Box>
                    <Box component="div" className="city" noValidate autoComplete="off">
                        <TextField
                            id="outlined-city"
                            label="City"
                            variant="outlined"
                            className="custom-text-field"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Box>
                    <Box component="div" className="state" noValidate autoComplete="off">
                        <TextField
                            id="outlined-state"
                            label="State"
                            variant="outlined"
                            className="custom-text-field"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </Box>
                    <Box component="div" className="country" noValidate autoComplete="off">
                        <TextField
                            id="outlined-country"
                            label="Country"
                            variant="outlined"
                            className="custom-text-field"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </Box>
                    <Box component="div" className="email" noValidate autoComplete="off">
                        <TextField
                            id="outlined-email"
                            label="Email"
                            variant="outlined"
                            className="custom-text-field"
                            error={!!emailError}
                            helperText={emailError}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box component="div" className="password" noValidate autoComplete="off">
                        <TextField
                            id="outlined-password"
                            label="Password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            className="custom-text-field"
                            error={!!passwordError}
                            helperText={passwordError}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <span className="eye" onClick={togglePasswordVisibility}>
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </span>
                                ),
                            }}
                        />
                    </Box>
                    <div className="signup-button">
                        <button className="signup-btn" type="submit">Sign Up</button>
                    </div>
                    <div className="google-signin">
                        <button type="button" className="Signin-with-google-btn">Signin with Google</button>
                    </div>
                    <div className="signup-terms-content">
                        <p className="signup-terms">
                            By signing up, you agree to our <Link href="/terms-of-service" className="underline">Terms of Services</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
                        </p>
                        <p className="signup-account">
                            Already have an account? <Link href="/signin" className="underline">Signin</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
