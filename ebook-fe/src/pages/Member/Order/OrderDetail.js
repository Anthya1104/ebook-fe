import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Book from '../../../img/book.jpg'
import Chat from '../../../img/Chat.png'
import Back from '../../../img/Back.png'
import DetailLine from '../../../img/DetailLine.png'
import DetailDash from '../../../img/DetailDash.svg'
import '../../../style/Order.scss'

function OrderDetail() {
  const { orderId } = useParams()
  return (
    <>
      <div className="container">
        <Card sx={{ maxWidth: 1067, height: 200 }}>
          <div className="orderCardBackground">
            <CardContent>
              <div className="d-flex justify-content-center">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="mb-3 text-white "
                >
                  訂單總額:$800
                </Typography>
              </div>
              <div className="d-flex justify-content-center">
                <Typography
                  variant="body2"
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
                  <img src={DetailLine} alt="Line" />
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
        <Card sx={{ maxWidth: 1067, maxheight: 200 }} className="mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <CardMedia
                className="img-fluid"
                component="img"
                height="100"
                image={Book}
                alt="book"
              />
            </div>
            <CardContent className="col-md-8">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="mb-5"
              >
                原子習慣
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-2"
              >
                細微改變帶來巨大成就的實證法則
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-2"
              >
                作者：詹姆斯．克利爾
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                原文作者： James Clear
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                譯者： 蔡世偉
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                出版社：方智出版
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                出版日期：2019/06/01
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                語言：繁體中文
              </Typography>{' '}
            </CardContent>
            <img src={DetailDash} alt="Dash"></img>
            <div className="col-md-4">
              <CardMedia
                className="img-fluid"
                component="img"
                height="100"
                image={Book}
                alt="book"
              />
            </div>
            <CardContent className="col-md-8">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="mb-5"
              >
                原子習慣
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-2"
              >
                細微改變帶來巨大成就的實證法則
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-2"
              >
                作者：詹姆斯．克利爾
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                原文作者： James Clear
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                譯者： 蔡世偉
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                出版社：方智出版
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                出版日期：2019/06/01
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                語言：繁體中文
              </Typography>{' '}
            </CardContent>
            <img src={DetailDash} alt="Dash"></img>
            <div className="col-md-4">
              <CardMedia
                className="img-fluid"
                component="img"
                height="100"
                image={Book}
                alt="book"
              />
            </div>
            <CardContent className="col-md-8">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="mb-5"
              >
                原子習慣
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-2"
              >
                細微改變帶來巨大成就的實證法則
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-2"
              >
                作者：詹姆斯．克利爾
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                原文作者： James Clear
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                譯者： 蔡世偉
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                出版社：方智出版
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                出版日期：2019/06/01
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                語言：繁體中文
              </Typography>{' '}
            </CardContent>
            <img src={DetailDash} alt="Dash"></img>
            <div className="col-md-4">
              <CardMedia
                className="img-fluid"
                component="img"
                height="100"
                image={Book}
                alt="book"
              />
            </div>
            <CardContent className="col-md-8">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="mb-5"
              >
                原子習慣
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-2"
              >
                細微改變帶來巨大成就的實證法則
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-2"
              >
                作者：詹姆斯．克利爾
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                原文作者： James Clear
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                譯者： 蔡世偉
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                出版社：方智出版
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                出版日期：2019/06/01
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                語言：繁體中文
              </Typography>{' '}
            </CardContent>
            <img src={DetailDash} alt="Dash"></img>
            <div className="col-md-4">
              <CardMedia
                className="img-fluid"
                component="img"
                height="100"
                image={Book}
                alt="book"
              />
            </div>
            <CardContent className="col-md-8">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="mb-5"
              >
                原子習慣
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-2"
              >
                細微改變帶來巨大成就的實證法則
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-2"
              >
                作者：詹姆斯．克利爾
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                原文作者： James Clear
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                譯者： 蔡世偉
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                出版社：方智出版
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                出版日期：2019/06/01
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                語言：繁體中文
              </Typography>{' '}
            </CardContent>
          </div>
        </Card>
        <div>OrderDetail:{orderId}</div>
      </div>
    </>
  )
}

export default OrderDetail
