import React from 'react'
import { Link } from 'react-router-dom'

function OverView() {
  return (
    <>
      <div>OverView</div>
      <Link className="mx-2" to="/Member/order">
        Order
      </Link>
    </>
  )
}

export default OverView
