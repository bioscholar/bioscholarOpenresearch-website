'use client'
import React, { useState, useEffect } from 'react';
import '@styles/navbar/Navbar.css';
import Image from 'next/image';
import Logo from '@public/images/navbar/bioscholar.png';
import hamburger from '@public/images/navbar/hamburger.png';
import close from '@public/images/navbar/close.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to detect route changes

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Hook to track the current route

  // Toggle menu state
  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  // Close the menu when the URL changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Re-enable scrolling
    }

    // Cleanup: Ensure scrolling is enabled on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-top'>
          <Link className='navbar-logo' href="/" >
            <Image src={Logo} alt="Logo" />
          </Link>
          <button className='navbar-top-button'>SUBMIT YOUR RESEARCH</button>

          <div className='navbar-hamburger-img'>
            {!menuOpen ? (
              <Image src={hamburger} alt="Open Menu" onClick={handleMenuClick} />
            ) : (
              <Image src={close} alt="Close Menu" onClick={handleMenuClick} />
            )}
          </div>

          {menuOpen && (
            <div className='navbar-menu'>
              <div className='navbar-bottom-contents'>
                <p>ABOUT</p>
                <p>HOW TO PUBLISH</p>
                <p>CONTACT</p>
              </div>

              <div className='navbar-bottom-button'>
                <Link href="/signup">
                  <p>SIGNUP</p>
                </Link>
              </div>

              <button>SUBMIT YOUR RESEARCH</button>
            </div>
          )}
        </div>

        <div className='navbar-bottom'>
          <div className='navbar-bottom-contents'>
            <p>ABOUT</p>
            <p>HOW TO PUBLISH</p>
            <p>CONTACT</p>
          </div>
          <div className='navbar-bottom-button'>
            <Link href="/signup">
              <p>SIGNUP</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
