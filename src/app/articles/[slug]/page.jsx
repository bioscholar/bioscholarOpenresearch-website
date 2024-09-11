import React from 'react'
import ArticleData from '@data/article/ArticleData';
import Article from '@components/Article/Article';
const page = ({params}) => {
    const {slug} = params;

    const Data = ArticleData.find((data)=> data.id === slug)
  return (
    <div>
        <Article {...Data} />
    </div>
  )
}

export default page