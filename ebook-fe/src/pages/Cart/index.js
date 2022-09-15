import React from 'react'

import { Outlet } from 'react-router-dom'

// import SingleCart from '../ShoppingCart/SingleCart'
import Test from './Test'

function Cart() {
  return (
    <>
      <h1>This is Cart Page</h1>

      {/* <SingleCart /> */}
      <Test />
      <Outlet />
    </>
  )
}

export default Cart
