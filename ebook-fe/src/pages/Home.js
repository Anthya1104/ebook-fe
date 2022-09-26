import React from 'react'
import bgImg from '../img/tumblr_1280-1.jpeg'
import icon1 from '../img/one.png'
import icon2 from '../img/two.png'
import icon3 from '../img/three.png'
import icon4 from '../img/four.png'
import icon5 from '../img/five.png'
import '../style/home.scss'
import { useEffect } from 'react'
import HomePage from './HomePage'
import Footer from '../layouts/Footer'
import Slider from './Chat/Slider'

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
      <HomePage />
      <Slider />
      <div className="main">
        <div className="container">
          <div className="panel active" style={{ background: `url(${bgImg})` }}>
            <img src={icon1} alt="" />
            <h2>你阿嬤</h2>
          </div>
          <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}>
            <img src={icon2} alt="" />
            <h2>這是你阿嬤</h2>
          </div>
          <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}>
            <img src={icon3} alt="" />
            <h2>還是你阿嬤</h2>
          </div>
          <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}>
            <img src={icon4} alt="" />
            <h2>又見你阿嬤</h2>
          </div>
          <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}>
            <img src={icon5} alt="" />
            <h2>終究是你阿嬤</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
