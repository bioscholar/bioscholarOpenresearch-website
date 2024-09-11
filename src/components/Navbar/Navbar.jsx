'use client'
import React,{useState} from 'react'
import '@styles/navbar/Navbar.css';
import Image from 'next/image';
import Logo from '@public/images/navbar/bioscholar.png'
import hamburger from '@public/images/navbar/hamburger.png'
import close from '@public/images/navbar/close.png'
import Link from 'next/link';

const Navbar = () => {

    const [menuOpen, setmenuOpen]= useState(false);

    function handleMenuClick(){
        setmenuOpen(!menuOpen);
    }

  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-top'>
                <Link className='navbar-logo' href="/" ><Image src={Logo}/></Link>
                <button className='navbar-top-button'>SUBMIT YOUR RESEARCH</button>

                <div className='navbar-hamburger-img'>
                {!menuOpen ? <Image src={hamburger} onClick={handleMenuClick}/> : <Image src={close} onClick={handleMenuClick} />}

                </div>

              {menuOpen &&  
              <div className='navbar-menu'>

                    <div className='navbar-bottom-contents'>
                        <p>ABOUT</p>
                        <p>HOW TO PUBLISH</p>
                        <p>CONTACT</p>
                    </div>

                    <div className='navbar-bottom-button'>
                        <Link href="/signup"> <p>SIGNUP</p></Link>
                    </div>

                    <button>SUBMIT YOUR RESEARCH</button>

                </div>
                }

            </div>
            <div className='navbar-bottom'>
                <div className='navbar-bottom-contents'>
                    <p>ABOUT</p>
                    <p>HOW TO PUBLISH</p>
                    <p>CONTACT</p>
                </div>
                <div className='navbar-bottom-button'>
                <Link href="/signup">  <p>SIGNUP</p></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar