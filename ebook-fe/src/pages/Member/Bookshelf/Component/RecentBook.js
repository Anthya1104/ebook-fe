import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookCover from '../../../../img/book.jpg'
import ArrowRight from '../../../../img/recent_book_arrow_r.svg'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import Button from 'react-bootstrap/Button'
// Popup Window Importing
import Popup from 'reactjs-popup'
// Star Rating Importing
import StarRating from './StarRating'
// reactToastify importing
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// test avatar img importing
import Avatar from '../../../../img/book.jpg'
// auth
import { useAuth } from '../../../../Context/auth'

import axios from 'axios'
import { API_URL } from '../../../../utils/config'

function RecentBook({ setGetRecentBookData }) {
  // auth
  const { member, setMember } = useAuth()
  // Chart.js states
  // 動態做法: https://www.youtube.com/watch?v=UwlaPofs5cA&ab_channel=SeemaHolidayDeveloper
  // const [data, setData] = useState(newdata)
  const [progressData, setProgressData] = useState(0)

  // data from star rating
  const [scoreFromStarRating, setScoreFromStarRating] = useState(0)

  // submitted data
  const [reviewParam, setReviewParam] = useState({
    member_id: '',
    book_id: '',
    review_score: 0,
    review_comments: '',
  })

  // data ready
  const [dataReady, setDataReady] = useState(false)

  // the most recent read book from DB
  const [recentBook, setRecentBook] = useState([])

  // the most recent read book mapping
  useEffect(() => {
    // call API
    const getRecentBook = async () => {
      let response = await axios.get(`${API_URL}/bookshelf/recent-book`, {
        withCredentials: true,
      })
      console.log('recentBook', response.data)
      setRecentBook(response.data)
      setGetRecentBookData(response.data)
      // console.log('recentbook', recentBook)

      // 設定閱讀進度
      setProgressData(response.data[0].reading_progress)
      // console.log('progressdata', progressData)
      // 設定評論book_id
      setReviewParam({
        ...reviewParam,
        book_id: response.data[0].product_id,
        member_id: response.data[0].member_id,
      })
    }
    getRecentBook()

  }, [])

  // 把starRating的分數存進submit data
  useEffect(() => {
    setReviewParam({ ...reviewParam, review_score: scoreFromStarRating })
  }, [scoreFromStarRating])

  const reviewOnChangeHandler = (e) => {
    setReviewParam({ ...reviewParam, review_comments: e.target.value })
  }

  // review post toastify
  // TODO:研究改顏色
  // https://fkhadra.github.io/react-toastify/how-to-style
  const notify = () =>
    toast.info('成功送出資料', {
      className: 'Bookshelf-toast-black-background',
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const warning = () =>
    toast.warn('請確認評論或評分是否填妥唷！', {
      className: 'Bookshelf-toast-black-background',
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const createRecentBook = (recentBook) => {
    return recentBook.map((recentBookValue) => {
      // console.log('recetnBookValue', recentBookValue)

      return (
        <>
          <div className="Bookshelf-mobile-recent-title">
            <h5>{recentBookValue.book_name}</h5>
            <h6>{recentBookValue.author}</h6>
          </div>
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
                  <Link to={`/Member/bookshelf/${recentBook[0].product_id}`}>
                    <Button className="btn btn-primary-reverse">
                      繼續閱讀
                    </Button>
                  </Link>
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
                                color={'#F5F5F5'}
                              />
                            </div>
                          </div>
                          {/* <input type="textarea" /> */}
                          <textarea
                            id="Bookshelf-popup-review-input"
                            col="4"
                            row="500"
                            placeholder="請輸入評論"
                            value={reviewParam.review_comments}
                            onChange={reviewOnChangeHandler}
                          ></textarea>
                          <div className="d-flex justify-content-end my-2 mx-3">
                            <Button
                              className="btn btn-primary mx-2"
                              onClick={() => {
                                setReviewParam({
                                  ...reviewParam,
                                  review_comments: '',
                                  review_score: 0,
                                })
                              }}
                            >
                              清空
                            </Button>
                            <Button
                              className="btn btn-primary"
                              onClick={() => {
                                if (
                                  !reviewParam.member_id ||
                                  !reviewParam.book_id ||
                                  !reviewParam.review_score ||
                                  !reviewParam.review_comments
                                ) {
                                  return warning()
                                }
                                console.log('資料送出', reviewParam)
                                setDataReady(true)
                                close()
                              }}
                            >
                              送出
                            </Button>
                          </div>
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

  // 確定review Data 都有存到 -> post request
  useEffect(() => {
    if (!dataReady) {
      return console.log('資料不齊全喔')
    }
    const submitReview = async () => {
      let response = await axios.post(
        `${API_URL}/reviews/post-review`,
        reviewParam,
        { withCredentials: true }
      )
      setDataReady(false)
      // TODO:還有問題
      if (response.request.status === 400) {
        return alert('沒有成功儲存喔')
      }

      notify()
    }
    submitReview()
  }, [dataReady])

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
      {console.log(recentBook.length)}
      {recentBook.length === 0 ? (
        <div className="Bookshelf-nonbook-info d-flex justify-content-center">
          <h3>這個帳號目前沒有任何藏書唷</h3>
        </div>
      ) : (
        createRecentBook(recentBook)
      )}
      {/* {console.log('createRecentBook', createRecentBook(recentBook))} */}

      {/* success toast */}
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default RecentBook
