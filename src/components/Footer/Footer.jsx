import React from 'react'
import '@styles/Footer/Footer.css'
import Image from 'next/image'
import Facebook from '@public/images/footer/facebook-white.png'
import X from '@public/images/footer/x-white.png'
import Instagram from '@public/images/footer/instagram-white.png'
import Linkedin from '@public/images/footer/linkedin-white.png'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-contents'>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Refund Policy</p>
            </div>
            <div className='footer-socials'>
                <Image src={Facebook}/>
                <Image src={X}/>
                <Image src={Instagram}/>
                <Image src={Linkedin}/>
            </div>
        </div>
    </div>
  )
}
