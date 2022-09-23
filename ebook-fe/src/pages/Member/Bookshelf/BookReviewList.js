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
// axios
import axios from 'axios'
// API URL
import { API_URL } from '../../..//utils/config'
import { ThemeProvider } from '@emotion/react'

function BookReviewList() {
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

  // MUI style palette

  const theme = createTheme({
    palette: {
      primary: {
        main: '#B48C8C',
      },
    },
  })

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
          `${API_URL}/reviews/get-reviews?page=${getPage.onPage}`
        )

        setGetReview(response.data.data)
        setGetPage({ ...getPage, totalPage: response.data.pagination.lastPage })
      }
      reviewData()
    } catch (e) {
      console.error(e)
    }
  }, [getPage.onPage])

  // 回傳start score
  useEffect(() => {
    setScoreFromStarRating(value)
  }, [value])

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

  const ScrollToTop = () => {
    window.scrollTo(0, 450)
  }
  return (
    <>
      {getReview.map((reviewValue) => {
        return (
          <>
            <div
              key={reviewValue.id}
              className="Bookshelf-review-container row"
            >
              <div className="col-sm-3">
                <div className="Bookshelf-book-card m-2">
                  <div className="Bookshelf-card-img mb-2">
                    <img
                      alt="bookCover"
                      src={BookCover}
                      className="cover-fit"
                    ></img>
                  </div>
                  {/* star rating */}
                  <div>
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
                  </div>
                  <div className="Review-book-name">
                    {reviewValue.book_name}
                  </div>
                  <div className="Review-update-time">
                    {reviewValue.create_time}
                  </div>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="Review-comments m-2 p-3">
                  <p>{reviewValue.content}</p>
                </div>
                <div className="Review-comments-btn m-2">
                  <Button className="btn btn-primary-reverse m-2">編輯</Button>
                  <Button className="btn btn-primary-reverse m-2">刪除</Button>
                </div>
              </div>
            </div>
          </>
        )
      })}
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
                count={getPage.totalPage}
                color="primary"
                page={getPage.onPage}
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
