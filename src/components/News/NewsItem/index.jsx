import React from 'react'
import './style.scss'
const NewItem = (props) => {
  const { urlToImage, description, title, publishedAt, source, url } = props
  return (
    <div className="news__item" key={url}>
      <img src={urlToImage} alt={description} className="news__item-img" />
      <div className="news__item-text">
        <div className="news__item-title">{title}</div>
        <div className="news__item-additional">
          {publishedAt} Источник: {source.name}
        </div>
      </div>
    </div>
  )
}

export default NewItem
