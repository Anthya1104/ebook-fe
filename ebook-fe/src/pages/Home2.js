import React, { useEffect } from 'react'
import '../style/Home2.scss'
import Homepagebackground from './memberindexcategory/homepagebackground.png'
import Books from './memberindexcategory/books-copy.png'
import Novel from './memberindexcategory/novel-copy.png'
import Comic from './memberindexcategory/comic-copy.png'
import Magazine from './memberindexcategory/magazine-copy.png'
import Audiobook from './memberindexcategory/audiobook-copy.png'

function Home2() {
  useEffect(() => {
    const body = document.querySelector('.home-body')
    const li = document.querySelectorAll('li')
    li.forEach((el) => {
      el.addEventListener('mouseover', () => {
        let bg = el.getAttribute('data-bg')
        body.style.background = `url(${bg})no-repeat center /cover`
      })
    })
  }, [])
  return (
    <div className="comtainer">
      <div className="home-body">
        <ul>
          <li className="lihover1" data-bg={Books}>
            <a href="#">
              書籍
              <br />
              Books
            </a>
          </li>
          <li className="lihover2" data-bg={Novel}>
            <a href="#">
              小說
              <br />
              Novel
            </a>
          </li>
          <li className="lihover3" data-bg={Comic}>
            <a href="#">
              漫畫
              <br />
              Comic
            </a>
          </li>
          <li className="lihover4" data-bg={Magazine}>
            <a href="#">
              雜誌
              <br />
              Magazine
            </a>
          </li>
          <li className="lihover5" data-bg={Audiobook}>
            <a href="#">
              有聲書
              <br />
              Audiobook
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home2
