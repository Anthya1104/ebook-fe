import React, { useState, useEffect } from 'react'
// test bookCover Importing
import BookCover from '../../../img/book.jpg'
// Star Rating
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarRate from '@mui/icons-material/StarRate'
// React Bootstra
import Button from 'react-bootstrap/Button'

function BookReviewList() {
  const [scoreFromStarRating, setScoreFromStarRating] = useState(0)

  // star Rating
  const [value, setValue] = useState(0)

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
  return (
    <>
      <div className="Bookshelf-review-container row ">
        <div className="col-sm-3">
          <div className="Bookshelf-book-card m-2">
            <div className="Bookshelf-card-img mb-2">
              <img alt="bookCover" src={BookCover} className="cover-fit"></img>
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
                  defaultValue={3}
                  onChange={(event, newValue) => {
                    setValue(newValue)
                  }}
                  icon={<StarRate fontSize="30px" />}
                  emptyIcon={<StarOutlineIcon fontSize="25px" />}
                />
              </Box>
            </div>
            <div className="Review-book-name">書名</div>
            <div className="Review-update-time">時間</div>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="Review-comments m-2 p-3">
            <p>
              愛對我來說，已經成為了我生活的一部分。現在，正視愛的問題，是非常非常重要的。因為，我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。既然，舒曼說過一句著名的話，時髦的玩藝兒，只要表面的光彩一。這段話雖短，卻足以改變人類的歷史。我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。我們都知道，只要有意義，那麼就必須慎重考慮。對我個人而言，愛不僅僅是一個重大的事件，還可能會改變我的人生。若發現問題比我們想像的還要深奧，那肯定不簡單。在人生的歷程中，愛的出現是必然的。
            </p>
          </div>
          <div className="Review-comments-btn m-2">
            <Button className="btn btn-primary-reverse m-2">編輯</Button>
            <Button className="btn btn-primary-reverse m-2">刪除</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookReviewList
