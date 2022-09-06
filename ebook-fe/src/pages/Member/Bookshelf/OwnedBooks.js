import React from 'react'
import { Link } from 'react-router-dom'

function OwnedBooks() {
  const ownedBookId = 1
  return (
    <>
      <div>Book List</div>
      <Link className="mx-2" to={`${ownedBookId}`}>
        Book Detail
      </Link>
    </>
  )
}

export default OwnedBooks
