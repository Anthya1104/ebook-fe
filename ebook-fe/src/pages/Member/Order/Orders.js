import React from 'react'
import { Link } from 'react-router-dom'

function Orders() {
  const orderId = 1
  return (
    <>
      <div>Order List</div>
      <Link className="mx-2" to={`${orderId}`}>
        Orderdetail
      </Link>
    </>
  )
}

export default Orders
