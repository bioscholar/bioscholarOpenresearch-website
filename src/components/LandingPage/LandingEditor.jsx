import React from 'react'
import Image from 'next/image'
import { LandingEditorData } from '@data/LandingPage/LandingPageData'

const LandingEditor = () => {
  return (
    <div className='landing-editor'>
        <div className='landing-editor-container'>
            <div className='landing-editor-heading'>
                <h2>Editor's Pick</h2>
            </div>
            <div className='landing-editor-content'>
                {LandingEditorData.map((item,index)=>(
                <div className='landing-editor-box' key={index}>
                    <Image src={item.image}/>
                    <h3>{item.title} </h3>
                    <p>{item.para} </p>
                    <span>{item.author} </span>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LandingEditor