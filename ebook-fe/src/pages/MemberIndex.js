import React from 'react'
import { Link } from 'react-router-dom'

function MemberIndex() {
  return (
    <>
      <div>OverView</div>

      <Link className="mx-2" to="/Member/order">
        Order
      </Link>
      <Link className="mx-2" to="/Member/bookshelf">
        Bookshelf
      </Link>
      <Link className="mx-2" to="/Member/coupon">
        Coupon
      </Link>
    </>
  )
}

export default MemberIndex
