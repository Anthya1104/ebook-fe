import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import DatePick from './Component/DatePick'
// import Pagination from './Component/Pagination'
// import FilterBar from './Component/FilterBar'
import Book from '../../../img/book.jpg'
import BreadCrumb from './Component/BreadCrumb'
import Tab from './Component/Tab'
import ScrollToTop from './Component/ScrollToTop'
import line from '../../../img/line.svg'
import dash from '../../../img/dash.svg'
import { data } from './OrderData'
import '../../../style/Order.scss'

function Orders() {
  // 訂單用的資料
  // 1. 從伺服器來的原始資料
  const [orders, setOrders] = useState([])
  // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
  const [displayOrders, setDisplayOrders] = useState([])

  // 下面四個狀態是對應兩種不同的訂單
  const [tabs, setTabs] = useState([])
  const tabTypes = ['已完成', '已取消']

  // radio
  // const [priceRange, setPriceRange] = useState('所有')
  // const priceRangeTypes = ['所有', '1萬以下', '1~2萬']

  const [searchWord, setSearchWord] = useState('')
  // const [sortBy, setSortBy] = useState('')

  // 初始化資料-didMount
  useEffect(() => {
    // 模擬和伺服器要資料
    // 最後設定到狀態中
    setOrders(data)
    setDisplayOrders(data)
  }, [])

  // 四個表單元素的處理方法
  const handleSearch = (orders, searchWord) => {
    let newOrders = [...orders]
    // filter用法
    if (searchWord.length) {
      newOrders = orders.filter((order) => {
        // includes -> String API
        return order.sn.includes(searchWord)
      })
    }

    return newOrders
  }
  const handleTabs = (orders, tags) => {
    let newOrders = [...orders]

    // tags = 代表使用者目前勾選的標籤陣列
    //console.log(tags)

    // 處理勾選標記
    if (tabs.length > 0) {
      newOrders = [...newOrders].filter((order) => {
        let isFound = false

        // 原本資料裡的tabs字串轉為陣列
        const orderTabs = order.tabs.split(',')

        // 用目前使用者勾選的標籤用迴圈找，有找到就回傳true
        for (let i = 0; i < tabs.length; i++) {
          // includes -> Array api
          if (orderTabs.includes(tabs[i])) {
            isFound = true // 找到設為true
            break // 找到一個就可以，中斷迴圈
          }
        }

        return isFound
      })
    }

    return newOrders
  }
  useEffect(() => {
    // 搜尋字串太少不需要搜尋
    if (searchWord.length < 3 && searchWord.length !== 0) return

    let newOrders = []

    // 處理搜尋
    newOrders = handleSearch(orders, searchWord)

    // 處理勾選標記
    newOrders = handleTabs(newOrders, tabs)

    setDisplayOrders(newOrders)
  }, [searchWord, orders, tabs])

  return (
    <>
      <div className="container">
        {/* <FilterKeyword /> */}

        <ScrollToTop />
        <BreadCrumb />
        <img className="img-fluid" src={line} alt="line" />
        <div className="d-flex justify-content-end">
          <DatePick />
        </div>
        <Tab tabTypes={tabTypes} tabs={tabs} setTabs={setTabs} />
        {data.map((v, i) => {
          return (
            <Card sx={{ maxwidth: 1067 }} className="mb-3">
              <div className="row">
                <div className="col-md-4 mobile-card">
                  <CardMedia
                    className="mx-2 my-2 shadow book-cover"
                    component="img"
                    image={v.book_img}
                    alt="book"
                  />
                </div>
                <CardContent className="col-md-8">
                  <Typography variant="body1" className="mb-3 orderText">
                    訂單編號:{v.sn}
                  </Typography>
                  <Typography variant="body1" className="mb-3 orderText">
                    訂單狀態:{v.status}
                  </Typography>
                  <Typography variant="body1" className="mb-3 orderText">
                    訂單日期:{v.date}
                  </Typography>
                  <Typography variant="body1" className="mb-3 orderText">
                    商品數量
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="mb-3 orderText"
                  >
                    <img className="img-fluid" src={dash} alt="dash" />
                    <br></br>
                    尚未評價
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="mb-5 orderText"
                  >
                    <img className="img-fluid" src={dash} alt="dash" />
                    <br></br>
                    訂單總額:
                  </Typography>
                  <CardActions className="justify-content-center">
                    <Link className="mx-2" to={`${v.id}`}>
                      <button className="btn btn-primary ">完整訂單</button>
                    </Link>
                  </CardActions>
                </CardContent>
              </div>
            </Card>
          )
        })}
        {/* <Pagination /> */}
      </div>
    </>
  )
}

export default Orders
