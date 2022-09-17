import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DatePick from './Component/DatePick'
import Pagination from './Component/Pagination'
import Book from '../../../img/book.jpg'
import BreadCrumb from './Component/BreadCrumb'
import ScrollToTop from './Component/ScrollToTop'
import line from '../../../img/line.svg'
import dash from '../../../img/dash.svg'
import data from './OrderData.json'
import '../../../style/Order.scss'

function Orders() {
  const [date, setDate] = useState()
  console.log('Date', date)
  const orderId = 1

  // const data = useMemo(() => data(111), [])

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   prepareRow,
  //   page,
  //   gotoPage,
  //   setPageSize,
  //   state: { pageSize },
  // } = useTable(
  //   {
  //     columns,
  //     data,
  //     initialState: { pageIndex: 0 },
  //   },
  //   usePagination
  // )
  return (
    <>
      <div className="container">
        <ScrollToTop />
        <BreadCrumb />
        <img src={line} alt="line" />
        <div className="d-flex justify-content-end">
          <DatePick />
        </div>
        {data.map((v, i) => {
          return (
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
                    <img src={dash} alt="dash" />
                    <br></br>
                    尚未評價
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="mb-5 orderText"
                  >
                    <img src={dash} alt="dash" />
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
        {/* <Pagination
          gotoPage={gotoPage}
          length={data.length}
          pageSize={pageSize}
          setPageSize={setPageSize}
        /> */}
      </div>
    </>
  )
}

export default Orders
