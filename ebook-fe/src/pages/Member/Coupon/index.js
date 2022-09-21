import React from 'react'
import { Outlet } from 'react-router-dom'

function Coupon() {
  return (
    <>
      <dvi className="CouponPage">
        {/* <div>Coupon Index</div> */}
        <Outlet />
      </dvi>
    </>
  )
}

export default Coupon
