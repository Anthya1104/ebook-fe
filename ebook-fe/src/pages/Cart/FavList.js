import React from 'react'
import { Link } from 'react-router-dom'
function FavList() {
  return (
    <>
      <h1>FavList</h1>
      <Link className="mx-2" to="/Cart">
        <h1>ToBuyList</h1>
      </Link>
    </>
  )
}

export default FavList
