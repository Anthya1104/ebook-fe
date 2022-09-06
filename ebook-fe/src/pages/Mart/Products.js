import React from 'react'
import { Link } from 'react-router-dom'

import '../../style/Mart.scss'
import Category from './Category/Category'
import Card from './Card/Card'
import Breadcrumb from './Breadcrumb'
import Dropdown from './Dropdown'
import Select from './Select/Select'
import TopCategory from './TopCategory/TopCategory'
import Tabbed from './Tabbed/Tabbed'
import CartTable from './CartTable/CartTable'
import ProductPage from './ProductPage/ProductPage'
import ProductInfo from './ProductPage/ProductInfo'

function Products() {
  return (
    <>
      <div>Products</div>
      <Link className="mx-2" to="/Mart/SearchResult">
        Search
      </Link>
      <Category />
      <Card />
      <Breadcrumb />
      <Dropdown />
      <Select />
      <TopCategory />
      <Tabbed />
      <CartTable />
      <ProductPage />
      <ProductInfo />
    </>
  )
}

export default Products
