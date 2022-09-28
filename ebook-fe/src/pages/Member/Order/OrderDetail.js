import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../../utils/config'
import { useAuth } from '../../../Context/auth'
import { Link, useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Chat from '../../../img/Chat.png'
import Back from '../../../img/order-back.png'
import DetailLine from '../../../img/DetailLine.png'
import DetailDash from '../../../img/DetailDash.svg'
import ScrollToTop from './Component/ScrollToTop'
import '../../../style/Order.scss'

function OrderDetail() {
  const { member, setMember } = useAuth()
  const { orderId } = useParams()
  const [orderDetail, setOrderDetail] = useState([])
  const [orderDate, setOrderDate] = useState('')
  const [orderStatus, setOrderStatus] = useState('')
  const [orderTotal, setOrderTotal] = useState('')
  const [orderAmount, setOrderAmount] = useState('')
  useEffect(() => {
    const getOrder = async () => {
      let response = await axios.get(
        `${API_URL}/order/get-order?member_id=${member.id}&order=${orderId}`,
        { withCredentials: true }
      )
      console.log('orderDetail', response.data.detailData)
      setOrderDetail(response.data.detailData)
      setOrderDate(response.data.detailData[0].date)
      setOrderStatus(response.data.detailData[0].status)
      setOrderTotal(response.data.priceDetail.itemsPrice)
      setOrderAmount(response.data.priceDetail.totalItems)
    }
    getOrder()
  }, [])

  const createOrderDate = () => {
    return (
      <>
        <div>訂單日期:{orderDate}</div>
      </>
    )
  }

  const createOrderStatus = () => {
    return (
      <>
        <div>&nbsp;&nbsp;{orderStatus}</div>
      </>
    )
  }

  const createOrderTotal = () => {
    return <>訂單總額:{orderTotal}</>
  }

  const createOrderAmount = () => {
    return <>{orderAmount}</>
  }

  return (
    <>
      <div className="container">
      <ScrollToTop />
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
                  {createOrderTotal()}
                </Typography>
              </div>

              <div className="d-flex justify-content-center">
                <Typography
                  variant="body1"
                  color="text.secondary"
                  className=" mb-3 text-white"
                >
                  {createOrderDate()}
                </Typography>
              </div>
              <div className="d-flex justify-content-around">
                <div>
                  <Link className="mx-2" to="/Member/order">
                    <img src={Back} alt="" />
                  </Link>
                  <br></br>
                  <h5 className="mx-2 text-white">返回</h5>
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="mb-3 text-white"
                >
                  {/* 透過後端求總比數 */}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{createOrderAmount()}<br></br>商品數量
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
                  {createOrderStatus()}
                  訂單狀態
                </Typography>
                <div>
                  <Link className="mx-2" to="/Chat">
                    <img src={Chat} alt="Chat" />
                  </Link>
                  <br></br>
                  <h5 className="text-white">詢問客服</h5>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
        {orderDetail &&
          orderDetail.map((v, i) => {
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
                      className="mb-3"
                    >
                      {v.book_name}
                    </Typography>
                    <Typography variant="h6" className="mb-2">
                      {v.book_subtitle}
                    </Typography>
                    <Typography variant="body2" className="mb-2 orderText">
                      作者：{v.author}
                    </Typography>
                    <Typography variant="body2" className="mb-3 orderText">
                      譯者： {v.translator}
                    </Typography>
                    <Typography variant="body2" className="mb-3 orderText">
                      出版社：{v.publisher}
                    </Typography>
                    <Typography variant="body2" className="mb-3 orderText">
                      出版日期：{v.publication_date}
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
      </div>
    </>
  )
}

export default OrderDetail
