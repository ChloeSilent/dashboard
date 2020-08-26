import React, { useState, useEffect } from 'react'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NewsItem from './NewsItem'
import Slider from 'react-slick'

const API_KEY = '10aafdd8541d440d8374208938e951e7'
const COUNTRY = 'ru'
const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}
const News = () => {
  function useNews() {
    const [news, setNews] = useState([])

    const getNews = () => {
      fetch(
        `http://newsapi.org/v2/top-headlines?sources?language=${COUNTRY}&country=${COUNTRY}&apiKey=${API_KEY}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((data) => {
          console.log(data.articles)
          setNews(data.articles)
        })
    }

    return { getNews, news }
  }

  const { news, getNews } = useNews([])

  useEffect(() => {
    getNews()
  }, [])

  const newsList = [...news].map((item) => {
    return (
      <NewsItem
        key={item.url}
        title={item.title}
        description={item.description}
        source={item.source}
        publishedAt={item.publishedAt}
        urlToImage={item.urlToImage}
      />
    )
  })
  return (
    <div className="news">
      <Slider {...settings}>{newsList}</Slider>
    </div>
  )
}

export default News
