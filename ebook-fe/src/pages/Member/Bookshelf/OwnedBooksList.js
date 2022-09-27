import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'
import Bookcover from '../../../img/book.jpg'
// img arrow
import ArrowRight from '../../../img/recent_book_arrow_r.svg'
// axios
import axios from 'axios'
import { API_URL } from '../../../utils/config'
// react-bootstrap
import Button from 'react-bootstrap/Button'
// MUI importing
import Box from '@mui/material/Box'
import { createTheme, styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import DropdownSelection from './Component/DropdownSelection'
// pagination
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { ThemeProvider } from '@emotion/react'

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

// MUI style palette

const theme = createTheme({
  palette: {
    primary: {
      main: '#B48C8C',
    },
  },
})

function OwnedBooksList() {
  // customized Category states
  const [getCategories, setGetCategories] = useState([])

  // 目前在哪個分類
  const [onCategory, setOnCategory] = useState({})

  // 先嘗試只篩類別
  const [onCategoryList, setOnCategoryList] = useState([])

  // 同時篩 類別, 閱讀進度, 日期sort
  // isRead -> 預設是 true 所以如果沒特別按 就是先選 true
  const [bookFilterParams, setBookFilterParams] = useState({
    category: 0,
    is_read: true,
    date_sort_toggled: true,
    search_param: '',
    on_page: 1,
  })

  //頁面資訊
  const [getPage, setGetPage] = useState({
    onPage: 1,
    totalPage: 1,
  })

  // isRead 切換
  // toggle reference: https://www.npmjs.com/package/react-toggle
  const [isRead, setIsRead] = useState(true)

  useEffect(() => {
    const getCategories = async () => {
      let response = await axios.get(`${API_URL}/bookshelf/custom-categories`, {
        withCredentials: true,
      })

      setGetCategories(response.data)
      console.log('firstRender', response.data)
      // setOnCategory(response.data[0])
    }
    getCategories()
  }, [])

  useEffect(() => {
    // console.log(onCategory)
    // console.log({ API_URL })
    // TODO:在這裡做 ownedBookList 切換
    // 把 Category post 到後端

    handleCategoryChange()
  }, [bookFilterParams])

  const distingReading = () => {
    if (isRead) {
      return (
        <>
          <div className="px-2">閱讀中</div>
          <div className="toggle-inside"></div>
        </>
      )
    }
    return (
      <>
        <div className="toggle-inside"></div>
        <div className="px-2">尚未閱讀</div>
      </>
    )
  }

  const handleCategoryChange = async () => {
    try {
      // console.log(onCategory)
      let response = await axios.post(
        `${API_URL}/bookshelf/on-filter`,
        { bookFilterParams },
        {
          withCredentials: true,
        }
      )
      console.log(response.data)

      if (response.data.data.length === 0) {
        setOnCategoryList(['nothing'])
        setGetPage({ ...getPage, totalPage: 1 })
        return
      }
      setOnCategoryList(response.data.data)
      setGetPage({ ...getPage, totalPage: response.data.pagination.lastPage })
    } catch (e) {
      console.error(e)
    }
  }

  const createBookList = (bookList) => {
    if (onCategoryList[0] === 'nothing') {
      // 如果沒抓到資料
      return <div>nothing</div>
    }

    return (
      <>
        <div
          key={bookList.id}
          className="Bookshelf-bookCollection position-relative"
        >
          <div className="Bookshelf-hover-area position-absolute"></div>
          <Link to={`${bookList.id}`}>
            <div className="bookCover">
              <img className="contain-fit" src={Bookcover} alt="bookCover" />
            </div>
          </Link>
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
            <li className="bookName d-flex justify-content-center">
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

  // pagination 用 change Page
  const handleChangePage = (event, newPage) => {
    setGetPage({ ...getPage, onPage: newPage })
    setBookFilterParams({ ...bookFilterParams, on_page: newPage })
    ScrollToTop()
  }

  // 分頁後向上捲動
  const ScrollToTop = () => {
    window.scrollTo(0, 450)
  }
  return (
    <>
      {/* TODO:卡片hover -> 用 onPointerEnter -> 1. 設定 container 包含 目前的 card 內容 -> 新增一個 position-absolute 且位置在 下方的 box -> 設定 overflow:hidden 先藏起來 -> const onPointerEnter = (e) => {} -> 使用state判別有沒有 onPointerEnter, 改變 state -> 三元判斷 */}
      {/* 卡片 hover 參考 : https://codepen.io/chhiring90/pen/zLJLBG */}
      {/* Customized Category */}
      <div className="Bookshelf-customized-category d-flex justify-content-between">
        <ul className="d-flex my-2 align-items-center">
          <li
            className={
              !onCategory.category_name
                ? 'p-2 d-flex align-items-center active'
                : 'p-2 d-flex align-items-center'
            }
            onClick={() => {
              setOnCategory('')
              setBookFilterParams({
                ...bookFilterParams,
                category: 0,
              })
            }}
          >
            <div className="btn">所有藏書</div>
          </li>
          {/* 把category 鋪出來 */}
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
                  setBookFilterParams({
                    ...bookFilterParams,
                    category: categoryValue.local_id,
                  })
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

        <div className="d-flex justify-content-end align-items-center">
          <button
            className={
              bookFilterParams.date_sort_toggled
                ? 'btn Bookshelf-date-sort'
                : 'btn Bookshelf-date-sort-toggled'
            }
            onClick={() => {
              setBookFilterParams({
                ...bookFilterParams,
                date_sort_toggled: !bookFilterParams.date_sort_toggled,
              })
            }}
          >
            {bookFilterParams.date_sort_toggled === true ? (
              <>
                <svg
                  width="23"
                  height="18"
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4998 7.75H16.2498C16.94 7.75 17.4998 7.19023 17.4998 6.5C17.4998 5.80977 16.94 5.25 16.2498 5.25H12.535C11.8447 5.25 11.285 5.80977 11.285 6.5C11.285 7.19023 11.8084 7.75 12.4998 7.75ZM12.4998 12.75H18.7498C19.44 12.75 19.9998 12.1902 19.9998 11.5C19.9998 10.8098 19.44 10.25 18.7498 10.25H12.535C11.8447 10.25 11.285 10.8098 11.285 11.5C11.285 12.1902 11.8084 12.75 12.4998 12.75ZM12.4998 2.75H13.7498C14.44 2.75 14.9647 2.19023 14.9647 1.5C14.9647 0.809766 14.4049 0.25 13.7498 0.25H12.4998C11.8096 0.25 11.2498 0.809766 11.2498 1.5C11.2498 2.19023 11.8084 2.75 12.4998 2.75ZM21.2498 15.25H12.535C11.8447 15.25 11.285 15.8098 11.285 16.5C11.285 17.1902 11.8447 17.75 12.535 17.75H21.2498C21.94 17.75 22.4998 17.1902 22.4998 16.5C22.4998 15.8098 21.9412 15.25 21.2498 15.25ZM7.51543 11.918L6.24981 13.3008V1.50117C6.24981 0.809766 5.69122 0.25 4.99981 0.25C4.3084 0.25 3.74981 0.809766 3.74981 1.50117V13.298L2.48418 11.918C2.23762 11.6491 1.90059 11.5125 1.56192 11.5125C1.2604 11.5125 0.957622 11.6211 0.717779 11.8412C0.208794 12.308 0.17481 13.0998 0.640865 13.6095L4.04321 17.363C4.51665 17.881 5.41274 17.881 5.88657 17.363L9.28891 13.6095C9.75532 13.0998 9.72094 12.3084 9.212 11.8412C8.77325 11.375 7.98418 11.4102 7.51543 11.918Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  width="23"
                  height="18"
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5803 17.0955C16.8186 17.3534 17.1507 17.5018 17.5023 17.5018C17.8539 17.5018 18.1859 17.3534 18.4242 17.0955L21.8621 13.3451C22.327 12.8373 22.2957 12.0442 21.784 11.5793C21.2722 11.1144 20.483 11.1457 20.0182 11.6575L18.7524 13.0365L18.7524 1.25013C18.7524 0.558646 18.1937 -6.0879e-06 17.5023 -6.02745e-06C16.8108 -5.967e-06 16.2521 0.558646 16.2521 1.25013L16.2521 13.0365L14.9864 11.6536C14.5215 11.1457 13.7284 11.1105 13.2206 11.5754C12.7127 12.0403 12.6775 12.8334 13.1424 13.3412L16.5803 17.0916L16.5803 17.0955ZM10.0015 17.5018C10.693 17.5018 11.2516 16.9432 11.2516 16.2517C11.2516 15.5602 10.693 15.0016 10.0015 15.0016L8.75135 15.0016C8.05987 15.0016 7.50122 15.5602 7.50122 16.2517C7.50122 16.9432 8.05987 17.5018 8.75135 17.5018L10.0015 17.5018ZM10.0015 12.5013C10.693 12.5013 11.2516 11.9427 11.2516 11.2512C11.2516 10.5597 10.693 10.001 10.0015 10.001L6.25108 10.001C5.55961 10.001 5.00095 10.5597 5.00095 11.2512C5.00095 11.9427 5.55961 12.5013 6.25108 12.5013L10.0015 12.5013ZM10.0015 7.50078C10.693 7.50078 11.2516 6.94213 11.2516 6.25065C11.2516 5.55917 10.693 5.00052 10.0015 5.00052L3.75082 5.00052C3.05934 5.00052 2.50069 5.55917 2.50069 6.25065C2.50069 6.94213 3.05934 7.50078 3.75082 7.50078L10.0015 7.50078ZM10.0015 2.50026C10.693 2.50026 11.2516 1.9416 11.2516 1.25013C11.2516 0.558647 10.693 -5.43216e-06 10.0015 -5.37171e-06L1.25056 -4.60668e-06C0.559079 -4.54623e-06 0.00042685 0.558648 0.00042691 1.25013C0.00042697 1.94161 0.559079 2.50026 1.25056 2.50026L10.0015 2.50026Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </>
            )}
            日期
          </button>
        </div>
      </div>
      {/* toggle */}
      <div className="Bookshelf-is-read-toggle">
        <button
          className={
            isRead
              ? 'd-flex align-items-center toggle-primary-active'
              : 'd-flex align-items-center toggle-primary'
          }
          onClick={() => {
            setIsRead(!isRead)
            setBookFilterParams({
              ...bookFilterParams,
              is_read: !bookFilterParams.is_read,
            })
          }}
        >
          {distingReading()}
        </button>
      </div>
      <div className="Bookshelf-on-category-list row row-cols-1 row-cols-md-4">
        {onCategoryList.map((listValue) => {
          return createBookList(listValue)
        })}
      </div>
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

export default OwnedBooksList
