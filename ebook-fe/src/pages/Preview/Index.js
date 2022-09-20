import React from 'react'
import iconBack from '../../img/back.png'
import iconMenu from '../../img/main-menu.png'
import iconBook from '../../img/book.png'
import iconCart from '../../img/shopping-cart.png'
import iconShare from '../../img/share.png'
import iconFull from '../../img/full-screen.png'
import styles from '../Preview/Index.module.css'

function Headers() {
  return (
    <div className={styles.headers}>
      <div>
        <ul className={styles.iconStart}>
          <li className={styles.iconLi}>
            <a href="#">
              <img src={iconBack} alt="" />
              <p>返回</p>
            </a>
          </li>
          <li className={styles.iconLi}>
            <img src={iconMenu} alt="" />
            <p>目錄</p>
            <div className={styles.hover}>
              <h6>書籍章節</h6>
              <li>
                <a href="#">推薦序 &nbsp; 好人緣，從『學會發問開始』</a>
              </li>
              <li>
                <a href="#">第一章 &nbsp; 技巧1 &nbsp; 不懂就發問</a>
              </li>
              <li>
                <a href="#">第二章 &nbsp; 技巧2 &nbsp; 不懂就發問</a>
              </li>
              <li>
                <a href="#">第三章 &nbsp; 技巧3 &nbsp; 不懂就發問</a>
              </li>
              <li>
                <a href="#">第四章 &nbsp; 技巧4 &nbsp; 不懂就發問</a>
              </li>
            </div>
          </li>
          <button className={styles.iconEndButton}>
            <img src={iconBook} alt="" />
            <p>收藏</p>
          </button>
        </ul>
      </div>
      <div>
        <h5 className={styles.title}>
          聊不停的聰明問話術：<br></br>【超圖解】40個開場 • 接話 •
          打破心防的問話技巧，不用找話題，90%的話都讓對方說
        </h5>
      </div>
      <div>
        <ul className={styles.iconEnd}>
          <button className={styles.iconEndButton}>
            <img src={iconCart} alt="" />
            <p>購物車</p>
          </button>

          <button className={styles.iconEndButton}>
            <img src={iconShare} alt="" />
            <p>分享</p>
          </button>

          <button className={styles.iconEndButton}>
            <img src={iconFull} alt="" />
            <p>專注模式</p>
          </button>
        </ul>
      </div>
    </div>
  )
}

function Section() {
  return (
    <object
      width="100%"
      height="400"
      data="http://www.africau.edu/images/default/sample.pdf"
      type="application/pdf"
    ></object>
  )
}

function Footer() {
  return (
    <div className={styles.footer}>
      <h6>第一章 &nbsp;&nbsp; 技巧1 &nbsp;&nbsp; 不懂就發問</h6>
    </div>
  )
}

function Preview() {
  return (
    <div>
      <Headers />

      <Section />

      <Footer />
    </div>
  )
}

export default Preview
