import React from 'react'
import { Outlet } from 'react-router-dom'

function Order() {
  return (
    <>
      <div>Order index</div>
      <Outlet />
    </>
  )
}

export default Order
