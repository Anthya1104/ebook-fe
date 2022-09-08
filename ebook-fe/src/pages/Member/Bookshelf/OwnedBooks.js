import React from 'react'
import { Link } from 'react-router-dom'
import RecentBook from './Component/RecentBook'



function OwnedBooks() {
  const ownedBookId = 1
  return (
    <>
      <div className="d-flex-column justify-content-left">
        <div>Book List</div>
        <RecentBook />
        <Link className="mx-2" to={`${ownedBookId}`}>
          Book Detail
        </Link>
      </div>
    </>
  )
}

export default OwnedBooks
