// 'use client'
// import React, { useState, useEffect } from 'react';
// import '@styles/navbar/Navbar.css';
// import Image from 'next/image';
// import Logo from '@public/images/navbar/bioscholar.png';
// import hamburger from '@public/images/navbar/hamburger.png';
// import close from '@public/images/navbar/close.png';
// import search from '@public/images/navbar/search.svg';
// import arrow from '@public/images/navbar/arrow.svg';
// import account from '@public/images/navbar/account.svg'
// import NavbarData from '@data/navbar/NavbarData';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import {useRouter} from 'next/navigation';
// import { UserAuth } from '@context/AuthContext';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeAccordion, setActiveAccordion] = useState(null); // For managing open/close state of each accordion
//   const [searchOpen,setSearchOpen] = useState(false);
//   const [logoutOpen,setLogoutOpen] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, logOut, loading } = UserAuth();

//   const handleMenuClick = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleLogout = async () => {
//     try {
//       await logOut();
//       router.push("/");
//       router.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSearchButtonClick = () =>{
//     setSearchOpen(!searchOpen);
//   }

//   // Toggle accordion
//   const toggleAccordion = (index) => {
//     setActiveAccordion(activeAccordion === index ? null : index); // Toggle the accordion open/close
//   };

//   // Close the menu when the URL changes
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [pathname]);

//   // Prevent scrolling when the menu is open
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [menuOpen]);

//     const handleProfileClick = () =>{
//         if(user){
//           setLogoutOpen(!logoutOpen);
//         }
//         else{
//           router.push("/signin")
//         }

//     }

//   return (
//     <div className='navbar'>
//       <div className='navbar-container'>
//         <div className='navbar-top'>
//           <div className='navbar-left'>
//             <Link className='navbar-logo' href="/">
//               <Image src={Logo} alt="Logo" />
//             </Link> 

//             <div className='navbar-browse'>
//               <Image src={search}/>
//               <input type="text" placeholder='Browse' />
//             </div>
//           </div>

//           <div className='navbar-right'>
//             <button className='navbar-top-button'>SUBMIT YOUR RESEARCH</button>
//            <Image src={search} className='mobile-search-btn' onClick={handleSearchButtonClick}/>
   
//             <div className='navbar-profile'>
//               <Image src={account} onClick={handleProfileClick}/>
//               {logoutOpen &&
//                <div className='navbar-profile-dropdown' onClick={handleLogout}>Logout</div> }
//             </div>
//             <div className='navbar-hamburger-img'>
//               <Image src={hamburger} alt="Open Menu" onClick={handleMenuClick} />
//             </div>
//           </div>
//         </div>  
//       </div>

//       {searchOpen &&  
//       <div className='navbar-browse-mobile'>
//         <div className='navbar-browse-mobile-container'>
//               <Image src={search}/>
//               <input type="text" placeholder='Browse' />
//           </div>
//         </div>
//       }

//       {menuOpen && (
//         <>
//           {/* Background Overlay */}
//           <div className="navbar-overlay" onClick={handleMenuClick}></div>

//           {/* Menu */}
//           <div className='navbar-menu'>
//             <div className='navbar-close-img'>
//               <Image src={close} alt="Close Menu" onClick={handleMenuClick} />
//             </div>
            
//             {NavbarData.map((item, index) => (
//               <div className='navbar-menu-contents' key={index}>
//                 <h4 onClick={() => toggleAccordion(index)}>
//                   {item.title}
//                   {item.accordion && <Image 
//                     src={arrow} 
//                     height={16} 
//                     alt="arrow" 
//                     className={activeAccordion === index ? 'arrow-rotate' : ''} 
//                   />}
//                 </h4>

//                 {activeAccordion === index && item.accordion && 
//                     item.accordion.map((subItem, subIndex) => (
//                       <p key={subIndex}>{subItem.title}</p>
//                     ))}

//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Navbar;

'use client'
import React, { useState, useEffect } from 'react';
import '@styles/navbar/Navbar.css';
import Image from 'next/image';
import Logo from '@public/images/navbar/bioscholar.png';
import hamburger from '@public/images/navbar/hamburger.png';
import close from '@public/images/navbar/close.png';
import search from '@public/images/navbar/search.svg';
import arrow from '@public/images/navbar/arrow.svg';
import account from '@public/images/navbar/account.svg'
import NavbarData from '@data/navbar/NavbarData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {useRouter} from 'next/navigation';
import { UserAuth } from '@context/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logOut, loading } = UserAuth(); // Destructure from UserAuth context

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/");
      setLogoutOpen(!logoutOpen);
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchButtonClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleProfileClick = () => {
    if (user) {
      setLogoutOpen(!logoutOpen);
    } else {
      router.push("/signin");
    }
  };

  // Define the toggleAccordion function
  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // If still loading, show a loading indicator (optional)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-top">
          <div className="navbar-left">
            <Link className="navbar-logo" href="/">
              <Image src={Logo} alt="Logo" />
            </Link>

            <div className="navbar-browse">
              <Image src={search} />
              <input type="text" placeholder="Browse" />
            </div>
          </div>

          <div className="navbar-right">
            <button className="navbar-top-button">SUBMIT YOUR RESEARCH</button>
            <Image src={search} className="mobile-search-btn" onClick={handleSearchButtonClick} />

            <div className="navbar-profile">
              <Image src={account} onClick={handleProfileClick} />
              {logoutOpen && (
                <div className="navbar-profile-dropdown" onClick={handleLogout}>
                  Logout
                </div>
              )}
            </div>
            <div className="navbar-hamburger-img">
              <Image src={hamburger} alt="Open Menu" onClick={handleMenuClick} />
            </div>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="navbar-browse-mobile">
          <div className='navbar-browse-mobile-container'>
            <div className="navbar-browse-input-container">
              <Image src={search} />
              <input type="text" placeholder="Browse" />
            </div>
            <Image src={close}  className='close' onClick={handleSearchButtonClick} />
        </div>
        </div>
      )}

      {menuOpen && (
        <>
          <div className="navbar-overlay" onClick={handleMenuClick}></div>
          <div className="navbar-menu">
            <div className="navbar-close-img">
              <Image src={close} alt="Close Menu" onClick={handleMenuClick} />
            </div>
            {NavbarData.map((item, index) => (
              <div className="navbar-menu-contents" key={index}>
                <h4 onClick={() => toggleAccordion(index)}>
                  {item.title}
                  {item.accordion && (
                    <Image
                      src={arrow}
                      height={16}
                      alt="arrow"
                      className={activeAccordion === index ? "arrow-rotate" : ""}
                    />
                  )}
                </h4>

                {activeAccordion === index &&
                  item.accordion &&
                  item.accordion.map((subItem, subIndex) => <p key={subIndex}>{subItem.title}</p>)}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
