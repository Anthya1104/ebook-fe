import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <>
      <div>Products</div>
      <Link className="mx-2" to="/Mart/SearchResult">
        Search
      </Link>
    </>
  )
}

export default Products
