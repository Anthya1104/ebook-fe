import React from 'react'
import { Link } from 'react-router-dom'
import iconBack from '../../img/previewback.png'
import iconMenu from '../../img/main-menu.png'
import iconShare from '../../img/share.png'
import iconFull from '../../img/full-screen.png'
import styles from '../Preview/Index.module.css'
import CollectModal from './Modal/CollectModal'
import ShoppingCart from './Modal/ShoppingCart'
import ReactPDF from './React-pdf/ReactPDF(test3)'

function Headers() {
  return (
    <div className={styles.headers}>
      <div>
        <ul className={styles.iconStart}>
          <li className={styles.iconLi}>
            <Link to="/Cart/ProductDetail/5">
              <img src={iconBack} alt="" />
              <p>返回</p>
            </Link>
          </li>
          <li className={styles.book}>
            <button>
              <img src={iconMenu} alt="" />
              <p>目錄</p>
            </button>
            <div>
              <h5>書籍段落</h5>
              <li>
                <a href="#">1.目錄</a>
              </li>
              <li>
                <a href="#">2.for-of</a>
              </li>
              <li>
                <a href="#">3.生成器Generators</a>
              </li>
              <li>
                <a href="#">4.模板字串符</a>
              </li>
              {/* <li>
                <a href="#">第五本書</a>
              </li> */}
            </div>
          </li>
          <div className={styles.iconEndButton}>
            <CollectModal />
          </div>
        </ul>
      </div>
      <div>
        <h4 className={styles.title}>
          金錢心理學：
          <br />
          打破你對金錢的迷思，學會聰明花費
        </h4>
      </div>
      <div>
        <ul className={styles.iconEnd}>
          <div className={styles.iconEndButton}>
            <ShoppingCart />
          </div>

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
    // <object
    //   style={{ width: '100vw', height: '900px' }}
    //   data="http://www.africau.edu/images/default/sample.pdf"
    //   type="application/pdf"
    // ></object>
    <ReactPDF />
  )
}

// function Footer() {
//   return (
//     <div className={styles.footer}>
//       <h6>第一章 &nbsp;&nbsp; 技巧1 &nbsp;&nbsp; 不懂就發問</h6>
//     </div>
//   )
// }

function Preview() {
  return (
    <div>
      <Headers />

      <Section />

      {/* <Footer /> */}
    </div>
  )
}

export default Preview
