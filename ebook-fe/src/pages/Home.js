import React from 'react'
import '../style/home.css'
import bgImg from '../img/tumblr_1280-1.jpeg'
import iconone from '../img/one.png'
import icontwo from '../img/two.png'
import iconthree from '../img/three.png'
import iconfour from '../img/four.png'
import iconfive from '../img/five.png'
// import homePopularity from './home.scss'

function Home() {
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

  return (
    <div className="main">
      <div className="container">
        <div
          className="panel activel"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <img src={iconone} alt="" />
          <h3>你阿嬤</h3>
        </div>

        <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}>
          <img src={icontwo} alt="" />
          <h3>這是你阿嬤</h3>
        </div>

        <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}>
          <img src={iconthree} alt="" />
          <h3>還是你阿嬤</h3>
        </div>

        <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}>
          <img src={iconfour} alt="" />
          <h3>又見你阿嬤</h3>
        </div>

        <div className="panel" style={{ backgroundImage: `url(${bgImg})` }}>
          <img src={iconfive} alt="" />
          <h3>終究是你阿嬤</h3>
        </div>
      </div>
    </div>
  )
}

export default Home
