import React from 'react'
import { Link, useParams } from 'react-router-dom'

function OwnedBookDetail() {
  const { ownedBookId } = useParams()
  return (
    <>
      <div>BookDetail:{ownedBookId}</div>
      <Link className="mx-2" to="/Member/bookshelf">
        Back to bookshelf
      </Link>
    </>
  )
}

export default OwnedBookDetail
