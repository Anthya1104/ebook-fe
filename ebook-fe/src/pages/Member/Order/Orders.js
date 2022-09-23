import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
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
import ScrollToTop from './Component/ScrollToTop'
import line from '../../../img/line.svg'
import dash from '../../../img/dash.svg'
import { data } from './OrderData'
import '../../../style/Order.scss'

function Orders() {
  const [order, setOrder] = useState(data)
  
  const onButtonClick = (key, e) => {
    let cTemp = []
    switch (key) {
      case 'notFinished':
        cTemp = [...data].filter((od) => {
          return od.status === '已取消'
        })
        break
      case 'finished':
        cTemp = [...data].filter((od) => {
          return od.status === '已完成'
        })
        break
      default:
        cTemp = [...data]
        break
    }
    setOrder(cTemp)
  }
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
        
        <div>
        <Button
        className={
          onButtonClick === 'totalOrder'
            ? 'btn  tab_background btn-primary-reverse SingleOrder-active-state'
            : 'btn  tab_background btn-primary-reverse '
        }
        onClick={(e) => {
          onButtonClick('', e)
        }}
      >
        <p className="btn_word">所有訂單</p>
      </Button>
      <Button
        className={
          onButtonClick === 'finishOrder'
            ? 'btn  tab_background btn-primary-reverse tab_fix SingleOrder-active-state'
            : 'btn  tab_background btn-primary-reverse tab_fix'
        }
        onClick={(e) => {
          onButtonClick('finished', e)
        }}
      >
        <p className="btn_word">已完成</p>
      </Button>
      <Button
        className={
          onButtonClick === 'cancelOrder'
            ? 'btn  tab_background btn-primary-reverse tab_fix SingleOrder-active-state'
            : 'btn  tab_background btn-primary-reverse tab_fix '
        }
        onClick={(e) => {
          onButtonClick('notFinished', e)
        }}
      >
        <p className="btn_word">已取消</p>
      </Button>
        </div>
        {order && order.map((o, i) => (
              <Card sx={{ maxwidth: 1067 }} className="mb-3" key={`order${i}`}>
                <div className="row">
                  <div className="col-md-4 mobile-card">
                    <CardMedia
                      className="mx-2 my-2 shadow book-cover"
                      component="img"
                      image={o.book_img}
                      alt="book"
                    />
                  </div>
                  <CardContent className="col-md-8">
                    <Typography variant="body1" className="mb-3 orderText">
                      訂單編號:{o.sn}
                    </Typography>
                    <Typography variant="body1" className="mb-3 orderText">
                      訂單狀態:{o.status}
                    </Typography>
                    <Typography variant="body1" className="mb-3 orderText">
                      訂單日期:{o.date}
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
                      <Link className="mx-2" to={`${o.id}`}>
                        <button className="btn btn-primary ">完整訂單</button>
                      </Link>
                    </CardActions>
                  </CardContent>
                </div>
              </Card>
            ))}
        {/* <Pagination /> */}
      </div>
    </>
  )
}

export default Orders
