import React from 'react'
import '../style/Homepage.scss'
import Homepagebackground from './memberindexcategory/homepagebackground.png'
import Books from './memberindexcategory/books.jpg'
import Novels from './memberindexcategory/novels.jpg'


function HomePage() {
  return (
    <>
    {/* <div className="homepage-test-collection"></div> */}

      <div className="homepage-collections">
      
        <div className="homepage-bg">
          <img className="homepagebackground" src={Homepagebackground} alt="homepagebackground" />
        </div>

        <div className="collections-banner-background">

          <div className="banner-background">
            <img className="books" src={Books} alt="books" />
          </div>

          <div className="banner-background">
            <img className="novels" src={Novels} alt="novels" />
          </div>



        </div>
      </div>
    </>
  )
}

export default HomePage
