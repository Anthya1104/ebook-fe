import React from 'react'
import HomePage from './HomePage'
import Footer from '../layouts/Footer'
import Slider from './Chat/Slider'

function Home() {
  return (
    <>
      {/* <h1>Home</h1> */}
      <div className="Home-background">
        <HomePage />
        <div className="Home-container container-xxl d-flex-column justify-context-center">
          <div className="Home-title">
            <h3>線上書展</h3>
          </div>
          <Slider />
        </div>
      </div>
    </>
  )
}

export default Home
