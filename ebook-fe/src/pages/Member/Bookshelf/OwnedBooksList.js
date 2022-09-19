import React from 'react'
import { useState, useEffect } from 'react'
import Bookcover from '../../../img/book.jpg'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import DropdownSelection from './Component/DropdownSelection'
// react-toggle importing

const customizedCategory = ['所有藏書', '奇幻類別', '自訂書單', '工作用書']

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
  const [onCategory, setOnCategory] = useState(customizedCategory[0])
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

  return (
    <>
      {/* 卡片 hover 參考 : https://codepen.io/chhiring90/pen/zLJLBG */}
      {/* Customized Category */}

      <div className="Bookshelf-customized-category d-flex justify-content-between">
        <ul className="d-flex my-2 align-items-center">
          {customizedCategory.map((categoryValue) => {
            return (
              <li
                key={categoryValue.indexOf()}
                className={
                  categoryValue === onCategory
                    ? 'p-2 d-flex align-items-center active'
                    : 'p-2 d-flex align-items-center'
                }
                onClick={() => {
                  setOnCategory(categoryValue)
                }}
              >
                {categoryValue}
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

      {/* 自切card */}
      <div className="d-flex m-2">
        <div className="Bookshelf-bookCollection m-2 ">
          <div className="bookCover d-flex-column align-items-center justify-content-center">
            <img className="contain-fit" src={Bookcover} alt="bookCover" />
          </div>
          <ul className="my-2 d-flex-column justify-content-center align-items-center">
            <li className="d-flex justify-content-center align-items-center">
              <Box sx={{ width: 115, left: 5 }}>
                <BookLinearProgress variant="determinate" value={50} />
              </Box>
              <h6 className="mx-1">50%</h6>
            </li>
            <li className="d-flex justify-content-center">
              間歇高效率的番茄工作法
            </li>
            <li className="Bookshelf-book-author d-flex justify-content-center">
              法蘭西斯.西里洛
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default OwnedBooksList
