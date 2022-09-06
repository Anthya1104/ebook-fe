import React from 'react'
import '../../style/Mart.scss'
import Category from './Category/Category'
import Card from './Card/Card'
import Breadcrumb from './Breadcrumb'
import Product from './Product'
import Dropdown from './Dropdown'
import Select from './Select/Select'
import TopCategory from './TopCategory/TopCategory'
import Tabbed from './Tabbed/Tabbed'
import CartTable from './CartTable/CartTable'
import ProductPage from './ProductPage/ProductPage'
import ProductInfo from './ProductPage/ProductInfo'

function Index() {
  return (
    <>
      <Category />
      <Card />
      <Breadcrumb />
      <Product />
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

export default Index
