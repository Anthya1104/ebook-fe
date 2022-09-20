import React from 'react'
import styles from './Index.module.css'
import iconBack from '../../img/back.png'
import iconMenu from '../../img/main-menu.png'
import iconBook from '../../img/book.png'
import iconCart from '../../img/shopping-cart.png'
import iconShare from '../../img/share.png'
import iconFull from '../../img/full-screen.png'
import pdfJs from '../../img/pdfjs.jpg'

function IconsStart() {
  return (
    <div className={styles.iconsStart}>
      <ul className={styles.icons}>
        <li className={styles.iconsLi}>
          <img src={iconBack} alt="返回" />
          <p>返回</p>
        </li>
        <li className={styles.iconsLi}>
          <img src={iconMenu} alt="目錄" />
          <p>目錄</p>
          <div className={styles.hover}>
            <h6>書籍章節</h6>
            <li>推薦序 &nbsp; 好人緣，從『學會發問開始』</li>
            <li>第一章 &nbsp; 技巧1 &nbsp; 不懂就發問</li>
            <li>第二章 &nbsp; 技巧2 &nbsp; 不懂就發問</li>
            <li>第三章 &nbsp; 技巧3 &nbsp; 不懂就發問</li>
            <li>第四章 &nbsp; 技巧4 &nbsp; 不懂就發問</li>
          </div>
        </li>
        <li className={styles.iconsLi}>
          <img src={iconBook} alt="收藏" />
          <p>收藏</p>
        </li>
      </ul>
    </div>
  )
}

function Title() {
  return (
    <h6 className={styles.title}>
      聊不停的聰明問話術：<br></br>【超圖解】40個開場 • 接話 •
      打破心防的問話技巧，不用找話題，90%的話都讓對方說
    </h6>
  )
}

function IconsEnd() {
  return (
    <div className={styles.iconsEnd}>
      <ul className={styles.icons}>
        <li className={styles.iconsLi}>
          <img src={iconCart} alt="購物車" />
          <p>購物車</p>
        </li>
        <li className={styles.iconsLi}>
          <img src={iconShare} alt="分享" />
          <p>分享</p>
        </li>
        <li className={styles.iconsLi}>
          <img src={iconFull} alt="全螢幕" />
          <p>專注模式</p>
        </li>
      </ul>
    </div>
  )
}

function Preview() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <IconsStart />
        </div>
        <div>
          <Title />
        </div>
        <div>
          <IconsEnd />
        </div>
      </header>
      <section>
        <img className={styles.pdfJs} src={pdfJs} alt="pdfjs" />
      </section>
      <div className={styles.iconsLi}>
        <p>第一章 &nbsp;&nbsp; 技巧1 &nbsp;&nbsp; 不懂就發問</p>
      </div>
    </main>
  )
}

export default Preview

