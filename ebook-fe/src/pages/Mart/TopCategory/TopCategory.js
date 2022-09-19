import React, { Component } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './TopCategory.scss'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div>
        <h2> 分類 連結要怎麼連??? </h2>
        <Slider {...settings}>
          <div className="Topcategory-innerbox">
            <img className="Topcategory-img" src={require('./briefcase.png')} />
            <h4>商業理財</h4>
          </div>
          <div className="Topcategory-innerbox">
            <img className="Topcategory-img" src={require('./quill-pen.png')} />
            <h4>文學小說</h4>
          </div>
          <div className="Topcategory-innerbox">
            <img className="Topcategory-img" src={require('./worldwide.png')} />
            <h4>社會科學</h4>
          </div>
          <div className="Topcategory-innerbox">
            <img className="Topcategory-img" src={require('./leaf.png')} />
            <h4>生活風格</h4>
          </div>
          <div className="Topcategory-innerbox">
            <img
              className="Topcategory-img"
              src={require('./inspiration.png')}
            />
            <h4>藝術設計</h4>
          </div>
          <div className="Topcategory-innerbox">
            <img className="Topcategory-img" src={require('./atom.png')} />
            <h4>自然科普</h4>
          </div>
          <div className="Topcategory-innerbox">
            <img className="Topcategory-img" src={require('./suitcase.png')} />
            <h4>旅遊觀光</h4>
          </div>
          <div className="Topcategory-innerbox">
            <img className="Topcategory-img" src={require('./heartbeat.png')} />
            <h4>醫療保健</h4>
          </div>
          <div className="Topcategory-innerbox">
            <img className="Topcategory-img" src={require('./planting.png')} />
            <h4>勵志成長</h4>
          </div>
        </Slider>
      </div>
    )
  }
}
