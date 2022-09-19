import React, { useState, useEffect } from 'react'
import BookCover from '../../../../img/book.jpg'
import ArrowRight from '../../../../img/recent_book_arrow_r.svg'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import Button from 'react-bootstrap/Button'
// Popup Window Importing
import Popup from 'reactjs-popup'
// Star Rating Importing
import StarRating from './StarRating'

// test avatar img importing
import Avatar from '../../../../img/book.jpg'

import axios from 'axios'
import { API_URL } from '../../../../utils/config'

function RecentBook() {
  // Chart.js states
  // 動態做法: https://www.youtube.com/watch?v=UwlaPofs5cA&ab_channel=SeemaHolidayDeveloper
  // const [data, setData] = useState(newdata)
  const [progressData, setProgressData] = useState(0)

  // data from star rating
  const [scoreFromStarRating, setScoreFromStarRating] = useState(0)

  // the most recent read book from DB
  const [recentBook, setRecentBook] = useState([])

  // the most recent read book mapping
  useEffect(() => {
    // call API
    const getRecentBook = async () => {
      let response = await axios.get(`${API_URL}/bookshelf/recent-book`)
      setRecentBook(response.data)
      // console.log('recentbook', recentBook)

      // 設定閱讀進度
      setProgressData(response.data[0].reading_progress)
      // console.log('progressdata', progressData)
    }
    getRecentBook()
  }, [])

  const createRecentBook = (recentBook) => {
    return recentBook.map((recentBookValue) => {
      console.log('recetnBookValue', recentBookValue)
      return (
        <>
          <div className="position-relative my-5" key={recentBookValue.id}>
            <div className="Bookshelf-recent-book-container d-flex justify-content-left align-items-center">
              <img
                className="Bookshelf-arrow img-flip m-2"
                alt="arrow-l"
                src={ArrowRight}
              />
              <div className="recent-book d-flex justify-content-center align-items-center">
                <div className="chartLocation">
                  <Doughnut data={newdata} options={readChartOption} />
                </div>
              </div>
              <img
                className="Bookshelf-arrow m-2"
                alt="arrow-r"
                src={ArrowRight}
              />
            </div>
            <div className="position-absolute top-0 Bookshelf-recent-info">
              <h5>{recentBookValue.book_name}</h5>
              <h6>{recentBookValue.author}</h6>
            </div>
            <div className="position-absolute bottom-0 Bookshelf-recent-info">
              <p className="Bookshelf-recent-percentage">{readProcess + '%'}</p>
            </div>
            <div className="position-absolute top-0 d-flex align-items-center">
              <div className="recent-book-img p-1">
                <img
                  className="contain-fit"
                  alt="recent-book"
                  src={BookCover}
                />
              </div>

              <div className="Bookshelf-recent-btn mx-3">
                <div className="mb-2">
                  <Button
                    className="btn btn-primary-reverse"
                    onClick={() => {}}
                  >
                    繼續閱讀
                  </Button>
                </div>
                {/* popup 評論 window */}
                {/* reference: https://react-popup.elazizi.com/ */}
                <div className="mb-2">
                  <Popup
                    trigger={
                      <Button className="btn btn-primary-reverse">
                        寫下評論
                      </Button>
                    }
                    className="mb-2"
                    position="center"
                  >
                    {(close) => (
                      <div className="Bookshelf-popup-reviews p-2 rounded">
                        <Button
                          className="Bookshelf-close-btn btn btn-primary float-end rounded-circle"
                          onClick={close}
                        >
                          &times;
                        </Button>
                        <div className="d-flex-column m-2">
                          <div className="d-flex my-3 align-items-center">
                            <div className="Bookshelf-recentbook-avatar mx-3">
                              <img
                                className="cover-fit rounded-circle"
                                alt="avatar"
                                src={Avatar}
                              />
                            </div>
                            <div className="mx-2">
                              <svg
                                width="2"
                                height="44"
                                viewBox="0 0 2 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1.74512L0.999998 42.7451"
                                  stroke="#B48C8C"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                />
                              </svg>
                            </div>
                            {/* reference : https://mui.com/material-ui/react-rating/ */}
                            <div className="mx-3">
                              <StarRating
                                setScoreFromStarRating={setScoreFromStarRating}
                              />
                            </div>
                            {console.log(scoreFromStarRating)}
                          </div>
                          <input type="textarea" />
                          <div></div>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
                <div className="mb-2">
                  <Button
                    className="btn btn-primary-reverse"
                    onClick={() => {}}
                  >
                    送給朋友
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    })
  }

  // chart.js book_progress
  // 動態資料連動方法 -> 使用
  ChartJS.register(ArcElement, Tooltip, Legend)

  let readProcess = progressData
  let newdata = {
    labels: [],
    datasets: [
      {
        label: '# of Progress',
        data: [readProcess, 100 - readProcess],
        backgroundColor: ['rgb(102,31,30)', 'rgba(0, 0, 0, 0)'],
        cutout: 140,
        borderWidth: 0,
      },
    ],
  }

  const readChartOption = {
    responsive: true,
  }

  return (
    <>
      {/* <div>RecentBook</div> */}
      {createRecentBook(recentBook)}
      {console.log('createRecentBook', createRecentBook(recentBook))}
    </>
  )
}

export default RecentBook
