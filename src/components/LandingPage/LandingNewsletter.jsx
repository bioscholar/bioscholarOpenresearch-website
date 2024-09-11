import React from 'react'

export const LandingNewsletter = () => {
  return (
    <div className='landing-newsletter'>
        <div className='landing-newsletter-container'>
            <div className='landing-newsletter-heading'>
                <p>Subscribe you our newsletter</p>
                <h3>Stay ahead of the curve with regular updates</h3>
            </div>
            <div className='landing-newsletter-input'>
                <input type="text" placeholder='Enter your email ID' />
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}
