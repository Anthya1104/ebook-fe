import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { API_URL } from '../../../utils/config'
import { Link, Navigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Book from '../../../img/book.jpg'
import BreadCrumb from './Component/BreadCrumb'
import ScrollToTop from './Component/ScrollToTop'
import line from '../../../img/line.svg'
import example from '../../../img/order_example.svg'
import dash from '../../../img/dash.svg'
import '../../../style/Order.scss'
import { useAuth } from '../../../Context/auth'
import { toast } from 'react-toastify'
import Chat from '../../../img/Chat.png'

function Orders() {
  const { member, setMember } = useAuth()
  console.log('member from context', member.id)
  useEffect(() => {
    const getOrder = async () => {
      let response = await axios.get(
        `${API_URL}/order/get-order?member_id=${member.id}`,
        {
          withCredentials: true,
        }
      )
      setOrder(response.data)
      setFilterOrder(response.data)
      console.log('data', order.length)
    }
    getOrder()
  }, [])
  const [order, setOrder] = useState([])
  const [filterOrder, setFilterOrder] = useState([])
  // 日期篩選、狀態篩選
  const onButtonClick = (key, e) => {
    let cTemp = []
    switch (key) {
      case 'dateRange1':
        const startDate1 = new Date('2022-09-03')
        const endDate1 = new Date('2022-10-03')
        cTemp = [...order].filter((od) => {
          const orderDate = new Date(od.date)
          return orderDate - startDate1 > 0 && endDate1 - orderDate > 0
        })
        break
      case 'dateRange2':
        const startDate2 = new Date('2022-06-03')
        const endDate2 = new Date('2022-09-03')
        cTemp = [...order].filter((od) => {
          const orderDate2 = new Date(od.date)
          return orderDate2 - startDate2 > 0 && endDate2 - orderDate2 > 0
        })
        break
      case 'dateRange3':
        const startDate3 = new Date('2022-03-03')
        const endDate3 = new Date('2022-09-03')
        cTemp = [...order].filter((od) => {
          const orderDate3 = new Date(od.date)
          return orderDate3 - startDate3 > 0 && endDate3 - orderDate3 > 0
        })
        break
      case 'dateRange4':
        const startDate4 = new Date('2021-09-03')
        const endDate4 = new Date('2022-09-03')
        cTemp = [...order].filter((od) => {
          const orderDate4 = new Date(od.date)
          return orderDate4 - startDate4 > 0 && endDate4 - orderDate4 > 0
        })
        break
      case 'all':
        cTemp = [...order].filter((od) => {
          return od.status === '已完成' && '已取消'
        })
        break
      case 'notFinished':
        cTemp = [...order].filter((od) => {
          return od.status === '已取消'
        })
        break
      case 'finished':
        cTemp = [...order].filter((od) => {
          return od.status === '已完成'
        })
        break
      default:
        cTemp = [...order]
        break
    }
    setFilterOrder(cTemp)
  }

  const inputValue1 = useRef(undefined)

  const onSnSearchClick = (e) => {
    e.preventDefault()
    const uniqueIds = []
    const inputString = inputValue1.current.value
    let tags = inputString.split(',').map((tag) => tag.replaceAll(' ', ''))
    let searchSn = []
    for (let tag of tags) {
      let tmpAry = [...order].filter((book) => book.sn.indexOf(tag) !== -1)
      searchSn = searchSn.concat([...tmpAry])
    }
    const unique = searchSn.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.id)
      if (!isDuplicate) {
        uniqueIds.push(element.id)
        return true
      }
      return false
    })
    setFilterOrder(unique)
  }

  return (
    <>
      {/* {(() => {
        if (order.length === 0) {
          alert('尚無訂單，請先到商品頁購書喔!')
          return (
            <>
              <Navigate to="/Cart/product-list" />
            </>
          )
        }
      })()} */}
      <div className="container">
        <BreadCrumb />
        <ScrollToTop />
        <img className="img-fluid" src={line} alt="line" />
        <div className="mobile-search">
          <div className="mb-3 d-flex justify-content-end">
            <input ref={inputValue1} type="text" placeholder="搜尋訂單編號" />
            <div>
              <button
                onClick={onSnSearchClick}
                className="ms-2 btn btn-primary"
              >
                搜尋
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              onClick={(e) => {
                onButtonClick('dateRange1', e)
              }}
            />
            <label className="form-check-label" for="inlineRadio1">
              近1個月
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              onClick={(e) => {
                onButtonClick('dateRange2', e)
              }}
            />
            <label className="form-check-label" for="inlineRadio2">
              近3個月
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              onClick={(e) => {
                onButtonClick('dateRange3', e)
              }}
            />
            <label className="form-check-label" for="inlineRadio3">
              近6個月
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              onClick={(e) => {
                onButtonClick('dateRange4', e)
              }}
            />
            <label className="form-check-label" for="inlineRadio3">
              近1年
            </label>
          </div>
        </div>

        <div className="Order-tabs animate__animated animate__fadeInDown">
          <Button
            className="tab_background btn-primary-reverse"
            onClick={(e) => {
              onButtonClick('', e)
            }}
          >
            <div className="btn_word">所有訂單</div>
          </Button>
          <Button
            className="tab_background btn-primary-reverse tab_fix
            "
            onClick={(e) => {
              onButtonClick('finished', e)
            }}
          >
            <div className="btn_word">已完成</div>
          </Button>
          <Button
            className="tab_background btn-primary-reverse tab_fix
            "
            onClick={(e) => {
              onButtonClick('notFinished', e)
            }}
          >
            <div className="btn_word">已取消</div>
          </Button>
        </div>

        {filterOrder &&
          filterOrder.map((o, i) => (
            <Card
              sx={{ maxwidth: 1067 }}
              className="mb-2 animate__animated animate__fadeInUp"
              key={`order${i}`}
            >
              <div className="row">
                <div className="col-md-5 mobile-card">
                  <CardMedia
                    className="mx-2 my-3 shadow book-cover"
                    component="img"
                    image={example}
                    alt="book"
                  />
                </div>
                <CardContent className="col-md-5">
                  <Typography
                    variant="body1"
                    className="orderText mb-3 order-mobile-text"
                  >
                    訂單編號:{o.sn}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="orderText mb-3 order-mobile-text"
                  >
                    訂單狀態:{o.status}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="orderText mb-3 order-mobile-text"
                  >
                    訂單日期:{o.date}
                  </Typography>
                  <Typography
                    variant="h5"
                    className="orderText mb-1 order-mobile-text"
                  >
                    優惠金額:{o.discount}
                  </Typography>
                  <Typography
                    variant="h5"
                    className="orderText order-mobile-text"
                  >
                    訂單總額:{o.total}
                  </Typography>
                  <div className="d-flex">
                    <CardActions className="col justify-content-center detail-icon">
                      <Link to={`${o.id}`}>
                        <Button className="o-button btn-primary-reverse">
                          完整訂單
                        </Button>
                      </Link>
                    </CardActions>
                    <CardActions>
                      <Link className="mx-2" to="/Chat">
                        <img className="chat-icon" src={Chat} alt="Chat" />
                      </Link>
                      <h5 className="text-white">詢問客服</h5>
                    </CardActions>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
      </div>
    </>
  )
}

export default Orders
