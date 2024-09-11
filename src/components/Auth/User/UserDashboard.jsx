'use client';
import React from 'react';
import '@styles/Auth/user/UserDashboard.css';
import Link from 'next/link';
import Image from 'next/image';
// import notification from '@public/assets/Images/dashboard/notification.svg';
// import security from '@public/assets/Images/dashboard/security.svg';
// import account from '@public/assets/Images/dashboard/account.svg';
// import logout from '@public/assets/Images/dashboard/logout.svg';
// import { UserAuth } from "@context/AuthContext";
import { useRouter } from 'next/navigation';


export default function UserDashboard(props) {
    // const { user, logOut, loading } = UserAuth();
    // const router = useRouter();

    // const handleLogOut = async () => {
    //     try {
    //       await logOut();
    //       router.push("/");
    //       router.reload();
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    return (
       
            <div className="user-dashboard">
                <div className="user-dashboard-contents">
                    <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                        <Link className="profile" href="/account-settings" style={{backgroundColor:props.profile}}>
                            {/* <Image src={account} height={21} alt="Profile" /> */}
                            <p>Profile</p>
                        </Link>
                        <Link className="security" href="/account-security" style={{backgroundColor:props.security}}>
                            {/* <Image src={security} height={21} alt="Security" /> */}
                            <p>Security</p>
                        </Link>
                        {/* <Link className="notification" href="/account-notification">
                            <Image src={notification} height={21} alt="Notification" />
                            <p>Notification</p>
                        </Link> */}
                    </div>
                    <div className="log-out" 
                    // onClick={handleLogOut}
                    >
                        <Image src={logout} height={21} alt="Log out" />
                        <p>Log out</p>
                    </div>
                </div>
            </div>
        
    );
}
