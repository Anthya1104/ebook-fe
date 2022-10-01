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
    const body = document.querySelector('body')
    const li = document.querySelectorAll('li')

    // li.forEach((el) => {
    //   el.addEventListener('mouseover', () => {
    //     let bg = el.getAttribute('data-bg')
    //     body.style.background = `url(${bg})no-repeat center /cover`
    //   })
    // })
  }, [])
  return (
    <div className="home-body">
      <ul>
        <li data-bg={Books}>
          <a href="#">書籍</a>
        </li>
        <li data-bg={Novel}>
          <a href="#">小說</a>
        </li>
        <li data-bg={Comic}>
          <a href="#">漫畫</a>
        </li>
        <li data-bg={Magazine}>
          <a href="#">雜誌</a>
        </li>
        <li data-bg={Audiobook}>
          <a href="#">有聲書</a>
        </li>
      </ul>
    </div>
  )
}

export default Home2
