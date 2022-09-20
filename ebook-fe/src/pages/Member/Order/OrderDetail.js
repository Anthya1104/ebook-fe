import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Book from '../../../img/book.jpg'
import Chat from '../../../img/Chat.png'
import Back from '../../../img/Back.png'
import DetailLine from '../../../img/DetailLine.png'
import DetailDash from '../../../img/DetailDash.svg'
import data from './OrderDetailData.json'
import '../../../style/Order.scss'

function OrderDetail() {
  const { orderId } = useParams()
  return (
    <>
      <div className="container">
        {data.filter((v, i) => {
          return (v.order_id = 1(console.log(data)))
        })}
        <Card sx={{ maxWidth: 1067, height: 200 }}>
          <div className="orderCardBackground">
            <CardContent>
              <div className="d-flex justify-content-center">
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className="mb-3 text-white "
                >
                  訂單總額:$800
                </Typography>
              </div>
              <div className="d-flex justify-content-center">
                <Typography
                  variant="body1"
                  color="text.secondary"
                  className=" mb-3 text-white"
                >
                  訂單日期:2022/09
                </Typography>
              </div>
              <div className="d-flex justify-content-around">
                <div>
                  <Link className="mx-2" to="/Member/order">
                    <img src={Back} alt="Back" />
                  </Link>
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="mb-3 text-white"
                >
                  共10本<br></br>商品數量
                </Typography>
                <div>
                  <img className="img-fluid" src={DetailLine} alt="Line" />
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="mb-5 text-white"
                >
                  已完成<br></br>訂單狀態
                </Typography>
                <Link className="mx-2" to="/Chat">
                  <img src={Chat} alt="Chat" />
                </Link>{' '}
              </div>
            </CardContent>
          </div>
        </Card>
        {data.map((v, i) => {
          return (
            <Card sx={{ maxWidth: 1067, maxheight: 200 }}>
              <div className="row g-0">
                <div className="col-md-4 mobile-card">
                  <CardMedia
                    className="mx-2 my-2 shadow"
                    component="img"
                    image={Book}
                    alt="book"
                  />
                </div>
                <CardContent className="col-md-8">
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    className="mb-3 orderText"
                  >
                    原子習慣
                  </Typography>
                  <Typography variant="h6" className="mb-2 orderText">
                    細微改變帶來巨大成就的實證法則
                  </Typography>
                  <Typography variant="body2" className="mb-2 orderText">
                    作者：詹姆斯．克利爾
                  </Typography>
                  <Typography variant="body2" className="mb-3 orderText">
                    原文作者： James Clear
                  </Typography>
                  <Typography variant="body2" className="mb-3 orderText">
                    譯者： 蔡世偉
                  </Typography>
                  <Typography variant="body2" className="mb-3 orderText">
                    出版社：方智出版
                  </Typography>
                  <Typography variant="body2" className="mb-3 orderText">
                    出版日期：2019/06/01
                  </Typography>
                  <Typography variant="body2" className="mb-3 orderText">
                    語言：繁體中文
                  </Typography>{' '}
                </CardContent>
                <img className="img-fluid" src={DetailDash} alt="Dash"></img>
              </div>
            </Card>
          )
        })}
        <div>OrderDetail:{orderId}</div>
      </div>
    </>
  )
}

export default OrderDetail
