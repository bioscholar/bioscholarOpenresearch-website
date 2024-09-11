
'use client';
import '@styles/Auth/user/UserAccountSetting.css';
import React, { useState, useEffect } from 'react';
// import { auth, database, storage } from '@/firebase';
// import { ref as dbRef, update, get } from 'firebase/database';
// import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { useRouter } from 'next/navigation';
// import { signOut } from 'firebase/auth';
import { FaPen } from 'react-icons/fa';
import Image from 'next/image';
// import Default from "@public/assets/Images/comman/header/default.svg"

export default function UserAccountSetting(
    // { user = {} }
) {
    // const [loading, setLoading] = useState(true);
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState(user.lastName || '');
    // const [email, setEmail] = useState(user.email || '');
    // const [phone, setPhone] = useState(user.phone || '');
    // const [country, setCountry] = useState(user.country || '');
    // const [profilePic, setProfilePic] = useState(null);
    // const [profilePicURL, setProfilePicURL] = useState(user.profilePicURL || '');
    // const [showPopup, setShowPopup] = useState(false);
    // const [popupMessage, setPopupMessage] = useState('');

    // const router = useRouter();

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const user = auth.currentUser;
    //             if (user) {
    //                 const userRef = dbRef(database, 'usersData/' + user.uid);
    //                 const snapshot = await get(userRef);
    //                 if (snapshot.exists()) {
    //                     const data = snapshot.val();
    //                     const emailFirstPart = data.email.split('@')[0];
    //                     setFirstName(data.firstName || emailFirstPart || '');
    //                     setLastName(data.lastName || '');
    //                     setEmail(data.email || '');
    //                     setPhone(data.phone || '');
    //                     setCountry(data.country || '');
    //                     setProfilePicURL(data.profilePicURL || '');
    //                 }
    //             }
    //             setLoading(false);
    //         } catch (error) {
    //             console.error("Error fetching user data:", error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchUserData();
    // }, []);

    // const handleUpdate = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     let newProfilePicURL = profilePicURL;

    //     if (profilePic) {
    //         try {
    //             const storageReference = storageRef(storage, `profilePictures/${auth.currentUser.uid}/${profilePic.name}`);
    //             await uploadBytes(storageReference, profilePic);
    //             newProfilePicURL = await getDownloadURL(storageReference);
    //         } catch (error) {
    //             console.error("Error uploading profile picture:", error);
    //             setPopupMessage('Error uploading profile picture');
    //             setShowPopup(true);
    //             setTimeout(() => setShowPopup(false), 3000);
    //             setLoading(false);
    //             return;
    //         }
    //     }

    //     const updates = {
    //         firstName,
    //         lastName,
    //         email,
    //         phone,
    //         country,
    //         profilePicURL: newProfilePicURL,
    //     };

    //     const userRef = dbRef(database, 'usersData/' + auth.currentUser.uid);
    //     update(userRef, updates)
    //         .then(() => {
    //             setPopupMessage('Profile updated successfully');
    //             setShowPopup(true);
    //             setTimeout(() => setShowPopup(false), 3000);
    //             setProfilePicURL(newProfilePicURL);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.error("Error updating profile:", error);
    //             setPopupMessage('Error updating profile');
    //             setShowPopup(true);
    //             setTimeout(() => setShowPopup(false), 3000);
    //             setLoading(false);
    //         });
    // };

    // const handleProfilePicChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         setProfilePic(file);
    //         const previewURL = URL.createObjectURL(file);
    //         setProfilePicURL(previewURL);
    //     }
    // };

    // const handleSignOut = () => {
    //     signOut(auth).then(() => {
    //         router.push('/login');
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // };

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="profile-contents">
            {showPopup && (
                <div className="popup">
                    <span>{popupMessage}</span>
                    <button className="close-popup"
                    //  onClick={() => setShowPopup(false)}
                     >&#x1F5D9;</button>
                </div>
            )}
            <form className="profile-form" onSubmit={handleUpdate}>
                <h2>Profile</h2>
                <div className="profile-pic-wrapper">
                    {/* <Image src={profilePicURL || Default} alt="Profile" className="profile-pic" width={100} height={100}/> */}
                    <label htmlFor="profilePic" className="profile-pic-upload">
                        <FaPen className='profile-pen'/>
                        <p className='choose-pic'>Choose photo</p>
                        <input
                            type="file"
                            id="profilePic"
                            // onChange={handleProfilePicChange}
                            accept="image/*"
                        />
                    </label>
                </div>
                <div className="Fname">
                    <label htmlFor="fname">First name:</label>
                    <input
                        type="text"
                        placeholder="Enter first name"
                        value={firstName}
                        // onChange={(e) => setFirstName(e.target.value)}
                        className="fname"
                        autoComplete="off"
                    />
                </div>
                <div className="Lname">
                    <label htmlFor="lname">Last name:</label>
                    <input
                        type="text"
                        placeholder="Enter last name"
                        value={lastName}
                        // onChange={(e) => setLastName(e.target.value)}
                        className="lname"
                        autoComplete="off"
                    />
                </div>
                <div className="Pemail">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        placeholder="Enter email"
                        value={email}
                        className="email"
                        autoComplete="off"
                        disabled
                    />
                </div>
                <div className="Phone">
                    <label htmlFor="phno">Phone number:</label>
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        value={phone}
                        // onChange={(e) => setPhone(e.target.value)}
                        className="phno"
                        autoComplete="off"
                    />
                </div>
                <div className="Country">
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        placeholder="Enter country"
                        value={country}
                        // onChange={(e) => setCountry(e.target.value)}
                        className="country"
                        autoComplete="off"
                    />
                </div>
                <div className="save-button">
                    <button className="save-changes" type="submit" disabled={loading}>Save</button>
                </div>
            </form>
        </div>
    );
}
