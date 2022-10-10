import React from 'react'
import { Link } from 'react-router-dom'

function ToBuyList() {
  return (
    <>
      <Link className="mx-2" to="/Cart/fav-list">
        <h1>FavList</h1>
      </Link>

      <h1>ToBuyList</h1>
    </>
  )
}

export default ToBuyList
