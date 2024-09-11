import React from 'react';
import {LandingPageData} from '@data/LandingPage/LandingPageData';

export const LandingArticle = () => {
  return (
    <div className='landing-article'>
        <div className='landing-article-container'>
            <div className='landing-article-heading'>
                <h2>Recent Articles</h2>
            </div>
            <div className='landing-article-contents'>
                {LandingPageData.map((item,index)=>(
                <div className='landing-article-box' key={index}>
                    <h4>{item.title}</h4>
                    <span>{item.date} | {item.author}</span>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
