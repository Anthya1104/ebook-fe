import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
// auth
import { useAuth } from '../../../Context/auth'

function Coupon() {
  const { member, setMember } = useAuth()
  if (!member) {
    return (
      <>
        <Navigate to="/Login" />
      </>
    )
  }
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
