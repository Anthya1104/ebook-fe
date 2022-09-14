import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DatePick from './Component/DatePick'
import Book from '../../../img/book.jpg'
import BreadCrumb from './Component/BreadCumb'
import line from '../../../img/line.svg'

function Orders() {
  const [date, setDate] = useState()
  console.log('Date', date)
  const orderId = 1
  return (
    <>
      <div className="container">
        <BreadCrumb />
        <img src={line} alt="line" />
        {/* <div className=""> */}
        <div className="d-flex justify-content-end">
          <DatePick />
        </div>
        <Card sx={{ maxWidth: 1067, height: 400 }} className="mb-3">
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
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單編號
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單狀態
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單日期
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                商品數量
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="border-bottom mb-3"
              >
                尚未評價
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="border-bottom mb-5"
              >
                訂單總額
              </Typography>{' '}
              <CardActions className="justify-content-center">
                <a href="#" className="btn btn-primary ">
                  完整訂單
                </a>
              </CardActions>
            </CardContent>
          </div>
        </Card>
        <Card sx={{ maxWidth: 1067, height: 400 }} className="mb-3">
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
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單編號
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單狀態
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單日期
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                商品數量
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="border-bottom mb-3"
              >
                尚未評價
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="border-bottom mb-3"
              >
                訂單總額
              </Typography>
              <CardActions className="justify-content-center">
                <a href="#" className="btn btn-primary ">
                  完整訂單
                </a>
              </CardActions>
            </CardContent>
          </div>
        </Card>
        <Card sx={{ maxWidth: 1067, height: 400 }} className="mb-3">
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
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單編號
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單狀態
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單日期
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                商品數量
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="border-bottom mb-3"
              >
                尚未評價
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="border-bottom mb-3"
              >
                訂單總額
              </Typography>
              <CardActions className="justify-content-center">
                <a href="#" className="btn btn-primary ">
                  完整訂單
                </a>
              </CardActions>
            </CardContent>
          </div>
        </Card>
        <Card sx={{ maxWidth: 1067, height: 400 }} className="mb-3">
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
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單編號
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單狀態
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                訂單日期
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-3"
              >
                商品數量
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="border-bottom mb-3"
              >
                尚未評價
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="border-bottom mb-3"
              >
                訂單總額
              </Typography>
              <CardActions className="justify-content-center">
                <a href="#" className="btn btn-primary ">
                  完整訂單
                </a>
              </CardActions>
            </CardContent>
          </div>
        </Card>
        {/* </div> */}
      </div>
      <Link className="mx-2" to={`${orderId}`}>
        Orderdetail
      </Link>
    </>
  )
}

export default Orders
