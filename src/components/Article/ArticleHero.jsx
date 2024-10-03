import React from 'react'

const ArticleHero = (props) => {
  return (
    <div className='article-hero'>
      <div className='article-hero-container'>
        <div className='article-hero-category'>
          <span >{props.articleType} </span>
          <p>{props.category}</p>
        </div>
        <h1>{props.title}</h1>
        <p className='article-hero-author'>{props.authors}</p>
        <p className='article-hero-institution'>{props.institutions}</p>
      </div>
    </div>
  )
}

export default ArticleHero