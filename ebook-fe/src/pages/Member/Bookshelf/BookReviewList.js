import React, { useState, useEffect } from 'react'
// test bookCover Importing
import BookCover from '../../../img/book.jpg'
// Star Rating
import { createTheme, styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarRate from '@mui/icons-material/StarRate'
// pagination
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

// img arrow
import ArrowRight from '../../../img/recent_book_arrow_r.svg'
// React Bootstra
import Button from 'react-bootstrap/Button'
// reactToastify importing
// 不用放 container -> 因為 recentBook 那個 component 已經放了
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// axios
import axios from 'axios'
// API URL
import { API_URL } from '../../..//utils/config'
import { ThemeProvider } from '@emotion/react'

// auth
import { useAuth } from '../../../Context/auth'

function BookReviewList() {
  // auth
  const { member, setMember } = useAuth()
  const [scoreFromStarRating, setScoreFromStarRating] = useState(0)

  // star Rating
  const [value, setValue] = useState(0)

  // 接收 review 資料
  const [getReview, setGetReview] = useState([])

  //頁面資訊
  const [getPage, setGetPage] = useState({
    onPage: 1,
    totalPage: 1,
  })

  // isEdit
  const [isEdit, setIsEdit] = useState('')

  // editted parameter
  const [reviewParam, setReviewParam] = useState({
    member_id: '',
    book_id: '',
    review_score: '',
    review_comments: '',
  })

  // data ready
  const [reviewDataReady, setReviewDataReady] = useState(false)

  // MUI style palette

  const theme = createTheme({
    palette: {
      primary: {
        main: '#B48C8C',
      },
      secondary: {
        main: '#F5F5F5',
      },
    },
  })

  // review post toastify
  // TODO:研究改顏色
  // https://fkhadra.github.io/react-toastify/how-to-style
  const notifyDownSide = () =>
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

  // create review handler
  const createReviewHandler = () => {
    return getReview.map((reviewValue) => {
      return (
        <>
          <div
            key={reviewValue.id}
            className={
              reviewValue.book_name === isEdit
                ? 'Bookshelf-review-container Bookshelf-review-container-active row'
                : 'Bookshelf-review-container row'
            }
          >
            <div className="col-sm-3">
              <div className="Bookshelf-book-card m-2">
                <div className="Bookshelf-card-img mb-2">
                  <img
                    alt={reviewValue.book_name}
                    src={reviewValue.book_img}
                    className="cover-fit"
                  ></img>
                </div>
                {/* star rating */}
                <div>
                  {reviewValue.book_name === isEdit ? (
                    <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <StyledRatingOnEdit
                        name="simple-controlled"
                        defaultValue={reviewParam.review_score}
                        onChange={(event, newValue) => {
                          setValue(newValue)
                        }}
                        icon={<StarRate fontSize="30px" />}
                        emptyIcon={<StarOutlineIcon fontSize="25px" />}
                      />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <StyledRating
                        name="simple-controlled"
                        defaultValue={reviewValue.star_rating}
                        onChange={(event, newValue) => {
                          setValue(newValue)
                        }}
                        icon={<StarRate fontSize="30px" />}
                        emptyIcon={<StarOutlineIcon fontSize="25px" />}
                        readOnly
                      />
                    </Box>
                  )}
                </div>
                <div className="Review-book-name">{reviewValue.book_name}</div>
                <div
                  className={
                    reviewValue.book_name === isEdit
                      ? 'Review-update-time-active'
                      : 'Review-update-time'
                  }
                >
                  {reviewValue.create_time}
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              {reviewValue.book_name === isEdit ? (
                <Button
                  className="Review-close-btn btn btn-primary rounded-circle"
                  onClick={() => {
                    setIsEdit('')
                  }}
                >
                  &times;
                </Button>
              ) : (
                <></>
              )}

              {reviewValue.book_name === isEdit ? (
                <textarea
                  value={reviewParam.review_comments}
                  className="Review-comment-input"
                  placeholder={reviewValue.content}
                  onChange={(e) => {
                    setReviewParam({
                      ...reviewParam,
                      member_id: member.id,
                      book_id: reviewValue.product_id,
                      review_comments: e.target.value,
                    })
                  }}
                ></textarea>
              ) : (
                <div className="Review-comments m-2 p-3">
                  <p>{reviewValue.content}</p>
                </div>
              )}
              {reviewValue.book_name === isEdit ? (
                <div className="Review-comments-btn m-2">
                  <Button
                    name={reviewValue.book_name}
                    className="btn btn-primary-reverse m-2"
                    onClick={(e) => {
                      setReviewParam({
                        ...reviewParam,
                        book_id: '',
                        review_comments: '',
                        review_score: '',
                      })
                    }}
                  >
                    清空
                  </Button>
                  <Button
                    className="btn btn-primary-reverse m-2"
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
                      setReviewDataReady(true)
                    }}
                  >
                    儲存
                  </Button>
                </div>
              ) : (
                <div className="Review-comments-btn m-2">
                  <Button
                    name={reviewValue.book_name}
                    className="btn btn-primary-reverse m-2"
                    onClick={(e) => {
                      editHandler(e)
                    }}
                  >
                    編輯
                  </Button>
                  <Button className="btn btn-primary-reverse m-2">刪除</Button>
                </div>
              )}
            </div>
          </div>
        </>
      )
    })
  }
  // editHandler
  const editHandler = (e) => {
    setIsEdit(e.target.name)
    // e.target.parentNode.parentNode.parentNode.className =
    //   'Bookshelf-review-container row Bookshelf-review-container-active'
    console.log('isedit', e.target.name)
  }

  // pagination 用 change Page
  const handleChangePage = (event, newPage) => {
    setGetPage({ ...getPage, onPage: newPage })
    ScrollToTop()
  }

  // getPage改變 -> 先 render Review 資料
  useEffect(() => {
    try {
      const reviewData = async () => {
        let response = await axios.get(
          `${API_URL}/reviews/get-reviews?page=${getPage.onPage}`,
          {
            withCredentials: true,
          }
        )
        if (!response) {
          return setGetPage({ ...getPage, totalPage: 1 })
        }

        setGetReview(response.data.data)
        setGetPage({ ...getPage, totalPage: response.data.pagination.lastPage })
      }
      reviewData()
    } catch (e) {
      console.error(e)
    }
  }, [getPage.onPage])

  // 儲存start score
  useEffect(() => {
    setReviewParam({ ...reviewParam, review_score: value })
  }, [value])

  // 送出 review
  useEffect(() => {
    if (!reviewDataReady) {
      return console.log('資料不齊全喔')
    }
    const submitReview = async () => {
      let response = await axios.post(
        `${API_URL}/reviews/post-review`,
        reviewParam,
        { withCredentials: true }
      )
      setReviewDataReady(false)
      // TODO:還有問題
      if (response.request.status === 400) {
        return alert('沒有成功儲存喔')
      }

      notifyDownSide()
      setIsEdit('')
    }
    submitReview()
  }, [reviewDataReady])

  // default
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconEmpty': {
      color: '#661F1E',
    },
    '& .MuiRating-iconFilled': {
      color: '#661F1E',
    },
    '& .MuiRating-iconHover': {
      color: '#661F1E',
    },
  })
  // isEdit
  const StyledRatingOnEdit = styled(Rating)({
    '& .MuiRating-iconEmpty': {
      color: '#F5F5F5',
    },
    '& .MuiRating-iconFilled': {
      color: '#F5F5F5',
    },
    '& .MuiRating-iconHover': {
      color: '#F5F5F5',
    },
  })

  const ScrollToTop = () => {
    window.scrollTo(0, 450)
  }
  return (
    <>
      {console.log('getreview', getReview)}
      {getReview.length === 0 ? (
        <div className="d-flex justify-content-center p-3">
          目前沒有留言，趕快去看書寫書評！
        </div>
      ) : (
        createReviewHandler()
      )}
      {/* pagination */}
      <div className="Reviews-pagination-area d-flex justify-content-center">
        <div
          className="prev"
          onClick={() => {
            setGetPage({
              ...getPage,
              onPage:
                getPage.onPage === 1 ? getPage.onPage : getPage.onPage - 1,
            })
            ScrollToTop()
          }}
        >
          <img
            className="Bookshelf-arrow img-flip m-2"
            alt="arrow-l"
            src={ArrowRight}
          />
        </div>
        <div className="Reviews-page-location m-2">
          {console.log(getPage.totalPage)}
          <ThemeProvider theme={theme}>
            <Stack spacing={2}>
              <Pagination
                count={getPage.totalPage || 1}
                color="primary"
                page={getPage.onPage || 1}
                hideNextButton={true}
                hidePrevButton={true}
                onChange={handleChangePage}
              />
            </Stack>
          </ThemeProvider>
        </div>
        <div
          className="next"
          onClick={() => {
            setGetPage({
              ...getPage,
              onPage:
                getPage.onPage === getPage.totalPage
                  ? getPage.onPage + 0
                  : getPage.onPage + 1,
            })
            ScrollToTop()
          }}
        >
          <img className="Bookshelf-arrow m-2" alt="arrow-r" src={ArrowRight} />
        </div>
      </div>
    </>
  )
}

export default BookReviewList
