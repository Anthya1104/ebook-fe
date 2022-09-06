import React from 'react'

import { Outlet } from 'react-router-dom'

function Cart() {
  return (
    <>
      <h1>This is Cart Page</h1>

      <Outlet />
    </>
  )
}

export default Cart
