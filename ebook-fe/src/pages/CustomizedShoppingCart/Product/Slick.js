import React from 'react'
import './Slick.scss'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

export default function App() {
  const renderSlides = () =>
    [
      '商業理財',
      '文學小說',
      '社會科學',
      '生活風格',
      '藝術設計',
      '自然科普',
      '旅遊觀光',
      '醫療保健',
      '勵志成長',
    ].map((category) => (
      <div >
        <a 
        className="mt-2 ProductList-Slick-text"
        href='#'>{category}</a>
      </div>
    ))

  return (
    <div className="ProductList-Slick">
      <Slider
        dots={false}
        slidesToShow={5}
        slidesToScroll={2}
        autoplay={false}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </div>
  )
}