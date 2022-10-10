import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfo from './ProductInfo/ProductInfo'
import Category from '../Category/Category'
import Card from '../Card/Card'
import Breadcrumb from '../Breadcrumb'

import Tabbed from '../Tabbed/Tabbed'
import CartTable from '../CartTable/CartTable'
import './ProductDetail.scss'

function ProductDetail() {
  // 商品主頁
  const { productId } = useParams()
  return (
    
    <div className="ProductDetail">
      <Breadcrumb />
      <div className="ProductDetail-container">
        <Category />
        <ProductInfo />
      </div>
      {/* <Link to="/Mart">Back to List</Link> */}

      {/* <Card />
      <Tabbed />
      <CartTable /> */}
    </div>
  )
}

export default ProductDetail
