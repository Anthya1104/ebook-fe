import React from 'react'
import { useState, useEffect } from 'react'
import Bookcover from '../../../img/book.jpg'
// axios
import axios from 'axios'
import { API_URL } from '../../../utils/config'
// react-bootstrap
import Button from 'react-bootstrap/Button'
// MUI importing
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import DropdownSelection from './Component/DropdownSelection'

// customized MUI Linear Progress
const BookLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: 115,
  height: 8,
  borderRadius: 5,
  left: -5,
  top: -5,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 400 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#BF245D' : '#454545',
  },
}))

function OwnedBooksList() {
  // customized Category states
  const [getCategories, setGetCategories] = useState([])
  const [onCategory, setOnCategory] = useState('')
  // TODO: make a filter with all conditions
  // const [onFiltered, setOnfiltered]=useState([])
  // append各種狀況
  // 先嘗試只篩類別
  const [onCategoryList, setOnCategoryList] = useState([])
  useEffect(() => {
    const getCategories = async () => {
      let response = await axios.get(`${API_URL}/bookshelf/custom-categories`)

      setGetCategories(response.data)
      setOnCategory(response.data[0])
    }
    getCategories()
  }, [])

  useEffect(() => {
    // console.log(onCategory)
    // console.log({ API_URL })
    // TODO:在這裡做 ownedBookList 切換
    // 把 Category post 到後端
    const handleCategoryChange = async () => {
      try {
        // console.log(onCategory)
        let response = await axios.post(`${API_URL}/bookshelf/on-filter`, [
          onCategory.id,
        ])
        // console.log(response.data)

        // TODO: createBookList()
        // let filteredBookList = response.data
        // createBookList(filteredBookList)
        if (response.data.length === 0) {
          return setOnCategoryList(['nothing'])
        }
        setOnCategoryList(response.data)
      } catch (e) {
        console.error(e)
      }
    }
    handleCategoryChange()
  }, [onCategory])
  // TODO:處理 tab 切換
  // TODO:用 useEffect -> 每次 onCategory有變動 -> 用 axios 打 API 請求 讓後端重新傳資料

  // isRead 切換
  // toggle reference: https://www.npmjs.com/package/react-toggle
  const [isRead, setIsRead] = useState(false)
  const distingReading = () => {
    if (isRead) {
      return (
        <>
          <div className="px-2">閱讀中</div>
          <div className="toggle-inside"></div>
        </>
      )
    } else {
      return (
        <>
          <div className="toggle-inside"></div>
          <div className="px-2">尚未閱讀</div>
        </>
      )
    }
  }

  const createBookList = (bookList) => {
    if (onCategoryList[0] === 'nothing') {
      // 如果沒抓到資料
      return <div>nothing</div>
    }

    return (
      <>
        <div key={bookList.id} className="Bookshelf-bookCollection m-2 ">
          <div className="bookCover d-flex-column align-items-center justify-content-center">
            <img className="contain-fit" src={Bookcover} alt="bookCover" />
          </div>
          <ul className="my-2 d-flex-column justify-content-center align-items-center">
            <li className="d-flex justify-content-center align-items-center">
              <Box sx={{ width: 115, left: 5 }}>
                <BookLinearProgress
                  variant="determinate"
                  value={bookList.reading_progress}
                />
              </Box>
              <h6 className="mx-1">{bookList.reading_progress + '%'}</h6>
            </li>
            <li className="d-flex justify-content-center">
              {bookList.book_name}
            </li>
            <li className="Bookshelf-book-author d-flex justify-content-center">
              {bookList.author}
            </li>
          </ul>
        </div>
      </>
    )
  }

  return (
    <>
      {/* 卡片 hover 參考 : https://codepen.io/chhiring90/pen/zLJLBG */}
      {/* Customized Category */}
      <div className="Bookshelf-customized-category d-flex justify-content-between">
        <ul className="d-flex my-2 align-items-center">
          {getCategories.map((categoryValue) => {
            return (
              <li
                key={categoryValue.id}
                className={
                  categoryValue.category_name === onCategory.category_name
                    ? 'p-2 d-flex align-items-center active'
                    : 'p-2 d-flex align-items-center'
                }
                onClick={() => {
                  setOnCategory(categoryValue)
                }}
              >
                <div className="btn">{categoryValue.category_name}</div>
              </li>
            )
          })}

          <li className="p-2 d-flex align-items-center">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11.5" cy="11.5" r="11" stroke="#661F1E" />
              <rect
                x="4.17871"
                y="12.4276"
                width="2.35694"
                height="14.1416"
                rx="1.17847"
                transform="rotate(-90 4.17871 12.4276)"
                fill="#661F1E"
              />
              <rect
                width="2.35694"
                height="14.1416"
                rx="1.17847"
                transform="matrix(-1 4.21468e-08 4.21468e-08 1 12.6641 4.41431)"
                fill="#661F1E"
              />
            </svg>
          </li>
        </ul>
        {/* TODO: 如果還有時間再處理 先處理已讀未讀/分頁 */}
        {/* dropdown selection */}
        {/* <DropdownSelection /> */}
      </div>
      {/* toggle */}
      <div className="d-flex justify-content-end">
        <button
          className={
            isRead
              ? 'd-flex align-items-center toggle-primary-active'
              : 'd-flex align-items-center toggle-primary'
          }
          onClick={() => {
            setIsRead(!isRead)
          }}
        >
          {distingReading()}
        </button>
      </div>
      <div className="d-flex m-2">
        {onCategoryList.map((listValue) => {
          return createBookList(listValue)
        })}
      </div>
    </>
  )
}

export default OwnedBooksList
