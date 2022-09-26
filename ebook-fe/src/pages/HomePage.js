import React from 'react'
import '../style/Homepage.scss'
import Homepagebackground from './memberindexcategory/homepagebackground.png'
import Books from './memberindexcategory/books.jpg'
import Novel from './memberindexcategory/novels.jpg'
import Comic from './memberindexcategory/comic.png'
import Magazine from './memberindexcategory/magazine.jpg'


function HomePage() {
  return (
    <>
      <div className="homepage-collections">
      
        <div className="homepage-bg">
          <img className="homepagebackground" src={Homepagebackground} alt="homepagebackground" />
        </div>

        <div className="collections-banner-background">

          <div className="banner-background">
            <img className="books" src={Books} alt="books" />
          </div>

          <div className="banner-background">
            <img className="novel" src={Novel} alt="novel" />
          </div>

          <div className="banner-background">
            <img className="comic" src={Comic} alt="comic" />
          </div>

          <div className="banner-background">
            <img className="magazine" src={Magazine} alt="magazine" />
          </div>



        </div>
      </div>
    </>
  )
}

export default HomePage
