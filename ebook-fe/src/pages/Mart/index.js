import React from 'react'

import { Outlet } from 'react-router-dom'
// import ProductDetail from './ProductDetail'
import ProductDetail from './ProductDetail/ProductDetail'
// import Products from '../Product/Products'


function Mart() {
  return (
    <>

      <Outlet />
    </>
  )
}

export default Mart
