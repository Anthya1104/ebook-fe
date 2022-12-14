import React, { useState, useEffect } from 'react'
import '../style/Homepage.scss'
import Homepagebackground from './memberindexcategory/homepagebackground.png'
import Books from './memberindexcategory/books.png'
import Novel from './memberindexcategory/novel.png'
import Comic from './memberindexcategory/comic.png'
import Magazine from './memberindexcategory/magazine.png'
import Audiobook from './memberindexcategory/audiobook.png'
import { Link } from 'react-router-dom'
import { FaCompactDisc } from 'react-icons/fa'

function HomePage() {
  const baclgrounds = {
    Book: <img src={Books} />,
    Novel: <img src={Novel} />,
    Comic: <img src={Comic} />,
    Magazine: <img src={Magazine} />,
    Audiobook: <img src={Audiobook} />,
  }
  const [background, setBackground] = useState()
  useEffect(() => {
    document.body.style.background = background
  }, [background])

  return (
    <>
      <article>
        <div className="section-top-page">
          <div className="top-collection">
            <div className="homepage-collections">
              {/* 首頁預設背景 */}
              <div className="homepage-bg">
                <img
                  className="homepagebackground cover-fit"
                  src={Homepagebackground}
                  alt="homepagebackground"
                />
              </div>

              {/* 各分類背景 */}
              <div className="collection-banner-list">
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

                <div className="banner-background">
                  <img className="audiobook" src={Audiobook} alt="audiobook" />
                </div>

                {/* 各分類hover */}
                <div className="collection-list">
                  <div className="container">
                    <div className="list">
                      {/* 書籍 */}
                      <div className="col-item">
                        <Link
                          aria-label="Books"
                          title="Books"
                          to="/Cart/product-list"
                        >
                          {/* <span
                            className="rectangle"
                            style={{ background: '#EFD3CE' }}
                          ></span> */}
                          <div
                            className="rectangle"
                            style={{
                              backgroundColor: '#EFD3CE',
                              width: '100%',
                              height: '5px',
                              position: 'absolute',
                              bottom: '0',
                              left: '0',
                            }}
                          />

                          <div className="item-content">
                            <div className="animated">
                              <div
                                className="item-title"
                                onChange={(e) => setBackground(e.target.value)}
                              >
                                書籍
                              </div>
                              <div className="item-text">Books</div>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* 小說 */}
                      <div className="col-item">
                        <Link
                          aria-label="Novel"
                          title="Novel"
                          to="/Cart/product-list"
                        >
                          {/* <span
                            className="rectangle"
                            style={{ background: '#E3BBB1' }}
                          ></span> */}
                          <div
                            className="rectangle"
                            style={{
                              backgroundColor: '#E3BBB1',
                              width: '100%',
                              height: '5px',
                              position: 'absolute',
                              bottom: '0',
                              left: '0',
                            }}
                          />

                          <div className="item-content">
                            <div className="animated">
                              <div className="item-title">小說</div>
                              <div className="item-text">Novel</div>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* 漫畫 */}
                      <div className="col-item">
                        <Link
                          aria-label="Comic"
                          title="Comic"
                          to="/Cart/product-list"
                        >
                          {/* <span
                            className="rectangle"
                            style={{ background: '#B48C8C' }}
                          ></span> */}
                          <div
                            className="rectangle"
                            style={{
                              backgroundColor: '#B48C8C',
                              width: '100%',
                              height: '5px',
                              position: 'absolute',
                              bottom: '0',
                              left: '0',
                            }}
                          />

                          <div className="item-content">
                            <div className="animated">
                              <div className="item-title">漫畫</div>
                              <div className="item-text">Comic</div>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* 雜誌 */}
                      <div className="col-item">
                        <Link
                          aria-label="Magazine"
                          title="Magazine"
                          to="/Cart/product-list"
                        >
                          {/* <span
                            className="rectangle"
                            style={{ background: '#DF9D6E' }}
                          ></span> */}
                          <div
                            className="rectangle"
                            style={{
                              backgroundColor: '#DF9D6E',
                              width: '100%',
                              height: '5px',
                              position: 'absolute',
                              bottom: '0',
                              left: '0',
                            }}
                          />

                          <div className="item-content">
                            <div className="animated">
                              <div className="item-title">雜誌</div>
                              <div className="item-text">Magazine</div>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* 有聲書 */}
                      <div className="col-item">
                        <Link
                          aria-label="Audiobook"
                          title="Audiobook"
                          to="/Cart/product-list"
                        >
                          {/* <span
                            className="rectangle"
                            style={{ background: '#C0724A' }}
                          ></span> */}
                          <div
                            className="rectangle"
                            style={{
                              backgroundColor: '#C0724A',
                              width: '100%',
                              height: '5px',
                              position: 'absolute',
                              bottom: '0',
                              left: '0',
                            }}
                          />

                          <div className="item-content">
                            <div className="animated">
                              <div className="item-title">有聲書</div>
                              <div className="item-text">Audiobook</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default HomePage
