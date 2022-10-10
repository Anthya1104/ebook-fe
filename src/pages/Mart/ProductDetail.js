import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetail() {
  const { productId } = useParams()
  return (
    <>
      <div>ProductDetail:{productId}</div>
      <Link to="/Mart">Back to List</Link>
    </>
  )
}

export default ProductDetail
