import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import DatePick from './Component/DatePick'
import Pagination from './Component/Pagination'
import Book from '../../../img/book.jpg'
import BreadCrumb from './Component/BreadCrumb'
// import FilterKeyword from './Order/Component/FilterKeyword'
import ScrollToTop from './Component/ScrollToTop'
import line from '../../../img/line.svg'
import dash from '../../../img/dash.svg'
import data from './OrderData.json'
import '../../../style/Order.scss'

function Orders() {
  // const [Date, setDate] = useState()

  // console.log('Date', date)
  const orderId = 1
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
        {data.map((v, i) => {
          return (
            <Card sx={{ maxwidth: 1067 }} className="mb-3">
              <div className="row">
                <div className="col-md-4 mobile-card">
                  <CardMedia
                    className="mx-2 my-2 shadow book-cover"
                    component="img"
                    image={Book}
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
