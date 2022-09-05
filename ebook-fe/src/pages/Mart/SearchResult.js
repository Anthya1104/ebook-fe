import React from 'react'
import { Link } from 'react-router-dom'

function SearchResult() {
  return (
    <>
      <div>Searched Products</div>
      <Link className="mx-2" to="/Mart">
        Back to Products
      </Link>
    </>
  )
}

export default SearchResult
