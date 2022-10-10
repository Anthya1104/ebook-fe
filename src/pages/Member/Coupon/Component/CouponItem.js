import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from 'react-router-dom'
import './CouponList.scss'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Cards from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import ScrollToTop from './Component/ScrollToTop'
import couponData from './marketing.json'
// import couponData from './coupon.json'
import business from '../../../img/business.png'
import lecture from '../../../img/novel.png'
import social from '../../../img/social.png'

import coupon from '../../../img/coupon.png'
import couponz from '../../../img/test-coupon.png'

function CouponItem(props) {
  const { url, Coupon_name, Coupon_discount, Coupon_edte, Coupon_code } = props.couponData
  return (
    <>
        <div className="d-flex flex-wrap">
          {couponData.map((v, i) => {
            return (
              <Cards
                sx={{ maxWidth: 343, height: 147 }}
                className="mb-4  ms-5 coupon-bg coupon-card"
                style={{ backgroundColor: 'rgba($color: #ffffff, $alpha: 0)' }}
              >
                <div className="row g-0">
                  <CardContent className="text-white d-flex">
                    <div className="img-align ms-2 mt-4">
                      <Typography variant="body1" className="">
                        <img src={v.url} alt="..." />
                      </Typography>
                    </div>
                    <div className="ms-5">
                      <Typography variant="h5">{v.Coupon_name}</Typography>
                      <Typography variant="h4">${v.Coupon_discount}</Typography>
                      <Typography variant="body1" className="">
                        {v.Coupon_edte}
                      </Typography>
                      <Typography variant="body1" className="">
                        {v.Coupon_code}
                      </Typography>
                    </div>
                  </CardContent>
                </div>
              </Cards>
            )
          })}




        </div>
    </>
  )


export default CouponItem