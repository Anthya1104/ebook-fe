import React from 'react'
import { Link } from 'react-router-dom'

function OrderDetail() {
  return (
    <>
      <div>OrderDetail</div>
      <Link className="mx-2" to="/Member/order">
        OrderList
      </Link>
    </>
  )
}

export default OrderDetail
