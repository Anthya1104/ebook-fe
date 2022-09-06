import React from 'react'
import { Link, useParams } from 'react-router-dom'

function OrderDetail() {
  const { orderId } = useParams()
  return (
    <>
      <div>OrderDetail:{orderId}</div>
      <Link className="mx-2" to="/Member/order">
        Back to OrderList
      </Link>
    </>
  )
}

export default OrderDetail
