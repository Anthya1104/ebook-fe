import './OrderApp.css'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function OrderApp() {
  return (
    <>
      <Card sx={{ maxWidth: 1067, maxheight: 400 }} className="mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <CardMedia
              className="img-fluid"
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="book"
            />
          </div>
          <CardContent className="col-md-8">
            <Typography variant="body2" color="text.secondary">
              訂單編號
            </Typography>
            <Typography variant="body2" color="text.secondary">
              訂單狀態
            </Typography>
            <Typography variant="body2" color="text.secondary">
              訂單日期
            </Typography>
            <Typography variant="body2" color="text.secondary">
              商品數量
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="border-bottom"
            >
              尚未評價
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="border-bottom"
            >
              訂單總額
            </Typography>
          </CardContent>
          <CardActions className="justify-content-center">
            <a href="#" className="btn btn-primary ">
              完整訂單
            </a>
          </CardActions>
        </div>
      </Card>
    </>
  )
}

export default OrderApp
