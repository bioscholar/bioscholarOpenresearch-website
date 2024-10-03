import React from 'react'
import ArticleHero from './ArticleHero'
import ArticleNavigation from './ArticleNavigation'

const Article = (props) => {
  return (
    <div className='article-page' >
      <div className='article-page-container'  >
        <div className='article-page-main-content' >
          <ArticleHero {...props} />
          <ArticleNavigation {...props}/>
        </div>
        <div className='article-page-peer'>
            <div className='article-page-peer-container'>
              <div className='article-page-peer-contents'>
                <h2>Peer Review Information</h2>
                <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                  <h3>Peer Review Status:</h3>
                  <p>Ongoing</p>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                  <h3>Article Version:</h3>
                  <p>Awaiting Revision</p>
                </div>
              </div>
              <div className='article-page-cta'>
                <p>Share</p>
                <p>Download</p>
                <p>cite</p>
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Article