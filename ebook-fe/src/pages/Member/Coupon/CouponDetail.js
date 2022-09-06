import React from 'react'
import { Link, useParams } from 'react-router-dom'

function CouponDetail() {
  const { couponId } = useParams()
  return (
    <>
      <div>CouponDetail:{couponId}</div>
      <Link className="mx-2" to="/Member/coupon">
        Back to Coupon List
      </Link>
    </>
  )
}

export default CouponDetail
