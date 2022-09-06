import React from 'react'
import './Category.scss'

function Category() {
  return (
    <>
      <ul>
        <li className="item">
        
          <a href="#">
          <img className='icon' src={require('../TopCategory/briefcase.png')} />
          商業理財 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={require('../TopCategory/quill-pen.png')} />
          文學小說 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={require('../TopCategory/atom.png')} />
          社會科學 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={require('../TopCategory/leaf.png')} />
          生活風格 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={require('../TopCategory/inspiration.png')} />
          藝術設計 
          </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={require('../TopCategory/worldwide.png')} />
          自然科普 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={require('../TopCategory/suitcase.png')} />
          旅遊觀光 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={require('../TopCategory/planting.png')} />
          勵志成長 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={require('../TopCategory/heartbeat.png')} />
          醫療保健 </a>
        </li>
      </ul>
    </>
  )
}

export default Category
