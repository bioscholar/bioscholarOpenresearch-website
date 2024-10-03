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
          <div className='footer-contents-container'>

              <div className='footer-contents'>
                  <p>About </p>
                  <p>Privacy notice</p>
                  <p>Monthly archive</p>
                  <p>Press Release </p>
              </div>
              <div className='footer-contents'>
                  <p>Terms and Conditions</p>
                  <p>careers </p>
                  <p>Our Partners </p>
                  <p>Alerts </p>
              </div>
              <div className='footer-contents'>
                  <p>Contact</p>
                  <p>Sign up for mail alerts </p>
                  <p>Services </p>
                  <p>R&D and L&D</p>
              </div>
              <div className='footer-contents'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  {/* <div className='footer-socials'>
                    <Image src={Facebook}/>
                    <Image src={X}/>
                    <Image src={Instagram}/>
                    <Image src={Linkedin}/>
                  </div>
                  <div className='footer-copyright'>
                    <span>© 2024 Bioscholar Pvt Ltd.</span>
              </div> */}
              </div>
          </div>

         <div className='sample'>
         <div className='footer-socials'>
          {/* <p>Follow us</p> */}
                    <Image src={Facebook}/>
                    <Image src={X}/>
                    <Image src={Instagram}/>
                    <Image src={Linkedin}/>
                  </div>
                  <div className='footer-copyright'>
                    <span>© 2024 Bioscholar Pvt Ltd.</span>
              </div>
         </div>

        </div>
    </div>
  )
}
