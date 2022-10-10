import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfo from '../Product/ProductInfo/ProductInfo'

// import products from '../data/products.json'

function ProductDetail() {
  const { productId } = useParams()
  return (
    <>

        <div className='mt-5'>
          {/* ProductDetail:{productId} */}
          <ProductInfo productId={productId} />
        </div>
    </>
  )
}

export default ProductDetail
