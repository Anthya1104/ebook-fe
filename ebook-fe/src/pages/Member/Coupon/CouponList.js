import React from 'react'
import { Link } from 'react-router-dom'

function CouponList() {
  const couponId = 1
  return (
    <>
      <div>Coupon List</div>
      <Link className="mx-2" to={`${couponId}`}>
        Coupon Detail
      </Link>
    </>
  )
}

export default CouponList
