import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '@styles/LandingPage/LandingPage.css';
import { SUBMIT_RESEARCH_PATH } from '@data/submitResearch';

export const LandingHero = () => {
  return (
    <div className='landing-hero'>
        <div className='landing-hero-container'>
            <div className='landing-hero-heading'>
                <h1>Global Open Publishing Now Smart and Fast </h1>
            </div>
            <div className='landing-hero-para'>
                <p>Seamless and accessible solution for academic and research communities to publish, share, and access knowledge</p>
            </div>
            <div className='landing-hero-button'>
                <Link href={SUBMIT_RESEARCH_PATH}>
                    <button> <Image src=""/> SUBMIT YOUR RESEARCH</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
