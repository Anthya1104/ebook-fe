import React from 'react'
import { Link } from 'react-router-dom'

function Orders() {
  return (
    <>
      <div>Order List</div>
      <Link className="mx-2" to="orderdetail">
        Orderdetail
      </Link>
    </>
  )
}

export default Orders
