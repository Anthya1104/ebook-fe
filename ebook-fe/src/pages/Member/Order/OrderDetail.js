import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Chat from '../../../img/Chat.png'
import Back from '../../../img/Back.svg'
import DetailLine from '../../../img/DetailLine.png'
import DetailDash from '../../../img/DetailDash.svg'
import data from './newOrderDetail.json'
import '../../../style/Order.scss'

function OrderDetail() {
  const { orderId } = useParams()
  return (
    <>
      <div className="container">
        {/* {console.log(data[2].data)} */}

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
                  {/* 透過後端求總金額 */}
                  訂單總額:?
                </Typography>
              </div>

              <div className="d-flex justify-content-center">
                <Typography
                  variant="body1"
                  color="text.secondary"
                  className=" mb-3 text-white"
                >
                  {data.map((dateValue) => {
                    return (
                      <>
                        <div> 訂單日期：{dateValue.date}</div>
                      </>
                    )
                  })}
                </Typography>
              </div>
              <div className="d-flex justify-content-around">
                <div>
                  <Link className="mx-2" to="/Member/order">
                    <img src={Back} alt="Back" />
                  </Link><br></br>
                    <h5 className="mx-2 text-white">返回</h5>
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="mb-3 text-white"
                >
                  {/* 透過後端求總比數 */}
                  &nbsp;共10本<br></br>商品數量
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
                  {data.map((statusValue) => {
                    return (
                      <>
                        <div> &nbsp;&nbsp;{statusValue.status}</div>
                      </>
                    )
                  })}
                  訂單狀態
                </Typography>
                <div>
                <Link className="mx-2" to="/Chat">
                  <img src={Chat} alt="Chat" />
                </Link><br></br>
                <h5 className="text-white">詢問客服</h5>
                </div>
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
                    image={v.book_img}
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
                    {v.book_name}
                  </Typography>
                  <Typography variant="h6" className="mb-2 orderText">
                    {v.book_subtitle}
                  </Typography>
                  <Typography variant="body2" className="mb-2 orderText">
                    作者：{v.author}
                  </Typography>
                  <Typography variant="body2" className="mb-3 orderText">
                    譯者： {v.translator}
                  </Typography>
                  <Typography variant="body2" className="mb-3 orderText">
                    出版社：{v.book_subtitle}
                  </Typography>
                  <Typography variant="body2" className="mb-3 orderText">
                    出版日期：{v.publisher}
                  </Typography>
                  <Typography variant="body2" className="mb-3 orderText">
                    語言：{v.language}
                  </Typography>
                  <Typography variant="body2" className="mb-3 orderText">
                    售價：{v.price}
                  </Typography>
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
