import React from 'react'
import { Outlet } from 'react-router-dom'

function Coupon() {
  return (
    <>
      <div>Coupon Index</div>
      <Outlet />
    </>
  )
}

export default Coupon
