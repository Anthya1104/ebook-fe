import React, { useEffect } from 'react'
import HomePage from './HomePage'
import Footer from '../layouts/Footer'
import Slider from './Chat/Slider'

import bgImg from '../img/tumblr_1280-1.jpeg'
import Author1 from '../img/author/JK.jpeg'
import Author2 from '../img/author/喬治馬丁.jpeg'
import Author3 from '../img/author/張嘉佳.jpeg'
import Author4 from '../img/author/不朽.png'
import Author5 from '../img/author/tom.jpeg'
import icon1 from '../img/one.png'
import icon2 from '../img/two.png'
import icon3 from '../img/three.png'
import icon4 from '../img/four.png'
import icon5 from '../img/five.png'
import '../style/home.scss'

function Home() {
  useEffect(() => {
    const panels = document.querySelectorAll('.panel')

    panels.forEach((panel) => {
      panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
      })
    })

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove('active')
      })
    }
  }, [])
  return (
    <>
      {/* <h1>Home</h1> */}
      <HomePage />
      <Slider />
      <div className="body">
        <div className="main">
          <div className="home-container">
            <div
              className="panel active"
              style={{ background: `url(${Author1})` }}
            >
              <img src={icon1} alt="" />
              <h2 className='author'>J·K·羅琳&nbsp;&nbsp;&nbsp;&nbsp;《&nbsp;哈利波特系列&nbsp;》</h2>
            </div>
            <div className="panel" style={{ backgroundImage: `url(${Author2})` }}>
              <img src={icon2} alt="" />
              <h2>喬治·R·R·馬丁&nbsp;&nbsp;&nbsp;&nbsp;《&nbsp;冰與火之歌系列&nbsp;》</h2>
            </div>
            <div className="panel" style={{ backgroundImage: `url(${Author3})` }}>
              <img src={icon3} alt="" />
              <h2>張嘉佳&nbsp;&nbsp;&nbsp;&nbsp;《&nbsp;從你的全世界路過、擺渡人&nbsp;》</h2>
            </div>
            <div className="panel" style={{ backgroundImage: `url(${Author4})` }}>
              <img src={icon4} alt="" />
              <h2>不朽&nbsp;&nbsp;&nbsp;&nbsp;《&nbsp;所有溫柔都是你的隱喻&nbsp;》</h2>
            </div>
            <div className="panel" style={{ backgroundImage: `url(${Author5})` }}>
              <img src={icon5} alt="" />
              <h2>湯姆·克蘭西&nbsp;&nbsp;&nbsp;&nbsp;《&nbsp;獵殺紅色十月號&nbsp;》</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
