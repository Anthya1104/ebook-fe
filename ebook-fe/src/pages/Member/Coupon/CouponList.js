// import React from 'react'
// import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import { Link } from 'react-router-dom'
// // import './CouponList.scss'
// import Breadcrumb from 'react-bootstrap/Breadcrumb'
// import Cards from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'
// import { useState } from 'react'
// import ScrollToTop from './Component/ScrollToTop'
// import couponData from './marketing.json'
// // import couponData from './coupon.json'
// import business from '../../../img/business.png'
// import lecture from '../../../img/novel.png'
// import social from '../../../img/social.png'

// import coupon from '../../../img/coupon.png'
// import couponz from '../../../img/test-coupon.png'
// // import coupon1 from '../../../img/coupon-business.png'
// // import coupon2 from '../../../img/coupon-novel.png'
// // import coupon3 from '../../../img/coupon-social.png'
// // import coupon4 from '../../../img/coupon-lifestyle.png'
// // import coupon5 from '../../../img/coupon-art.png'
// // import coupon6 from '../../../img/coupon-science.png'
// // import coupon7 from '../../../img/coupon-travel.png'
// // import coupon8 from '../../../img/coupon-medical.png'
// // import coupon9 from '../../../img/coupon-grow.png'
// // import coupon10 from '../../../img/coupon-new.png'

// function CouponList() {
//   // const couponId = 1
//   // const [ticket setTicket] = useState("");
//   return (
//     <>
//       <div className="container d-flex flex-column">
//         <ScrollToTop />
//       {/* 麵包屑 */}
//         <div className="ms-5">
//           <Breadcrumb>
//             <Breadcrumb.Item href="http://localhost:3005">首頁</Breadcrumb.Item>
//             <Breadcrumb.Item href="../../Member">會員專區</Breadcrumb.Item>
//             <Breadcrumb.Item active>優惠券</Breadcrumb.Item>
//           </Breadcrumb>
//         </div>

//         <div className="d-flex justify-content-end me-2">
//           <div className="coupon-dropdown col-3 mb-4 dp me-5">
//             <DropdownButton
//               align="end"
//               title="優惠券排序"
//               id="dropdown-menu-align-end"
//             >
//               <Dropdown.Item eventKey="1">日期舊到新</Dropdown.Item>
//               <Dropdown.Item eventKey="2">日期新到舊</Dropdown.Item>
//               <Dropdown.Item eventKey="3">折扣少到多</Dropdown.Item>
//               <Dropdown.Item eventKey="4">折扣多到少</Dropdown.Item>
//             </DropdownButton>
//           </div>
//         </div>
//         <div className="d-flex flex-wrap">
//           {couponData.map((v, i) => {
//             return (
//               <Cards
//                 sx={{ maxWidth: 343, height: 147 }}
//                 className="mb-4  ms-5 coupon-bg coupon-card"
//                 style={{ backgroundColor: 'rgba($color: #ffffff, $alpha: 0)' }}
//               >
//                 <div className="row g-0">
//                   <CardContent className="text-white d-flex">
//                     <div className="img-align ms-2 mt-4">
//                       <Typography variant="body1" className="">
//                         <img src={v.url} alt="..." />
//                       </Typography>
//                     </div>
//                     <div className="ms-5">
//                       <Typography variant="h5">{v.Coupon_name}</Typography>
//                       <Typography variant="h4">${v.Coupon_discount}</Typography>
//                       <Typography variant="body1" className="">
//                         {v.Coupon_edte}
//                       </Typography>
//                       <Typography variant="body1" className="">
//                         {v.Coupon_code}
//                       </Typography>
//                     </div>
//                   </CardContent>
//                 </div>
//               </Cards>
//             )
//           })}
//         </div>
//       </div>
//     </>
//   )
// }

// export default CouponList

//.............................................old....................................................

import { React, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from 'react-router-dom'
// import './CouponList.scss'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Cards from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import ScrollToTop from './Component/ScrollToTop'
import couponData from './marketing.json'
import { Coupon } from './marketing'
// import couponData from './coupon.json'
import business from '../../../img/business.png'
import lecture from '../../../img/novel.png'
import social from '../../../img/social.png'

import coupon from '../../../img/coupon.png'
import couponz from '../../../img/test-coupon.png'
import axios from 'axios'
import { API_URL } from '../../../utils/config'
import { useAuth } from '../../../Context/auth'

function CouponList() {
  const { member, setMember } = useAuth()
  const [coupons, setCoupons] = useState(Coupon)

  useEffect(() => {
    const getCoupon = async () => {
      let response = await axios.get(`${API_URL}/coupon/get-coupon`, {
        withCredentials: true,
      })
      console.log(response)
    }
    getCoupon()
  }, [])

  const onSelected = (e) => {
    const index = e.target.value
    let cTemp = []
    console.log(index)
    switch (index) {
      case '1':
        cTemp = [...coupons].sort(
          (a, b) => new Date(a.Coupon_sdte) - new Date(b.Coupon_sdte)
        )
        break
      case '2':
        cTemp = [...coupons].sort(
          (a, b) => new Date(b.Coupon_sdte) - new Date(a.Coupon_sdte)
        )
        cTemp = [...coupons].sort(
          (a, b) => new Date(b.Coupon_edte) - new Date(a.Coupon_edte)
        )
        break
      case '3':
        cTemp = [...coupons].sort(
          (a, b) => parseInt(a.Coupon_discount) - parseInt(b.Coupon_discount)
        )
        break
      case '4':
        cTemp = [...coupons].sort(
          (a, b) => parseInt(b.Coupon_discount) - parseInt(a.Coupon_discount)
        )
        break
      default:
        cTemp = [...coupons].sort((a, b) => parseInt(a.id) - parseInt(b.id))
        break
    }
    console.log(cTemp)
    setCoupons(cTemp)
  }
  return (
    <>
      <div className="container d-flex flex-column">
        <ScrollToTop />
        {/* 麵包屑 */}
        <div className="ms-5">
          <Breadcrumb>
            <Breadcrumb.Item href="http://localhost:3005">首頁</Breadcrumb.Item>
            <Breadcrumb.Item href="../../Member">會員專區</Breadcrumb.Item>
            <Breadcrumb.Item active>優惠券</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex justify-content-end me-2">
          <div className="coupon-dropdown col-3 mb-4 dp me-5 oprator">
            {/* <DropdownButton
              align="end"
              title="優惠券排序"
              id="op"
              onChange={onSelected}
            >
              <Dropdown.Item eventKey="1" value="1">日期舊到新</Dropdown.Item>
              <Dropdown.Item eventKey="2" value="2">日期新到舊</Dropdown.Item>
              <Dropdown.Item eventKey="3" value="3">折扣少到多</Dropdown.Item>
              <Dropdown.Item eventKey="4" value="4">折扣多到少</Dropdown.Item>
            </DropdownButton> */}
            <select
              className="coupon-select"
              name="op"
              id="op"
              onChange={onSelected}
            >
              <option className="coupon-option" value="1">
                日期舊到新
              </option>
              <option className="coupon-option" value="2">
                日期新到舊
              </option>
              <option className="coupon-option" value="3">
                折扣少到多
              </option>
              <option className="coupon-option" value="4">
                折扣多到少
              </option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {coupons &&
            coupons.map((c, i) => (
              <Cards
                sx={{ maxWidth: 343, height: 147 }}
                className="mb-4  ms-5 coupon-bg coupon-card"
                style={{ backgroundColor: 'rgba($color: #ffffff, $alpha: 0)' }}
              >
                <div className="row g-0 " key={`coupon${i}`}>
                  <CardContent className="text-white d-flex">
                    <div className="img-align ms-2 mt-4">
                      <Typography variant="body1" className="">
                        <img src={c.url} alt="..." />
                      </Typography>
                    </div>
                    <div className="ms-5">
                      <Typography variant="h5">{c.Coupon_name}</Typography>
                      <Typography variant="h4">${c.Coupon_discount}</Typography>
                      <Typography variant="body1" className="">
                        {c.Coupon_edte}
                      </Typography>
                      <Typography variant="body1" className="">
                        {c.Coupon_code}
                      </Typography>
                    </div>
                  </CardContent>
                </div>
              </Cards>
            ))}
        </div>
      </div>
    </>
  )
}

export default CouponList
